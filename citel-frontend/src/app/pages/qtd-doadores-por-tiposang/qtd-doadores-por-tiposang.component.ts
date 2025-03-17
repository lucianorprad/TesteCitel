import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {DoadoresService} from '../../services/doadores.service';

@Component({
  selector: 'app-qtd-doadores-por-tiposang',
  imports: [
    NgForOf
  ],
  templateUrl: './qtd-doadores-por-tiposang.component.html',
  styleUrl: './qtd-doadores-por-tiposang.component.css'
})
export class QtdDoadoresPorTiposangComponent {
  doadores: any[] = [];

  constructor(private doadoresService: DoadoresService) {
  }

  quantDoadoresPorTipoSang(): void {
    this.doadoresService.qtdPossiveisDoadoresPorTipo().subscribe((data) => {
      this.doadores = data;
      console.log('Get feito Com sucesso!', data);
      this.doadores = Object.entries(data).map(([tipoSang, quantidade]) => ({tipoSang, quantidade}));
    }, (error) => console.error('Erro ao realizar o Get:', error));
  }
}
