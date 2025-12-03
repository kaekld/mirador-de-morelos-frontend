import { NgClass } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-new-place',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './new-place.html',
  styles: ``,
})
export class NewPlace {

  municipiosMorelos = [
    { id: 1, nombre: "Amacuzac" },
    { id: 2, nombre: "Atlatlahucan" },
    { id: 3, nombre: "Axochiapan" },
    { id: 4, nombre: "Ayala" },
    { id: 6, nombre: "Cuautla" }
  ];

  activedForm = input.required<boolean>()
  closeForm = output<void>()

  placeRegisterForm: FormGroup;
  image: FormControl;
  name: FormControl;
  municipio: FormControl;
  description: FormControl;
  urlMaps: FormControl;
  lunes: FormArray;

  imagePreview = signal<string>('');
  selectedFile: File | null = null;

  uploudedFile = signal<boolean>(false);

  correctMunicipio = signal<boolean>(false);
  blurMunicipio = signal<boolean>(false);

  constructor(){

    // General form
    this.image = new FormControl(File)
    this.name = new FormControl('')
    this.municipio = new FormControl('')
    this.description = new FormControl('')
    this.urlMaps = new FormControl('')

    this.placeRegisterForm = new FormGroup({
      image: this.image,
      name: this.name,
      municipio: this.municipio
    })

  }

  municipioValidator = (municipios: string[]) => (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
        return null; 
    }
    const value = control.value;
    const esValido = municipios.map(m => m.toLowerCase()).includes(value); 
    return esValido ? null : { municipioInvalido: true };
  };

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
    const municipioEntered = this.placeRegisterForm.value.municipio;
    for(const municipio of this.municipiosMorelos ) {
      if(municipioEntered === municipio.nombre) {
        this.correctMunicipio.set(true);
        return
      }
    }
    this.correctMunicipio.set(false)
  }

  emitCloseForm(): void {
    this.closeForm.emit()
  }
}
