import { Component, inject, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-edit-data',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-data.html',
  styles: ``,
})
export class EditData {

  authService = inject ( AuthService )

  // defaultInfo = {
  //   email: this.authService.userData()?.email,
  //   name: this.authService.userData()?.nombre,
  //   lastname_p: this.authService.userData()?.apellidoP,
  //   lastname_m: this.authService.userData()?.apellidoM
  // }

  defaultInfo = {
    email: 'Example@gmail.com',
    password: 'Hellowda',
    name: 'ExampleName',
    lastname_p: 'ExampleLastname1',
    lastname_m: 'ExampleLastname2'
  }

  activedEditForm = input<boolean>(true)
  disableEditForm = output<void>()

  userDataForm: FormGroup;
  email: FormControl;
  password: FormControl;
  name: FormControl;
  lastname_p: FormControl;
  lastname_m: FormControl;

  constructor(){
    this.email = new FormControl('');
    this.password = new FormControl('');
    this.name = new FormControl('');
    this.lastname_p = new FormControl('');
    this.lastname_m = new FormControl('');

    this.userDataForm = new FormGroup({
      email: this.email,
      password: this.password,
      name: this.name,
      lastname_p: this.lastname_p,
      lastname_m: this.lastname_m,
    });
  }


  emitDisableEditForm(): void {
    this.disableEditForm.emit()
  }
}
