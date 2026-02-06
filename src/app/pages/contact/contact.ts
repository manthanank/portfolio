import { Component, signal, inject, computed } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { Data } from '../../services/data';
import { Firestore, collection, addDoc, serverTimestamp } from '@angular/fire/firestore';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private fb = inject(FormBuilder);
  private dataService = inject(Data);
  private firestore = inject(Firestore);
  private seoService = inject(SeoService);

  // --- Form State ---
  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  // --- Reactive Data (Signals) ---
  contactData = toSignal(this.dataService.getContact(), { initialValue: null });
  
  // --- Derived State ---
  contactMethods = computed(() => this.contactData()?.methods || []);
  socialLinks = computed(() => this.contactData()?.socialLinks || []);

  // --- Application State ---
  isSubmitting = signal(false);
  submitMessage = signal('');
  submitSuccess = signal(false);

  constructor() {
    // Set SEO meta tags
    this.seoService.updateMetaTags({
      title: 'Contact Me | Manthan Ankolekar - Full Stack Developer',
      description: 'Get in touch with me for collaboration, job opportunities, or just to say hello. I\'m always open to discussing new projects and ideas.',
      keywords: 'Contact Manthan Ankolekar, Hire Developer, Full Stack Developer Contact, Freelance Developer',
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.submitMessage.set('');
      this.dataService.logEvent('contact_form_submit_start', { subject: this.contactForm.value.subject });

      try {
        const formData = this.contactForm.value;
        const contactsCollection = collection(this.firestore, 'contacts');
        
        await addDoc(contactsCollection, {
          ...formData,
          createdAt: serverTimestamp()
        });

        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.submitMessage.set('Thank you for your message! I\'ll get back to you soon.');
        this.dataService.logEvent('contact_form_submit_success');
        this.contactForm.reset();

        setTimeout(() => {
          this.submitMessage.set('');
          this.submitSuccess.set(false);
        }, 5000);
      } catch (error) {
        console.error('Error adding document: ', error);
        this.isSubmitting.set(false);
        this.submitSuccess.set(false);
        this.submitMessage.set('Something went wrong. Please try again later.');
        this.dataService.logEvent('contact_form_submit_error', { error: error instanceof Error ? error.message : 'Unknown error' });
      }
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors['required']) return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['minlength']) return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${field.errors['minlength'].requiredLength} characters`;
    }
    return '';
  }
}