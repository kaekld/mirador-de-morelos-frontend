import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, User } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  User = User;
}
