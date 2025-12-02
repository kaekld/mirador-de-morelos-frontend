import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-place',
  imports: [ReactiveFormsModule],
  templateUrl: './new-place.html',
  styles: ``,
})
export class NewPlace {

  activedForm = input<boolean>(false)
  closeForm = output<void>()

  placeRegisterForm: FormGroup;
  image: FormControl;

  constructor(){

    this.image = new FormControl(File)

    this.placeRegisterForm = new FormGroup({
      image: this.image
    })

  }

  emitCloseForm(): void {
    this.closeForm.emit()
  }
}
