import { Component, inject } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Carousel } from "../../components/home-elements/carousel/carousel";
import { RecentNews } from "../../components/home-elements/recent-news/recent-news";
import { HighlightPlaces } from "../../components/home-elements/highlight-places/highlight-places";
import { RecentPost } from "../../components/home-elements/recent-post/recent-post";
import { Footer } from "../../components/footer/footer";
import { LoginPayload } from '../../interfaces/auth-interface';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-home',
  imports: [Navbar, Carousel, RecentNews, HighlightPlaces, RecentPost, Footer],
  templateUrl: './home.html',
})
export default class Home {

  // authService = inject( AuthService );

  // constructor() {
  //   this.handleSubmit()
  // }

  // handleSubmit(): void {

  //     const formData: LoginPayload = {
  //       email: 'oscar@gmail.com',
  //       password: 'oscar21'
  //     }

  //     this.authService.loginUser(formData).subscribe({
  //     next: resp => {
  //       this.authService.password.set(formData.password)
  //       this.authService.userData.set(resp.usuario);
  //       this.authService.loginMessage.set(resp.mensaje);
  //       this.authService.loginSuccessful.set(resp.mensaje === 'Login correcto')
  //     },
  //     error: err => {
  //       console.log(err)
  //     },
  //   });

  // }

}
