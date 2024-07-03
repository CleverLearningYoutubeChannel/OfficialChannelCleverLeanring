import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent,CommonModule,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ]),
    trigger('bounce', [
      transition('void => *', [
        animate('1s ease-in', keyframes([
          style({ transform: 'translateY(-100%)', offset: 0 }),
          style({ transform: 'translateY(15%)', offset: 0.3 }),
          style({ transform: 'translateY(-10%)', offset: 0.5 }),
          style({ transform: 'translateY(0)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Clever Learning'.split('');
  imagePath = 'src/public/assets/Image/asp.jpeg';
}
