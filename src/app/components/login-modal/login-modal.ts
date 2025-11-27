import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RegisterFormModal } from "../register-form-modal/register-form-modal";

@Component({
  selector: 'app-login-modal',
  imports: [NgClass, RegisterFormModal],
  templateUrl: './login-modal.html',
  styles: ``,
})
export class LoginModal {

  activeLogin = input.required<boolean>();
  disableLoginModal = output<void>();
  fadeOut: boolean = false;
  activedRegisterFormModal: boolean = false;

  emitDisable(): void {
    this.fadeOut = true;

    setTimeout(() => {
      this.fadeOut = false;
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
}
