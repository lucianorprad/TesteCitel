import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Doador} from '../models/doador.model';

@Injectable({
  providedIn: 'root'
})
export class DoadoresService {
  public  arquivoJson: any;
  private  API_URL = 'http://localhost:8080/doadores';
  constructor(private http: HttpClient) { }

  cadastrarDoadores(doadores: Doador[]): Observable<Doador[]> {
    return this.http.post<Doador[]>(this.API_URL, doadores);
  }

  getDoadoresPorEstado(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/porestado`);
  }
  getImcPorIdade(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/imcFaixa`);
  }
  percentualObsesosPorSexo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/perobesos`);
  }

  mediaIdadeTipoSanguineo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/idadetiposang`);
  }

  qtdPossiveisDoadoresPorTipo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/doadoresPorTipoSanguineo`);
  }
}
