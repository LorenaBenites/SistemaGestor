import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css'],
})
export class LoginComponent {
  nombre = '';
  contrasena = '';

  constructor(private router: Router) {}

  login() {
    if (this.nombre && this.contrasena) {
      this.router.navigate(['/home']);
    } else {
      console.log('Por favor, completa ambos campos.');
    }
  }

  irARegistro() {

    this.router.navigate(['/register']);
  }
}
