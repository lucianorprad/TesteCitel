import { Component } from '@angular/core';
import {DoadoresService} from '../../services/doadores.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-imc-por-idade',
  imports: [
    NgForOf
  ],
  templateUrl: './imc-por-idade.component.html',
  styleUrl: './imc-por-idade.component.css'
})
export class ImcPorIdadeComponent {
  doadores: any[] = [];

  constructor(private doadoresService: DoadoresService) {
  }

  imcPorIdade(): void {
    this.doadoresService.getImcPorIdade().subscribe((data) => {
      this.doadores = data;
      console.log('Get feito Com sucesso!', data);
      this.doadores = Object.entries(data).map(([idade, imc]) => ({idade, imc: parseFloat(imc).toFixed(2)}));
    }, (error) => console.error('Erro ao realizar o Get:', error));
  }
}
