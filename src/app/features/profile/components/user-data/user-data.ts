import { Component, inject, output } from '@angular/core';
import { environment } from '@environments/environment';
import { LucideAngularModule, Pencil } from 'lucide-angular';
import { AuthService } from 'src/app/features/auth/services/auth-service';
@Component({
  selector: 'app-user-data',
  imports: [LucideAngularModule],
  templateUrl: './user-data.html',
  styles: ``,
})
export class UserData {

  authService = inject( AuthService );
  imgUrl: string = `${ environment.apiUrl }/usuario/image/`
  openEditUser = output<void>()

  Pencil = Pencil;

  emitOpenEditUser(): void {
    this.openEditUser.emit()
  }

}
