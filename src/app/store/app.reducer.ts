import { createReducer, on } from '@ngrx/store';
import { statoInizialeApplicazione } from './app.state';
import { impostaUtenteAutenticato, invertiTemaScuro } from './app.actions';

export const applicazioneReducer = createReducer(
  statoInizialeApplicazione,

  // Quando arriva l'azione di invertire il tema
  on(invertiTemaScuro, (statoPrecedente) => ({
    ...statoPrecedente,
    isConfigurazioneTemaScuro: !statoPrecedente.isConfigurazioneTemaScuro,
  })),

  // Quando arriva l'azione di impostare l'utente
  on(impostaUtenteAutenticato, (statoPrecedente, azione) => ({
    ...statoPrecedente,
    nomeUtenteConnesso: azione.nuovoUtente,
  })),
);
