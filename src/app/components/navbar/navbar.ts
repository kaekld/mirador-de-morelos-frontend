import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, User } from 'lucide-angular';
import { UserDashboard } from "../user-dashboard/user-dashboard";

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, RouterLink, UserDashboard],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {

  activedDashboard : boolean = false;

  User = User;

  toggleDashboard(): void {
    this.activedDashboard = !this.activedDashboard;
  }

}
