import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DoadoresPorEstadoComponent} from './pages/doadores-por-estado/doadores-por-estado.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DoadoresPorEstadoComponent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'citel-frontend';
}
