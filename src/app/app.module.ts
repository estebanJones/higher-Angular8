import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SingleProfilComponent } from './single-profil/single-profil.component';
import { NewUserComponent } from './new-user/new-user.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './custom-pipes/pokemon-type-color.pipe';

import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserService } from './services/user.service';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';



const appRoute: Routes = [
  {path: "register", component: NewUserComponent},
  {path: "user/:id", component: SingleProfilComponent},
  {path: "members", component: ListUserComponent},
  {path: "pokemons", component: ListPokemonsComponent},
  {path: "pokemon/:pokemonId", component: PokemonDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewUserComponent,
    ListUserComponent,
    SingleProfilComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonsComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
