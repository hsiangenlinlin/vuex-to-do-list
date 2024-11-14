import { createStore } from 'vuex'

export default createStore({
  state: {
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
    }
  },
  
  getters: {
    getLists: state => state.lists,
    getActiveList: state => state.lists.find(list => list.id === state.activeListId)
  }
})