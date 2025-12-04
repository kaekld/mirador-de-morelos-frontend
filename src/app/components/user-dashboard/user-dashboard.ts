import { Component, inject, input, output } from '@angular/core';
import { LoginModal } from "../login-modal/login-modal";
import { LucideAngularModule, User, X, Store, StickyNote, Lock, LogOut } from 'lucide-angular';
import { AuthService } from '../../services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-user-dashboard',
  imports: [LoginModal, LucideAngularModule, RouterLink],
  templateUrl: './user-dashboard.html',
  styles: ``,
})
export class UserDashboard {

  imgUrl: string = `${ environment.apiUrl }/usuario/image/`

  authService = inject( AuthService )
  router = inject( Router )

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
    this.router.navigate(['/home'])
    setTimeout(()=>{
      window.location.reload();
    },500)
    this.emitCloseDashboard()
  }
}
