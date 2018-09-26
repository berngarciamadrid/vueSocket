'user strict'

const counterModule = {
    state: {
        count: 0
    },

    // https://github.com/MetinSeylan/Vue-Socket.io
    // mutaciones serán ejecutadas por Node.JS, deben comenzar
    // por SOCKET_
    mutations: {
        SOCKET_COUNTER_INCREMENT(state, counter) {
            // state.count = state.count + 1
            state.count = counter[0];
        },
        SOCKET_COUNTER_DECREMENT(state, counter) {
            // state.count = state.count + 1
            state.count = counter[0];
        }

    },
    // emitimos acciones desde nuestra app al servidor con socket.io
    // Actions deben empezar con socket. En minúsculas
    actions: {
        socket_increment: ({ state, rootState }) => {
            rootState.io.emit('increment', state.count)
                // Emitimos al server el evento increment
        },
        socket_decrement: ({ state, rootState }) => {
            rootState.io.emit('decrement', state.count)
                // Emitimos al server el evento decrement
        }


    }

};

export default counterModule;