import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  styleUrl: './layout.component.scss',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {}
