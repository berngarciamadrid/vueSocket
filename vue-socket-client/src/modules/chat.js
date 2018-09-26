const chatModule = {
    state: {
        chat: [],
        users: [],
        username: null,
        exists: false
    },
    // emitimos acciones desde nuestra app a nodejs
    actions: {
        socket_new_message: ({ rootState }, message) => {
            rootState.io.emit('newMessage', message);
        },
        socket_login: ({ rootState }, username) => {
            rootState.io.emit('login', username);

        }
    },
    // Estas mutaciones serán ejecutadas por NodeJS,
    // deben comenzar por SOCKET_
    mutations: {
        // SET_USERNAME(state, username) {
        //     state.username = username;
        // },
        SOCKET_NEW_MESSAGE(state, message) {
            state.chat.push(message[0]);
        },
        SOCKET_LOGIN(state, data) {
            state.users = data[0].users;
            state.username = data[0].username;
            state.exists = false;
        },
        SOCKET_USER_EXISTS(state) {
            state.exists = true;
        },
        SOCKET_USER_JOINED(state, data) {
            state.users = data[0].users;
            state.chat.push(`Usuario ${data[0].username} ha entrado en la sala`);
        },
        SOCKET_USER_LEFT(state, data) {
            state.users = data[0].users;
            state.chat.push(`Usuario ${data[0].username} ha abandonado en la sala`);
        }

    },
    getters: {
        chat(state) {
            return state.chat;
        },
        username(state) {
            return state.username;
        },
        users(state) {
            return state.users;
        },
        exists(state) {
            return state.exists;
        }

    }
};

export default chatModule;