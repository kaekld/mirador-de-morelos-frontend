import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, User } from 'lucide-angular';
import { LoginModal } from "../login-modal/login-modal";

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, RouterLink, LoginModal],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  
  activeLoginModal: boolean = false;

  User = User;

  openLoginModal(): void {
    this.activeLoginModal = true;
  }

  closeLoginModal( value: boolean ): void {
    this.activeLoginModal = value;
  }


}
