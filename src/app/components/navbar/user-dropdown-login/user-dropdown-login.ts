import { Component, input, output } from '@angular/core';
import { LoginModal } from "../../login-modal/login-modal";

@Component({
  selector: 'app-user-dropdown-login',
  imports: [LoginModal],
  templateUrl: './user-dropdown-login.html',
  styles: ``,
})
export class UserDropdownLogin {

  activedDropDown = input.required<boolean>();
  closeDropdown = output<void>();
  activedLoginModal: boolean = false;

  toggleLoginModal(): void {
    this.activedLoginModal = !this.activedLoginModal;
  }

  emitCloseDropdown(): void {
    this.closeDropdown.emit()
  }

}
