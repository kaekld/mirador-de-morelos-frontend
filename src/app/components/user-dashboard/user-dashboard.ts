import { Component, inject, input, output } from '@angular/core';
import { LoginModal } from "../login-modal/login-modal";
import { LucideAngularModule, User, X, Store, StickyNote } from 'lucide-angular';
import { NgClass } from '@angular/common';
import { AuthService } from '../../services/auth-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  imports: [LoginModal, LucideAngularModule, NgClass, RouterLink],
  templateUrl: './user-dashboard.html',
  styles: ``,
})
export class UserDashboard {

  authService = inject( AuthService )

  User = User;
  Close = X;
  Store = Store;
  StickyNote = StickyNote;

  activedDashboard = input.required<boolean>();
  closeDashboard = output<void>();
  activedLoginModal: boolean = false;

  toggleLoginModal(): void {
    this.activedLoginModal = !this.activedLoginModal;
  }

  emitCloseDashboard(): void {
    this.closeDashboard.emit()
  }

}
