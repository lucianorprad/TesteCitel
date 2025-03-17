import { Routes } from '@angular/router';
import {DoadoresPorEstadoComponent} from './pages/doadores-por-estado/doadores-por-estado.component';
import {IdadePorTiposangComponent} from './pages/idade-por-tiposang/idade-por-tiposang.component';
import {ImcPorIdadeComponent} from './pages/imc-por-idade/imc-por-idade.component';
import {ObesosPorSexoComponent} from './pages/obesos-por-sexo/obesos-por-sexo.component';
import {QtdDoadoresPorTiposangComponent} from './pages/qtd-doadores-por-tiposang/qtd-doadores-por-tiposang.component';
import {SubmeterJsonComponent} from './pages/submeter-json/submeter-json.component';

export const routes: Routes = [
  { path: 'doadoresporestado', component: DoadoresPorEstadoComponent },
  {path: 'idadeportiposang', component: IdadePorTiposangComponent },
  {path: 'imcPorIdade', component: ImcPorIdadeComponent },
  {path: 'QtdDoadoresPorTiposang', component: QtdDoadoresPorTiposangComponent },
  {path: 'obesosporsexo', component: ObesosPorSexoComponent},
  {path: 'submeter-json', component: SubmeterJsonComponent},
  {path: '', redirectTo: 'submeter-json', pathMatch: 'full'},
];
