import { EndPoints } from '@/const';

export default {
  state: {
    beer: {
      brand: 'Похоже, что сегодня',
      name: 'Придётся выбирать',
      alcohol: 'Пиво самому...',
    },
    isFavorite: false,
    isLoadingBeer: true,
    beerError: '',
  },
  mutations: {
    updateBeer(state, beer) {
      state.beer = beer;
    },
    setFavoriteBeer(state) {
      state.isFavorite = true;
    },
    removeFavoriteBeer(state) {
      state.isFavorite = false;
    },
    stopLoadingBeer(state) {
      state.isLoadingBeer = false;
    },
    beginLoadingBeer(state) {
      state.isLoadingBeer = true;
    },
    setBeerError(state, error) {
      state.beerError = error;
    },
  },
  actions: {
    async fetchBeer({ commit }) {
      commit('beginLoadingBeer');

      try {
        const response = await fetch(EndPoints.Beer);
        if (!response.ok) {
          throw new Error('Не удалось загрузить данные о пиве. Попробуйте позже.');
        }
        const beer = await response.json();

        commit('updateBeer', beer);
        commit('setBeerError', '');
        commit('stopLoadingBeer');
      } catch (error) {
        commit('setBeerError', error);
        commit('stopLoadingBeer');
      }
    },
  },
  getters: {
    beer(state) {
      return state.beer;
    },
    beerBrand(state) {
      return state.beer.brand;
    },
    beerName(state) {
      return state.beer.name;
    },
    beerAlcohol(state) {
      return state.beer.alcohol;
    },
    beerFavorite(state) {
      return state.isFavorite;
    },
    beerLoading(state) {
      return state.isLoadingBeer;
    },
    beerError(state) {
      return state.beerError;
    },
  },
};
