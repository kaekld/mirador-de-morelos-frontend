import { NgClass } from '@angular/common';
import { Component, inject, input, output, signal } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { Horario, PlacePost, URLs } from '../../../../interfaces/place-post-interface';
import { AuthService } from '../../../../services/auth-service';
import { NewPlaceService } from '../../../../services/new-place-service';

@Component({
  selector: 'app-new-place',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './new-place.html',
  styles: ``,
})
export class NewPlace {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService)
  private newPlaceService = inject(NewPlaceService)

  municipiosMorelos = [
    { id: 1, nombre: "Amacuzac" },
    { id: 2, nombre: "Atlatlahucan" },
    { id: 3, nombre: "Axochiapan" },
    { id: 4, nombre: "Ayala" },
    { id: 6, nombre: "Cuautla" }
  ];

  categories = [
    {id: 1, nombre: "Comida", checked: false},
    {id: 2, nombre: "Social", checked: false},
    {id: 3, nombre: "Cultural", checked: false},
    {id: 4, nombre: "Restaurante", checked: false},
    {id: 5, nombre: "Cafetería", checked: false},
    {id: 6, nombre: "Bar", checked: false},
  ]

  activedForm = input.required<boolean>()
  closeForm = output<void>()
  updatePlacesList = output<void>();

  // Datos principales
  placeRegisterForm: FormGroup;
  image: FormControl;
  name: FormControl;
  cellphone: FormControl;
  municipio: FormControl;
  description: FormControl;
  urlMaps: FormControl;

  // Horarios
  scheduleForm: FormGroup;
  lunes: FormArray;
  martes: FormArray;
  miercoles: FormArray;
  jueves: FormArray;
  viernes: FormArray;
  sabado: FormArray;
  domingo: FormArray;

  // Categorias
  categoryForm: FormGroup;

  imagePreview = signal<string>('');
  selectedFile: File | null = null;
  uploudedFile = signal<boolean>(false);

  correctMunicipio = signal<boolean>(false);
  blurMunicipio = signal<boolean>(false);

  //URLs
  urlsForm: FormGroup;
  facebook: FormControl;
  instagram: FormControl;
  sitio_web: FormControl;

  constructor(){

    // General form
    this.image = new FormControl(null)
    this.name = new FormControl('')
    this.cellphone = new FormControl('')
    this.municipio = new FormControl('')
    this.description = new FormControl('')
    this.urlMaps = new FormControl('')

    this.placeRegisterForm = new FormGroup({
      image: this.image,
      name: this.name,
      cellphone: this.cellphone,
      municipio: this.municipio,
      description: this.description,
      urlMaps: this.urlMaps
    })

    // Horario form
    this.lunes = new FormArray([
      new FormControl('Lunes'),
      new FormControl(''),
      new FormControl('')
    ])
    this.martes = new FormArray([
      new FormControl('Martes'),
      new FormControl(''),
      new FormControl('')
    ])
    this.miercoles = new FormArray([
      new FormControl('Miercoles'),
      new FormControl(''),
      new FormControl('')
    ])
    this.jueves = new FormArray([
      new FormControl('Jueves'),
      new FormControl(''),
      new FormControl('')
    ])
    this.viernes = new FormArray([
      new FormControl('Viernes'),
      new FormControl(''),
      new FormControl('')
    ])
    this.sabado = new FormArray([
      new FormControl('Sabado'),
      new FormControl(''),
      new FormControl('')
    ])
    this.domingo = new FormArray([
      new FormControl('Domingo'),
      new FormControl(''),
      new FormControl('')
    ])

    this.scheduleForm = new FormGroup({
      lunes: this.lunes,
      martes: this.martes,
      miercoles: this.miercoles,
      jueves: this.jueves,
      viernes: this.viernes,
      sabado: this.sabado,
      domingo: this.domingo,
    })

    // Urls Form
    this.facebook = new FormControl('')
    this.instagram = new FormControl('')
    this.sitio_web = new FormControl('')

    this.urlsForm = new FormGroup({
      facebook: this.facebook,
      instagram: this.instagram,
      sitio_web: this.sitio_web
    })

    // CategoriesForm
    this.categoryForm = this.fb.group({
      selectedCategories: this.buildCategoriesArray()
    });

  }

  emitUpdatePlacesList(): void {
    this.updatePlacesList.emit()
  }

  buildCategoriesArray(): FormArray {
    const arr = this.categories.map(cat => {
      return this.fb.control(cat.checked);
    });
    return this.fb.array(arr);
  }

  get categoriesArray(): FormArray {
    return this.categoryForm.get('selectedCategories') as FormArray;
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

  resetForm(): void {
    this.placeRegisterForm.reset();

    const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    [this.lunes, this.martes, this.miercoles, this.jueves, this.viernes, this.sabado, this.domingo].forEach((formArray, index) => {
      formArray.setValue([days[index], '', '']);
    });

    this.urlsForm.reset();

    const categoriesArray = this.categoryForm.get('selectedCategories') as FormArray;
    categoriesArray.controls.forEach(control => {
      control.setValue(false);
    });

    this.imagePreview.set('');
    this.uploudedFile.set(false);
    this.selectedFile = null;
    this.correctMunicipio.set(false);
    this.blurMunicipio.set(false);

    this.placeRegisterForm.markAsPristine();
    this.placeRegisterForm.markAsUntouched();
    this.scheduleForm.markAsPristine();
    this.scheduleForm.markAsUntouched();
    this.urlsForm.markAsPristine();
    this.urlsForm.markAsUntouched();
    this.categoryForm.markAsPristine();
    this.categoryForm.markAsUntouched();

    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
      (input as HTMLInputElement).value = '';
    });
  }

  onSubmit(): void {
    const selectedStates: boolean[] = this.categoriesArray.value;

    const selectedCategories = this.categories
      .filter((category, index) => selectedStates[index])
      .map(category => category.nombre.toLowerCase());

    const schedules: Horario[] = [];
    for(const [key, schedule] of Object.entries(this.scheduleForm.value)){

      const [dia, horaApertura, horaCierre] = schedule as [string,string,string]
      const scheduleObject: Horario = {
        dia: dia,
        horaApertura: horaApertura,
        horaCierre: horaCierre
      }
      schedules.push(scheduleObject)
    }
    console.log(schedules)

    const urls: URLs[] = [];
    for(const [tipo,url] of Object.entries(this.urlsForm.value)){
      const urlObject: URLs = {
        url: url as string,
        tipo: tipo as string
      }

      urls.push(urlObject)
    }

    const municipioObject = this.municipiosMorelos.find((municipio) => {
      return municipio.nombre === this.placeRegisterForm.value.municipio as string
    })

    const municipio: number = Number(municipioObject?.id)

    const newPlace: PlacePost = {
      nombre: this.placeRegisterForm.value.name,
      telefono: this.placeRegisterForm.value.cellphone,
      idUsuario: Number(this.authService.userData()?.id),
      descripcion: this.placeRegisterForm.value.description,
      imagen: null,
      ubicacionUrlGmaps: this.placeRegisterForm.value.urlMaps,
      idMunicipio: municipio,
      horarios: schedules,
      urls: urls,
      categorias: selectedCategories
    }

    if (this.selectedFile){
      const formData = new FormData()
      formData.append('negocio', (new Blob([JSON.stringify(newPlace)], { type: 'application/json' })))
      formData.append('imagen', this.selectedFile, this.selectedFile.name)
      this.newPlaceService.sendNewPlace(formData).subscribe({
        next: ()=> {
          this.emitUpdatePlacesList()
          this.resetForm();
          this.emitCloseForm();
        }
      })
    }

  }

}
