export default {
  state: {
    favorites: [],
  },
  mutations: {
    addFavorite(state, beer) {
      state.favorites.push(beer);
    },
    removeFavorite(state, id) {
      const index = state.favorites.findIndex((favorite) => favorite.id === id);
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
    removeBeerFromFavorites({ commit, getters }, id) {
      commit('removeFavorite', id);

      if (getters.beer.id === id) {
        commit('setFavoriteBeer', false);
      }
    },
    clearFavoritesBeer({ commit }) {
      commit('clearFavorites');
      commit('setFavoriteBeer', false);
    },
  },
  getters: {
    favorites(state) {
      return state.favorites;
    },
  },
};
