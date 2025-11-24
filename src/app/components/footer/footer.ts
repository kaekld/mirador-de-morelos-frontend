import { Component } from '@angular/core';
import { LucideAngularModule, Linkedin, Instagram, Facebook } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  Linkedin = Linkedin;
  Instagram = Instagram;
  Facebook = Facebook;
}
