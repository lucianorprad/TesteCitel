import { Component } from '@angular/core';
import {DoadoresService} from '../../services/doadores.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-doadores-por-estado',
  imports: [CommonModule],
  templateUrl: './doadores-por-estado.component.html',
  styleUrl: './doadores-por-estado.component.css'
})
export class DoadoresPorEstadoComponent {
  doadores:any[] = [];
  constructor(private doadoresService:DoadoresService) {}

  buscarDoadoresPorEstado(): void {
    this.doadoresService.getDoadoresPorEstado().subscribe((data) => {
      this.doadores = data;
      console.log('Get feito Com sucesso!', data);
      this.doadores = Object.entries(data).map(([estado, quantidade]) => ({ estado, quantidade }));
    }, (error) => console.error('Erro ao realizar o Get:', error));
  }
}
