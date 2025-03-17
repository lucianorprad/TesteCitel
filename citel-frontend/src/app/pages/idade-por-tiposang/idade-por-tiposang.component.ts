import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {DoadoresService} from '../../services/doadores.service';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {routes} from '../../app.routes';

@Component({
  selector: 'app-idade-por-tiposang',
    imports: [
      CommonModule,
        NgForOf,

    ],
  templateUrl: './idade-por-tiposang.component.html',
  styleUrl: './idade-por-tiposang.component.css'
})
export class IdadePorTiposangComponent {
  doadores: any[] = [];

  constructor(private doadoresService: DoadoresService) {
  }

  buscarIdadePorTipoSang(): void {
    this.doadoresService.mediaIdadeTipoSanguineo().subscribe((data) => {
      this.doadores = data;
      console.log('Get feito Com sucesso!', data);
      this.doadores = Object.entries(data).map(([tipoSang, idade]) => ({tipoSang, idade}));
    }, (error) => console.error('Erro ao realizar o Get:', error));
  }
}
