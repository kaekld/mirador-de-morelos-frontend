import { Component, inject, output } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import { LucideAngularModule, Pencil } from 'lucide-angular';
import { environment } from '../../../../environments/environment';
import { EditData } from "../edit-data/edit-data";
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
