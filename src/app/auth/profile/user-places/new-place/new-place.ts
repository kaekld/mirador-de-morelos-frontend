import { NgClass } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-place',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './new-place.html',
  styles: ``,
})
export class NewPlace {

  municipiosMorelos: string[] = [
    "Amacuzac", "Atlatlahucan", "Axochiapan", "Ayala", "Cuautla"
  ];

  activedForm = input.required<boolean>()
  closeForm = output<void>()

  placeRegisterForm: FormGroup;
  image: FormControl;
  municipio: FormControl;

  imagePreview = signal<string>('');
  selectedFile: File | null = null;

  uploudedFile = signal<boolean>(false);

  correctMunicipio = signal<boolean>(false);
  blurMunicipio = signal<boolean>(false);

  constructor(){

    this.image = new FormControl(File)
    this.municipio = new FormControl('')

    this.placeRegisterForm = new FormGroup({
      image: this.image,
      municipio: this.municipio
    })

  }

  onFileSelected(event: Event): void {
    this.uploudedFile.set(true);
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => this.imagePreview.set(reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  validateMunicipio(): void {
    this.blurMunicipio.set(true);
    const municipioEntered = this.municipio.value;
    for(const municipio of this.municipiosMorelos ) {
      if(municipioEntered === municipio) {
        this.correctMunicipio.set(true);
        return
      }
    }
  }

  emitCloseForm(): void {
    this.closeForm.emit()
  }
}
