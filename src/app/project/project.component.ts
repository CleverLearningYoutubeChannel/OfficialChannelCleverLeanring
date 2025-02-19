import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  cartItems = [
    {
      image: 'assets/img/asp.jpeg',
      name: 'ASP FILE MANAGEMENT SYSTEM',
      description: 'This is asp project to download',
      price: 60,
      buyUrl: 'https://rzp.io/l/CLTeam'
    },
    {
      image: 'assets/img/pic2.jpg',
      name: 'PHP Project',
      description: 'This PHP Project',
      price: 60,
      buyUrl: ''
    }
   
  ];

  constructor() {}

  redirectToPayment(url: string) {
    window.location.href = url;
  }
}
