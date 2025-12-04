import { Component, inject, input, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { EditUser } from '../../../interfaces/edit-user-interface';
import { NgClass } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { EditUserService } from '../../../services/edit-user-service';
import { UpdateUserImageService } from '../../../services/update-user-image-service';
import { LoginPayload } from '../../../interfaces/auth-interface';

@Component({
  selector: 'app-edit-data',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-data.html',
  styles: ``,
})
export class EditData {

  authService = inject ( AuthService )
  editUserService = inject ( EditUserService )
  updateUserImageService = inject ( UpdateUserImageService )

  defaultInfo = {
    email: this.authService.userData()?.email,
    password: this.authService.password(),
    name: this.authService.userData()?.nombre,
    lastname_p: this.authService.userData()?.apellidoP,
    lastname_m: this.authService.userData()?.apellidoM
  }

  updatedProfile = output<LoginPayload>()

  activedEditForm = input.required<boolean>()
  disableEditForm = output<void>()

  imagen: File | null = null;
  imagenPreview = signal<string>('')
  uploadedImage = signal<boolean>(false)
  imgUrl = signal<string>(`${ environment.apiUrl }/usuario/image/${ this.authService.userData()?.imagenPerfil }`)

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

  emitUpdatedProfile(credentials: LoginPayload): void {
    this.updatedProfile.emit(credentials)
  }

  onFileSelected(event: Event): void {
    this.uploadedImage.set(true);
    const file = (event.target as HTMLInputElement).files?.[0];
    if(file){
      this.imagen = file;
      const reader = new FileReader();
      reader.onload = () => this.imagenPreview.set(reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  emitDisableEditForm(): void {
    this.disableEditForm.emit()
  }

  onSubmit(): void {

    if(this.userDataForm.value.email === ''){
      this.userDataForm.value.email = this.defaultInfo.email
    }
    if(this.userDataForm.value.password === ''){
      this.userDataForm.value.password = this.defaultInfo.password
    }
    if(this.userDataForm.value.name === ''){
      this.userDataForm.value.name = this.defaultInfo.name
    }
    if(this.userDataForm.value.lastname_p === ''){
      this.userDataForm.value.lastname_p = this.defaultInfo.lastname_p
    }
    if(this.userDataForm.value.lastname_m === ''){
      this.userDataForm.value.lastname_m = this.defaultInfo.lastname_m
    }

    const userData: EditUser = {
      id: this.authService.userData()?.id,
      email: this.userDataForm.value.email,
      password: this.userDataForm.value.password,
      rol: 'comun',
      nombre: this.userDataForm.value.name,
      apellidoP: this.userDataForm.value.lastname_p,
      apellidoM: this.userDataForm.value.lastname_m
    }

    this.editUserService.updateUser(userData).subscribe({
      next: (resp) => {
        console.log(resp)
        this.emitUpdatedProfile({
          email: userData.email,
          password: userData.password
        })
      },
      error: (err) => console.log(err)
    })

    if(this.imagen){
      const imageData = new FormData()
      imageData.append('file', this.imagen, this.imagen.name)
      this.updateUserImageService.uploadImage(imageData, this.authService.userData()?.id ?? 0)
    }

  }

}
