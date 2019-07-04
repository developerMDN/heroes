import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../heroes/heroes.component';
import { HeroesService } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroe: Heroe;

  constructor(private heroeService: HeroesService, private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(nombre: string) {

    let index = -1;

    const heroe = this.heroeService.getHeroes().find((h) => {
      ++index;
      return h.nombre === nombre;
    });

    this.router.navigate(['/heroe', index]);
  }

  buscarHeroeV2(termino: string)
  {
    this.router.navigate(['/buscador', termino]);
  }

}
