import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Mexicana() {
    this.abrirUrl(
      'https://www.google.com/maps/search/?api=1&query=Comidas+Mexicanas'
    );
  }

  Caseira() {
    this.abrirUrl('https://www.google.com/maps/search/?api=1&query=Caseira');
  }

  Francesa() {
    this.abrirUrl(
      'https://www.google.com/maps/search/?api=1&query=francesa+comida'
    );
  }

  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }
}

