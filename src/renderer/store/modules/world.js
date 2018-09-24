const state = {
  rooms: [],
  activeRoom: null,
};

const mutations = {
  ADD_ROOM (state, roomName) {
    state.rooms = [...state.rooms, {
      name: roomName,
    }];
  },
  DELETE_ROOM (state, roomId) {
    const roomIndex = state.rooms.findIndex(room => room.id === roomId);
    if (!isNaN(roomIndex)) {
      state.rooms = [
        ...state.rooms.slice(0, roomIndex),
        ...state.rooms.slice(roomIndex + 1),
      ];
    }
  }
};

const actions = {
  // someAsyncTask ({ commit }) {
  //   // do something async
  //   commit('INCREMENT_MAIN_COUNTER')
  // }
};

export default {
  state,
  mutations,
  actions
};