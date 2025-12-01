import { Component, inject, input, output } from '@angular/core';
import { LoginModal } from "../login-modal/login-modal";
import { LucideAngularModule, User, X, Store, StickyNote, Lock, LogOut } from 'lucide-angular';
import { AuthService } from '../../services/auth-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  imports: [LoginModal, LucideAngularModule, RouterLink],
  templateUrl: './user-dashboard.html',
  styles: ``,
})
export class UserDashboard {

  authService = inject( AuthService )

  User = User;
  Close = X;
  Store = Store;
  StickyNote = StickyNote;
  Lock = Lock;
  LogOut = LogOut;

  activedDashboard = input.required<boolean>();
  closeDashboard = output<void>();
  activedLoginModal: boolean = false;

  toggleLoginModal(): void {
    this.activedLoginModal = !this.activedLoginModal;
  }

  emitCloseDashboard(): void {
    this.closeDashboard.emit()
  }

  logout(): void {
    window.location.reload();
    this.emitCloseDashboard()
  }
}
