import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscardor',
  templateUrl: './buscardor.component.html',
  styleUrls: ['./buscardor.component.css']
})
export class BuscardorComponent implements OnInit {

  heroe: any;

  constructor(private activatedRoute: ActivatedRoute, private heroeSevice: HeroesService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroeSevice.buscarHeroes(params['termino']);
      console.log(this.heroe);
    });

  }

}
