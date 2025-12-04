import { Component, inject, OnInit, signal } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { UserData } from "./user-data/user-data";
import { UserPlaces } from "./user-places/user-places";
import { UserPlaceService } from '../../services/user-place-service';
import { UserPlace } from "./user-place/user-place";
import { Place } from '../../interfaces/place-interface';
import { PlacePosts } from "./place-posts/place-posts";
import { environment } from '../../../environments/environment';
import { NewPlace } from "./user-places/new-place/new-place";
import { EditData } from "./edit-data/edit-data";
import { LoginPayload } from '../../interfaces/auth-interface';

@Component({
  selector: 'app-profile',
  imports: [Footer, Navbar, UserData, UserPlaces, UserPlace, PlacePosts, NewPlace, EditData],
  templateUrl: './profile.html',
  styles: ``,
})
export class Profile implements OnInit{


  authService = inject( AuthService )
  userPlacesService = inject( UserPlaceService )
  selectedPlace = signal<Place | null>(null)
  placeActive: boolean = false;
  activedNewPlaceForm: boolean = false;
  activedEditUser = signal<boolean>(false)


  private entryId: string;
  ownProfile: boolean = false;

  constructor(private route: ActivatedRoute) {
    const entryId = route.snapshot.params['id'];
    this.entryId = (entryId)
  }

  ngOnInit(): void {
    if(this.authService.userData()?.id.toString() == this.entryId){
      this.ownProfile = true;
    }
    this.userPlacesService.loadUserPlacesList(this.entryId);
  }

  selectPlace(placeName : string): void {
    this.placeActive = true
    this.selectedPlace.set(this.searchPlace( this.userPlacesService.userPlacesList(), placeName))
  }

  searchPlace(places: Place[], placeName: string ): Place {
    for(const place of places){
      if(place.nombre == placeName){
        return place;
      }
    }
    throw new Error(`Lugar con nombre "${placeName}" no encontrado.`);
  }

  toggleNewPlaceForm() : void {
    this.activedNewPlaceForm = !this.activedNewPlaceForm;
  }

  toggleActivedEditUser(): void {
    this.activedEditUser.update(
      (value) => !value
    )
  }

  updatePlaces(){
    this.placeActive = false
    this.userPlacesService.loadUserPlacesList(this.entryId);
  }

  updateProfile(formData: LoginPayload){
    this.authService.loginUser(formData).subscribe({
      next: resp => {
        this.authService.password.set(formData.password)
        this.authService.userData.set(resp.usuario);
        this.authService.loginMessage.set(resp.mensaje);
        this.authService.loginSuccessful.set(resp.mensaje === 'Login correcto')
      },
      error: err => {
        console.log(err)
      },
   })
  }
}
