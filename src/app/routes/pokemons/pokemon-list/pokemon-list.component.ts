import { Component, inject, OnInit } from '@angular/core';
import { PokeCardComponent } from '../../../shared/ui/components/poke-card/poke-card.component';
import { PokemonService } from '../../../core/pokemon.service';
import { PokemonCommonData } from '../../../core/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokeCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {
  private pokemonService = inject(PokemonService);

  pokemons: PokemonCommonData[] = [];
  isLoading = true;

  async ngOnInit() {
    try {
      const {results} = await this.pokemonService.getAll();
      this.pokemons = results;
      console.log(this.pokemons);
    } catch(error){
      console.error(error);
    }
    this.isLoading = false;
  }
}
