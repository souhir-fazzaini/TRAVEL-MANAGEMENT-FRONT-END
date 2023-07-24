import {Component, OnInit} from '@angular/core';
import {Voyage} from "../../voyage";
import {VoyageserviceService} from "../../services/voyageservice.service";
import {Router} from "@angular/router";
import {error} from "ng-packagr/lib/utils/log";

@Component({
  selector: 'app-nouvel-voyage',
  templateUrl: './nouvel-voyage.component.html',
  styleUrls: ['./nouvel-voyage.component.scss']
})
export class NouvelVoyageComponent implements OnInit{
  voyage: Voyage =  new Voyage()
  constructor(private voyageservice: VoyageserviceService,private routeur: Router) {
  }
  ngOnInit(): void
  {

  }
  savevoyage() {
    this.voyageservice.createvoyage(this.voyage).subscribe(data => {
      console.log(data)
      this.goToVoyageList()
    }),
    ({error}: { error: any }) => {
      // Fonction de rappel en cas d'erreur
      console.error('Erreur :', error);
    }
  }
  goToVoyageList(){
    this.routeur.navigate(["./voyages-list"])
  }
  onSubmit()
  {
console.log(this.voyage)
    this.savevoyage()
  }
}
