import { Component } from '@angular/core';
import { WipComponent } from '../wip/wip.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WipComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
