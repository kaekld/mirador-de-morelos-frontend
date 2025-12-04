import { NgClass } from '@angular/common';
import { Component, inject, input, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NewPost } from '../../../../../interfaces/new-post-interface';
import { NewPostService } from '../../../../../services/new-post-service';

@Component({
  selector: 'app-new-post-form',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './new-post-form.html',
  styles: ``,
})
export class NewPostForm {

  private newPostService = inject( NewPostService )

  placeId = input.required<number | null | undefined>()
  activedNewPostModal = input.required<boolean>()
  disableNewPostModal = output<void>()

  postForm: FormGroup;
  titulo: FormControl;
  contenido: FormControl;

  imagen: File | null = null;
  imagenPreview = signal<string>('')
  uploadedImage = signal<boolean>(false)

  updatePostCards = output<void>()

  constructor(){
    this.titulo = new FormControl('');
    this.contenido = new FormControl('');
    this.postForm = new FormGroup({
      titulo: this.titulo,
      contenido: this.contenido
    })
  }

  emitDisablePostModal(): void {
    this.disableNewPostModal.emit()
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

  emitUpdateCards(): void {
    this.updatePostCards.emit()
  }


  onSubmit(): void {
    const newPostData: NewPost = {
      titulo: this.postForm.value.titulo,
      contenido: this.postForm.value.contenido,
      imagen: null,
      id_negocio: this.placeId() ?? 0
    }

    if(this.imagen){
      const formData = new FormData()
      formData.append('imagen', this.imagen, this.imagen.name)
      formData.append('publicacion', (new Blob(
        [JSON.stringify(newPostData)], {type: 'application/json'}
      )))

      this.newPostService.sendNewPost(formData).subscribe({
        next: () => {
          this.emitUpdateCards()
          this.postForm.reset();
          this.imagen = null;
          this.imagenPreview.set('');
          this.uploadedImage.set(false);
          this.emitUpdateCards();
        }
      })

    }
  }
}
