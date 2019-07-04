import { HeroesService } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes =
      this.heroesService.getHeroes();
  }

  verHeroe(idx: number)
  {
    this.router.navigate(['/heroe', idx]);
  }
}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}

