import { Component, input, output } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-login-sucessful-modal',
  imports: [LucideAngularModule],
  templateUrl: './login-sucessful-modal.html',
  styles: ``,
})
export class LoginSucessfulModal {

  showSucessfulModal = input.required<boolean>();
  closeSucessfulModal = output<void>();

  emitCloseSucessfulModal(): void {
    this.closeSucessfulModal.emit()
  }

}
