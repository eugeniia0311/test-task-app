import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css'],
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/menus']);
  }
}
