import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, User } from 'lucide-angular';
import { UserDropdownLogin } from "./user-dropdown-login/user-dropdown-login";

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, RouterLink, UserDropdownLogin],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {

  activedLoginDropDown : boolean = false;

  User = User;

  toggleLoginDropdown(): void {
    this.activedLoginDropDown = !this.activedLoginDropDown;
  }





}
