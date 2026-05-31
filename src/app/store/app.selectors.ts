import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectStore = createFeatureSelector('globalConfig');

export const selectThemeDark = createSelector(
  selectStore,
  (state: any) => state.isConfigurazioneTemaScuro,
);

export const selectUser = createSelector(
  selectStore,
  (state: any) => state.nomeUtenteConnesso,
);
