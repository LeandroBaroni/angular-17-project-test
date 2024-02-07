import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example-optimized-img',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './example-optimized-img.component.html'
})
export class ExampleOptimizedImgComponent {
  imgPath = '../../../assets/icons/alert-triangle.svg';

  changeImg() {
    this.imgPath = '/assets/icons/star.svg';
    console.log(this.imgPath);
  }
}
