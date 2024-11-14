import { createStore } from 'vuex'

export default createStore({
  state: {
    // The Lists contain many lists, each list has a title and contains many items which are the todos.
    lists: [],
    activeListId: null
  },
  
  mutations: {
    ADD_LIST(state, title) {
      const newList = {
        id: Date.now(),
        title,
        items: []
      };
      state.lists.push(newList);
    },
    
    ADD_TODO(state, { listId, text }) {
      const list = state.lists.find(list => list.id === listId);
      if (list) {
        list.items.push({
          id: Date.now(),
          text,
          completed: false
        });
      }
    },
    
    TOGGLE_TODO(state, { listId, todoId }) {
      const list = state.lists.find(list => list.id === listId);
      if (list) {
        const todo = list.items.find(todo => todo.id === todoId);
        if (todo) {
          todo.completed = !todo.completed;
        }
      }
    },
    
    SET_ACTIVE_LIST(state, listId) {
      state.activeListId = listId;
    },

    DELETE_LIST(state, listId) {
        const index = state.lists.findIndex(list => list.id === listId);
        if (index !== -1) {
          state.lists.splice(index, 1);
          // If we deleted the active list, set activeListId to null or the next available list
          if (state.activeListId === listId) {
            state.activeListId = state.lists.length > 0 ? state.lists[0].id : null;
          }
        }
    }
  },
  
  getters: {
    getLists: state => state.lists,
    getActiveList: state => state.lists.find(list => list.id === state.activeListId)
  }
})