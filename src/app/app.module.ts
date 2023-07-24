import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatTableModule} from "@angular/material/table";
import { GestionVoyagesComponent } from './gestion-voyages/gestion-voyages.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { NouvelVoyageComponent } from './gestion-voyages/nouvel-voyage/nouvel-voyage.component';
import {FormsModule} from "@angular/forms";
import { ModifierVoyageComponent } from './gestion-voyages/modifier-voyage/modifier-voyage.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    GestionVoyagesComponent,
    NouvelVoyageComponent,
    ModifierVoyageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatTableModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'voyages-list', component: GestionVoyagesComponent},
      {path: 'Ajouter', component: NouvelVoyageComponent},
      {path: 'modifiervoyage/:id', component: ModifierVoyageComponent},
    ]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
