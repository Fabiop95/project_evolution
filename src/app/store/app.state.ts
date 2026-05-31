export interface AppState {
  isConfigurazioneTemaScuro: boolean;
  nomeUtenteConnesso: string;
}

export const statoInizialeApplicazione: AppState = {
  isConfigurazioneTemaScuro: false,
  nomeUtenteConnesso: '',
};
