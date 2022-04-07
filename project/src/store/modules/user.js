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
    avatarError: false,
    avatarURL: '',
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
    setLoadingUser(state, payload) {
      state.isLoadingUser = payload;
    },
    setUserError(state, error) {
      state.userError = error;
    },
    setLogin(state, payload) {
      state.isLogged = payload;
    },
    setAvatarError(state, payload) {
      state.avatarError = payload;
    },
    setAvatarURL(state, url) {
      state.avatarURL = url;
    },
  },
  actions: {
    async fetchUser({ commit, dispatch }) {
      commit('setLoadingUser', true);
      commit('setLogin', true);

      try {
        const response = await fetch(EndPoints.User);

        if (!response.ok) {
          throw new Error('Не удалось загрузить данные пользователя. Попробуйте позже.');
        }

        const user = await response.json();

        commit('updateUser', user);

        dispatch('fetchAvatar');
      } catch (error) {
        commit('setUserError', error);
        commit('setAvatarError', true);
      }

      commit('setLoadingUser', false);
    },
    async fetchAvatar({ commit, state }) {
      try {
        const urlAvatar = state.user.avatar;

        const responseAvatar = await fetch(urlAvatar, {
          method: 'GET',
        });

        if (!responseAvatar.ok) {
          throw new Error('Не удалось загрузить аватар пользователя. Попробуйте позже.');
        }

        const avatar = await responseAvatar.blob();
        const avatarURL = URL.createObjectURL(avatar);

        commit('setAvatarURL', avatarURL);
      } catch (err) {
        commit('setAvatarError', true);
      }
    },
    logout({ commit }) {
      commit('setLogin', false);
      commit('setUserError', '');
      commit('setAvatarError', false);
      commit('setAvatarURL', '');
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
      return state.avatarError
        ? EndPoints.BackupAvatar
        : state.avatarURL;
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
    userAvatarError(state) {
      return state.avatarError;
    },
  },
};
