import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-slide-control',
  imports: [NgClass],
  templateUrl: './slide-control.html',
  styles: ``,
})
export class SlideControl {
  selectedBanner = input.required<number>();
  clickBanner = output<number>()

  handleClick(banner: number): void {
    this.clickBanner.emit(banner)
  }
}
