import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-my-hr',
  standalone: true,
  imports: [ CardModule, ButtonModule,],
  templateUrl: './my-hr.component.html',
  styleUrl: './my-hr.component.css'
})
export class MyHrComponent {

}
