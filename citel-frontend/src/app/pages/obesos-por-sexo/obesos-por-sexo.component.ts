import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {DoadoresService} from '../../services/doadores.service';

@Component({
  selector: 'app-obesos-por-sexo',
  imports: [
    NgForOf
  ],
  templateUrl: './obesos-por-sexo.component.html',
  styleUrl: './obesos-por-sexo.component.css'
})
export class ObesosPorSexoComponent {
  doadores: any[] = [];

  constructor(private doadoresService: DoadoresService) {
  }

  obesosPorSexo(): void {
    this.doadoresService.percentualObsesosPorSexo().subscribe((data) => {
      this.doadores = data;
      console.log('Get feito Com sucesso!', data);
      this.doadores = Object.entries(data).map(([sexo, percentual]) => ({sexo, percentual: parseFloat(percentual).toFixed(2)}));
    }, (error) => console.error('Erro ao realizar o Get:', error));
  }
}
