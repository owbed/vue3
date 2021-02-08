import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            tasks: JSON.parse(localStorage.getItem('tasks')) ?? []
        }
    },
    mutations: {
        createNewTask(state, task) {
            const hash = require("object-hash");
            const ID = hash(task);
            task.id = ID;
            if ((state.tasks.findIndex((x) => x.id === ID)) === -1) {
                state.tasks.push(task);
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },
        updateTask(state, task) {
            state.tasks[state.tasks.findIndex(t => t.id === task.id)] = task
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
    },
    actions: {
        createNewTask({ commit }, task) {
            commit('createNewTask', task)
        },
        changeTaskStatus({ commit }, task) {
            commit('updateTask', task)
        },
    },
    getters: {
        getTasks(state) {
            return state.tasks
        },
        getActiveTasks(state) {
            return state.tasks.filter(task => task.status === 'active')
        },
        getTaskID(state, getters) {
            return id => getters.getTasks.find(task => task.id === id)
        }
    }
})