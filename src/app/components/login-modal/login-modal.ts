import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  imports: [NgClass],
  templateUrl: './login-modal.html',
  styles: ``,
})
export class LoginModal {

  activeLogin = input.required<boolean>();
  disableLoginModal = output<boolean>();
  fadeOut: boolean = false;

  emitDisable(): void {
    this.fadeOut = true;
    
    this.disableLoginModal.emit(false);
  }

}
