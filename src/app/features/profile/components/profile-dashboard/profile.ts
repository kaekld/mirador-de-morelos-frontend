import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPlaceService } from '../../services/user-place-service';
import { Place } from '../../../../shared/interfaces/place-interface';
import { Footer } from '../../../../shared/components/footer/footer';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { LoginPayload } from '../../../auth/interfaces/auth-interface';
import { AuthService } from '../../../auth/services/auth-service';
import { EditData } from '../edit-data/edit-data';
import { PlacePosts } from '../place-posts/place-posts';
import { UserData } from '../user-data/user-data';
import { NewPlace } from '../user-places/new-place/new-place';
import { UserPlace } from '../user-places/user-place/user-place';
import { UserPlaces } from '../user-places/user-places';

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
