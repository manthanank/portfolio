import { Component, OnInit, signal, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Data } from '../../services/data';
import { ContactMethod, SocialLink } from '../../models';
import { Firestore, collection, addDoc, serverTimestamp } from '@angular/fire/firestore';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = signal(false);
  submitMessage = signal('');
  submitSuccess = signal(false);
  contactMethods = signal<ContactMethod[]>([]);
  socialLinks = signal<SocialLink[]>([]);

  private fb = inject(FormBuilder);
  private dataService = inject(Data);
  private firestore = inject(Firestore);
  private seoService = inject(SeoService);

  ngOnInit() {
    // Set SEO meta tags for contact page
    this.seoService.updateMetaTags({
      title: 'Contact Me | Manthan Ankolekar - Full Stack Developer',
      description: 'Get in touch with me for collaboration, job opportunities, or just to say hello. I\'m always open to discussing new projects and ideas.',
      keywords: 'Contact Manthan Ankolekar, Hire Developer, Full Stack Developer Contact, Freelance Developer',
    });

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.dataService.getContact().subscribe((contactData: { methods: ContactMethod[]; socialLinks: SocialLink[] } | null) => {
      if (contactData) {
        this.contactMethods.set(contactData.methods || []);
        this.socialLinks.set(contactData.socialLinks || []);
      }
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.submitMessage.set('');
      this.dataService.logEvent('contact_form_submit_start', { subject: this.contactForm.value.subject });

      try {
        const contactData = {
          ...this.contactForm.value,
          createdAt: serverTimestamp()
        };

        const contactsCollection = collection(this.firestore, 'contacts');
        await addDoc(contactsCollection, contactData);

        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.submitMessage.set('Thank you for your message! I\'ll get back to you soon.');
        this.dataService.logEvent('contact_form_submit_success');
        this.contactForm.reset();

        // Clear success message after 5 seconds
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
      if (field.errors['required']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${requiredLength} characters`;
      }
    }
    return '';
  }
}