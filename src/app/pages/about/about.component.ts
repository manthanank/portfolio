import { Component } from '@angular/core';
import { WipComponent } from '../wip/wip.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [WipComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
