import { Component } from '@angular/core';
import { WipComponent } from '../wip/wip.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [WipComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
