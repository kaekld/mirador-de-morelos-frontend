import { Component, input } from '@angular/core';
import BannerContent from '../../../models/Banner';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
})
export class Banner {
  banner = input.required<BannerContent>();
}
