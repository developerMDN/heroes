import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Heroe } from '../heroes/heroes.component';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute, private heroeService: HeroesService) { }

  ngOnInit() {
    // la propiedad param.id se corresponde con el id establecido en app.routres.ts
    // para esta ruta { path: 'heroe/:id', component: HeroeComponent }
    this.activatedRoute.params.subscribe(param => {
      this.heroe = this.heroeService.getHeroe(param.id);
      console.log(this.heroe);
    });
  }

}
