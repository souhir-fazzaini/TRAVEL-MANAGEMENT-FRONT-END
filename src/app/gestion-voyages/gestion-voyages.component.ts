import {Component, NgIterable} from '@angular/core';

import { OnInit } from "@angular/core";
import {faPencil, fas, faShop, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {VoyageService} from "../services/voyage.service";
@Component({
  selector: 'app-gestion-voyages',
  templateUrl: './gestion-voyages.component.html',
  styleUrls: ['./gestion-voyages.component.scss'],
  providers: [ VoyageService ]
})
export class GestionVoyagesComponent implements OnInit {

  voyages: any[];

  constructor(private voyageservice: VoyageService,private routeur: Router) {

  }

  ngOnInit() {
    console.log("hello")
   /* this.voyageservice.getAllVoyages().subscribe(datas => {
      this.voyages = datas as any[];



    })*/


  }
  modifiervoyage(id: number)
  {
    this.routeur.navigate(["modifiervoyage",id])
  }


  protected readonly faShop = faShop;
  protected readonly faTrash = faTrash;
  protected readonly faPencil = faPencil;

}
