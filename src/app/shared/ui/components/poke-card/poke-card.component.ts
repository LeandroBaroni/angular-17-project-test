import { Component, Input } from '@angular/core';
import { JsonPipe, NgOptimizedImage } from '@angular/common';
import { Pokemon } from '../../../../core/interfaces/pokemon';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [NgOptimizedImage, JsonPipe],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.scss'
})
export class PokeCardComponent {
  @Input({required: true}) pokemon: Pokemon;
}
