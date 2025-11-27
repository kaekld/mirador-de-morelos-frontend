import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-register-form-modal',
  imports: [NgClass],
  templateUrl: './register-form-modal.html',
  styles: ``,
})
export class RegisterFormModal {

  activedRegister = input.required<boolean>();
  disableRegister = output<void>();
  fadeOut: boolean = false;

  emitDisable(): void {
    this.fadeOut = true;
    setTimeout(() => {
      this.fadeOut = false;
      this.disableRegister.emit()
    },500)
  }

}
