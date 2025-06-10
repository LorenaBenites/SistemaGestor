import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login-component',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  constructor(
    private routes:Router 
  ){}
  nombre = '';
  contrasena = '';

  login(){
    this.routes.navigate(["/home"])
  }
}
