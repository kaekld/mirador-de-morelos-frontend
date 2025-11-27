import { Component, input } from '@angular/core';
import { LoginModal } from "../../login-modal/login-modal";

@Component({
  selector: 'app-user-dropdown-login',
  imports: [LoginModal],
  templateUrl: './user-dropdown-login.html',
  styles: ``,
})
export class UserDropdownLogin {

  activedDropDown = input.required<boolean>();

  activedLoginModal: boolean = false;

  toggleLoginModal(): void {
    if(this.activedLoginModal){
      this.activedLoginModal = false;
      return
    }
    this.activedLoginModal = true;
  }

}
