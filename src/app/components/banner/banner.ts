import { Component, input } from '@angular/core';
import { SlideControl } from "./slide-control/slide-control";
import BannerContent from '../../models/Banner';

@Component({
  selector: 'app-banner',
  imports: [SlideControl],
  templateUrl: './banner.html',
})
export class Banner {
  banner = input.required<BannerContent>();
}
