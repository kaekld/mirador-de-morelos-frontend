import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { NewPlace } from "../../auth/profile/user-places/new-place/new-place";

@Component({
  selector: 'app-test-components',
  imports: [Navbar, Footer, NewPlace],
  templateUrl: './test-components.html',
  styles: ``,
})
export default class TestComponents {

  showRegisterPlace: boolean = true;

  toggleShowRegisterPlace(): void {
    this.showRegisterPlace = !this.showRegisterPlace;
  }

}
