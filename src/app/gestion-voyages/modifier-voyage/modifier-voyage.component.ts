import {Component, OnInit} from '@angular/core';
import {Voyage} from "../../voyage";
import {VoyageserviceService} from "../../services/voyageservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {error} from "ng-packagr/lib/utils/log";

@Component({
  selector: 'app-modifier-voyage',
  templateUrl: './modifier-voyage.component.html',
  styleUrls: ['./modifier-voyage.component.scss']
})
export class ModifierVoyageComponent implements OnInit{
  id: number;
  voyage: Voyage = new Voyage();
  private routeur: Router;

  constructor(private voyageservice: VoyageserviceService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"]

    this.voyageservice.getvoyageById(this.id).subscribe(data => {
      this.voyage = data;
    });
  }
  updatevoyage()
  {
    this.voyageservice.updatevoyage(this.id,this.voyage).subscribe(data => {
      console.log(data)
      this.goToVoyageList()
    }),
      ({error}: { error: any }) => {
        // Fonction de rappel en cas d'erreur
        console.error('Erreur :', error);
      }
  }
  onSubmit()
  {
    console.log(this.voyage)
    this.updatevoyage()
  }

  goToVoyageList(){
    this.routeur.navigate(["./voyages-list"])
  }
}
