import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon.model';
import { POKEMONS } from '../mock-pokemon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  private pokemons: Pokemon[] = null;
  private pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    
   }

  ngOnInit(): void {
    this.pokemons = POKEMONS;
    const pokemonId = +this.route.snapshot.params["id"];
    this.pokemon = this.pokemons.find( pokemon => { 
      return pokemon.id === pokemonId})
  }

  goBack() {
    this.router.navigate(["/pokemons"]);
  }



}
