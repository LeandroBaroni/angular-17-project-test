import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Pokemon } from './interfaces/pokemon';

interface Response {
  count: number;
  next: string;
  previous: string;
  results: { name: string; url: string; }[];
}
@Injectable(
  {providedIn: 'root'}
)
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/'

  constructor(private http: HttpClient) {}
  getAll(offset = 20, limit = 20, previous: boolean = null): Promise<Response> {
    return lastValueFrom(this.http.get<Response>(`${this.apiUrl}/pokemon?offset=${offset}&limit=${limit}","previous":${previous},${"results"}`));
  }

  async getPokemon(pokemonName: string): Promise<Pokemon> {
    return lastValueFrom(this.http.get<Pokemon>(`${this.apiUrl}/pokemon/${pokemonName}`));
  }
}
