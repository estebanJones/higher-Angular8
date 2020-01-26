import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon.model';
import { POKEMONS } from '../mock-pokemon';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {
  private pokemons: Pokemon[] = null;
  private value: string;
  constructor() {}

  ngOnInit(): void {
    this.pokemons = POKEMONS;
    
  }

  selectPokemon(pokemon: Pokemon): void {
    console.log("vous avez cliqué sur" + pokemon.name);

  }

  test() {
    console.log(this.pokemons);
  }

  onKey(value: string) {
    this.value = `Bonjour ${value}`;
    return this.value;
  }

}
