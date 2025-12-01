import { Component, inject, OnInit } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-profile',
  imports: [Footer, Navbar],
  templateUrl: './profile.html',
  styles: ``,
})
export class Profile implements OnInit{

  authService = inject( AuthService )

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
  }




}
