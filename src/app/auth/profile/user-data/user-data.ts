import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import { LucideAngularModule, Pencil } from 'lucide-angular';
@Component({
  selector: 'app-user-data',
  imports: [LucideAngularModule],
  templateUrl: './user-data.html',
  styles: ``,
})
export class UserData {

  authService = inject( AuthService );

  Pencil = Pencil;

}
