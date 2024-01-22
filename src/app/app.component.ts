import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleOptimizedImgComponent } from './components/example-optimized-img/example-optimized-img.component';
import { FormarrayNestedComponent } from './components/formarray-nested/formarray-nested.component';
import { ComponentAComponent } from './components/signal-test/component-a/component-a.component';
import { ComponentBComponent } from './components/signal-test/component-b/component-b.component';
import { ComponentCComponent } from './components/signal-test/component-c/component-c.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ExampleOptimizedImgComponent,
    NgOptimizedImage,
    FormarrayNestedComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-17-project-test';
}
