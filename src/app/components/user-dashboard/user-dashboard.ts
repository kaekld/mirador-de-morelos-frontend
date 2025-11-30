import { Component, inject, input, output } from '@angular/core';
import { LoginModal } from "../login-modal/login-modal";
import { LucideAngularModule, User, X } from 'lucide-angular';
import { NgClass } from '@angular/common';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-user-dashboard',
  imports: [LoginModal, LucideAngularModule, NgClass],
  templateUrl: './user-dashboard.html',
  styles: ``,
})
export class UserDashboard {

  authService = inject( AuthService )

  User = User;
  Close = X

  activedDashboard = input.required<boolean>();
  closeDashboard = output<void>();
  activedLoginModal: boolean = false;
  fadeOut: boolean = false;

  toggleLoginModal(): void {
    this.activedLoginModal = !this.activedLoginModal;
  }

  emitCloseDashboard(): void {
    this.fadeOut = true;
    setTimeout(()=>{
      this.fadeOut = false;
      this.closeDashboard.emit()
    },500)
  }

}
