import { NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, effect, inject, input, OnInit, output, signal } from '@angular/core';
import { LucideAngularModule, X } from 'lucide-angular';
import { RegisterFormModal } from "../register-form-modal/register-form-modal";
import { AuthService } from '../../services/auth-service';
import { LoginPayload } from '../../interfaces/auth-interface';
import { LoginSucessfulModal } from "./login-sucessful-modal/login-sucessful-modal";

@Component({
  selector: 'app-login-modal',
  imports: [NgClass, RegisterFormModal, LucideAngularModule, ReactiveFormsModule, LoginSucessfulModal],
  templateUrl: './login-modal.html',
  styles: ``,
})
export class LoginModal{

  authService = inject( AuthService );

  Close = X;

  activeLogin = input.required<boolean>();
  disableLoginModal = output<void>();
  fadeOut = signal<boolean>(false);
  activedRegisterFormModal: boolean = false;
  showSucessfulModal: boolean = false;

  userLoginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  invalidCredentials = signal<boolean>(false)

  constructor() {
    this.email = new FormControl('');
    this.password = new FormControl('');

    this.userLoginForm = new FormGroup({
      email: this.email,
      password: this.password
    })

  }

  emitDisable(): void {
    this.fadeOut.set(true);
    console.log(this.fadeOut)

    setTimeout(() => {
      this.fadeOut.set(false);
      console.log(this.fadeOut)

      this.disableLoginModal.emit();
    }, 500)

  }

  toggleRegisterFormModal(): void {
    this.activedRegisterFormModal = !this.activedRegisterFormModal
  }

  // Cambiar de modal
  toggleModal(): void {
    this.emitDisable();
    this.toggleRegisterFormModal();
  }

  toggleSuccessfulModal(): void {
    this.showSucessfulModal = !this.showSucessfulModal
  }

  handleSubmit(): void {

    const formData: LoginPayload = {
      email: this.userLoginForm.value.email,
      password: this.userLoginForm.value.password
    }

    this.authService.loginUser(formData).subscribe({
      next: resp => {
        this.authService.password.set(formData.password)
        this.authService.userData.set(resp.usuario);
        this.authService.loginMessage.set(resp.mensaje);
        this.authService.loginSuccessful.set(resp.mensaje === 'Login correcto')
        this.invalidCredentials.set(false)
        this.toggleSuccessfulModal();
        this.emitDisable();
      },
      error: err => {
        this.invalidCredentials.set(true)
      },
    });

  }

}
