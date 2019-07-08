import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // Este decorador @Input indica que heroe se inicia desde afuera,
  // viene desde la variable heroe del *ngFor del componente padre...
  // ...(heroes.component.html, buscador.component.html)
  // que itera en heroes que a su vez se carga desde heroes.component o buscador.component,
  // todo por que heroes.component.html y buscador.component tienen el selector <app-heroe-tarjeta>
  @Input() heroe: any = {};
  @Input() index: number;

  // heroeSeleccionado - observable
  @Output() heroeSeleccionado: EventEmitter<number>; // <number> => index

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    // this.router.navigate(['/heroe', this.index]);
    this.heroeSeleccionado.emit(this.index);
  }

}
