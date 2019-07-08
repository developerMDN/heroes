import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscardor',
  templateUrl: './buscardor.component.html',
  styleUrls: ['./buscardor.component.css']
})
export class BuscardorComponent implements OnInit {

  heroes: any;
  termino = '';

  constructor(private activatedRoute: ActivatedRoute,
    private heroeSevice: HeroesService,
    private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params.termino; // params['termino']
      this.heroes = this.heroeSevice.buscarHeroes(params.termino);
      console.log(this.heroes);
    });

  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
