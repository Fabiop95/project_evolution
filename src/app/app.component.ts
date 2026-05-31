import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import {
  impostaUtenteAutenticato,
  invertiTemaScuro,
} from './store/app.actions';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomepageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private store = inject(Store<{ globalConfig: AppState }>);

  //isTemaScuroAttivo$: Observable<boolean> = this.store.select(selectThemeDark);
  //nomeUtente$: Observable<string> = this.store.select(selectUser);

  cambiaTemaApplicazione() {
    this.store.dispatch(invertiTemaScuro());
  }

  effettuaAccessoEsempio() {
    this.store.dispatch(impostaUtenteAutenticato({ nuovoUtente: 'Fabio' }));
  }
}
