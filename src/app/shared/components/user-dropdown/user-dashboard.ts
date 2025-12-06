import { Component, inject, input, output } from '@angular/core';
import { LucideAngularModule, User, X, Store, StickyNote, Lock, LogOut } from 'lucide-angular';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { LoginModal } from '../../../features/auth/components/login-modal/login-modal';
import { AuthService } from '../../../features/auth/services/auth-service';

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
