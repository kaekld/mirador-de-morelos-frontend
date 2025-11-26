import { Component } from '@angular/core';
import { Footer } from "../../../components/footer/footer";
import { Navbar } from "../../../components/navbar/navbar";
import { LucideAngularModule, Instagram, Facebook } from 'lucide-angular';

@Component({
  selector: 'app-new-entry',
  imports: [Footer, Navbar, LucideAngularModule],
  templateUrl: './new-entry.html',
  styles: ``,
})
export class NewEntry {

  Instagram = Instagram;
  Facebook = Facebook;

}
