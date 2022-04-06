export default {
  state: {
    favorites: [],
  },
  mutations: {
    addFavorite(state, beer) {
      state.favorites.push(beer);
    },
    removeFavorite(state, beer) {
      const index = state.favorites.findIndex((favorite) => favorite.id === beer.id);
      state.favorites.splice(index, 1);
    },
    clearFavorites(state) {
      state.favorites = [];
    },
  },
  actions: {
    addBeerToFavorites({ commit, getters }) {
      commit('addFavorite', getters.beer);
    },
    removeBeerFromFavorites({ commit, getters }) {
      commit('removeFavorite', getters.beer);
      commit('removeFavoriteBeer');
    },
    clearFavoritesBeer({ commit }) {
      commit('clearFavorites');
      commit('removeFavoriteBeer');
    },
  },
  getters: {
    favorites(state) {
      return state.favorites;
    },
  },
};
