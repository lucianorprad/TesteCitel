import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Doador} from '../../models/doador.model';
import {DoadoresService} from '../../services/doadores.service';

@Component({
  selector: 'app-submeter-json',
  imports: [],
  templateUrl: './submeter-json.component.html',
  styleUrl: './submeter-json.component.css'
})
export class SubmeterJsonComponent {
  public dadosJson: any;

  constructor(private doadoresService: DoadoresService) {}

  selecionarJson(event: any): void {
    const arquivo = event.target.files[0];
    if (arquivo && arquivo.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = () => {
        this.dadosJson = JSON.parse(reader.result as string);
      };
      reader.readAsText(arquivo);
    } else {
      alert('Por favor, selecione um arquivo JSON.');
    }
  }

  Enviar(): void {
    if (this.dadosJson) {
      this.doadoresService.cadastrarDoadores(this.dadosJson).subscribe(
        response => {
          console.log('Dados cadastrados', response);
          alert('Dados Cadastrados');
        },
        error => {
          console.error('Erro: ', error);
          alert('Erro ao cadastrar informações');
        }
      );
    } else {
      alert('Nenhum arquivo JSON selecionado.');
    }
  }
}
