import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { NewPlace } from "../../auth/profile/user-places/new-place/new-place";
import { ConfirmDelete } from "../../auth/profile/user-place/confirm-delete/confirm-delete";
import { NewPostForm } from "../../auth/profile/place-posts/new-post-card/new-post-form/new-post-form";
import { EditData } from "../../auth/profile/edit-data/edit-data";

@Component({
  selector: 'app-test-components',
  imports: [Navbar, Footer, NewPlace, ConfirmDelete, NewPostForm, EditData],
  templateUrl: './test-components.html',
  styles: ``,
})
export default class TestComponents {

  showModal: boolean = true;

  toggleShow(): void {
    this.showModal = !this.showModal;
  }

}
