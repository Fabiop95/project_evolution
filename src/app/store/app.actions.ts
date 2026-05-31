import { createAction, props } from '@ngrx/store';

export const invertiTemaScuro = createAction(
  '[Interfaccia Utente] Inverti Tema Scuro',
);

export const impostaUtenteAutenticato = createAction(
  '[Pagina Login] Imposta Utente Autenticato',
  props<{ nuovoUtente: string }>(),
);
