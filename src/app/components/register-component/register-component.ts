import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-component',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css'
})
export class RegisterComponent {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UserService
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      rol: ['CLIENTE']
    });
  }

  onSubmit() {
  if (this.registroForm.valid) {
    this.usuarioService.registrar(this.registroForm.value).subscribe({
      next: res => {
        Swal.fire({
          icon: 'success',
          title: '¡Registro exitoso!',
          text: 'El usuario ha sido registrado correctamente.',
          confirmButtonText: 'Aceptar'
        });
      },
      error: err => {
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: err.error?.message || err.message || 'Ocurrió un error desconocido',
          confirmButtonText: 'Cerrar'
        });
      }
    });
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Formulario incompleto',
      text: 'Por favor completa todos los campos obligatorios.',
      confirmButtonText: 'OK'
    });
  }
}

}
