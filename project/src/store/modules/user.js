import { EndPoints } from '@/const';

const getFullYear = (birthDate) => (Date.now() - birthDate) / (1000 * 3600 * 24 * 365.25);

export default {
  state: {
    user: {
      first_name: 'Столетний старик, который',
      last_name: 'вылез в окно, и исчез.',
      date_of_birth: '01.01.1922',
      employment: {
        title: 'Developer',
      },
    },
    isLogged: false,
    isLoadingUser: true,
    userError: '',
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
    stopLoadingUser(state) {
      state.isLoadingUser = false;
    },
    beginLoadingUser(state) {
      state.isLoadingUser = true;
    },
    setUserError(state, error) {
      state.userError = error;
    },
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      commit('beginLoadingUser');
      commit('login');

      try {
        const response = await fetch(EndPoints.User);
        if (!response.ok) {
          throw new Error('Не удалось загрузить данные пользователя. Попробуйте позже.');
        }
        const user = await response.json();

        commit('updateUser', user);
        commit('stopLoadingUser');
      } catch (error) {
        commit('setUserError', error);
        commit('stopLoadingUser');
      }
    },
  },
  getters: {
    userFullName(state) {
      return `${state.user.first_name} ${state.user.last_name}`;
    },
    userAge(state) {
      const birthDate = new Date(state.user.date_of_birth);

      const yearsOld = getFullYear(birthDate);

      return Math.floor(yearsOld);
    },
    userJob(state) {
      return state.user.employment?.title;
    },
    userAvatar(state) {
      return state.user.avatar;
    },
    userLoading(state) {
      return state.isLoadingUser;
    },
    userError(state) {
      return state.userError;
    },
    userLogged(state) {
      return state.isLogged;
    },
  },
};
