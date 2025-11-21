import { Component } from '@angular/core';
import { LucideAngularModule, User } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  User = User;
}
