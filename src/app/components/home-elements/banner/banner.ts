import { Component, input } from '@angular/core';
import BannerContent from '../../../models/home-models/Banner';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  imports: [RouterLink],
  templateUrl: './banner.html',
})
export class Banner {
  banner = input.required<BannerContent>();
}
