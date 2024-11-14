import { createStore } from 'vuex'

export default createStore({
  state: {
    // Each list has: { id, title, items[] }
    // items contains: { id, text, completed }
    lists: [],

    // Used to track which list is currently selected
    activeListId: null,
  },

  mutations: {
    // Creates a new list with given title
    ADD_LIST(state, title) {
      const newList = {
        id: Date.now(),
        title,
        items: [], // Empty array to store todos
      }
      state.lists.push(newList) // Add new list to arrays of lists

      // After the new list created, automatically select it
      state.activeListId = newList.id
    },

    // Adds a new todo item to a specific list
    ADD_TODO(state, { listId, text }) {
      // Find the list where we want to add the todo
      const list = state.lists.find((list) => list.id === listId)
      if (list) {
        // Add new todo to the list's items array
        list.items.push({
          id: Date.now(),
          text,
          completed: false, // Initial completion status
        })
      }
    },

    // Toggles the completed status of a specific todo
    TOGGLE_TODO(state, { listId, todoId }) {
      // Find the list containing the todo
      const list = state.lists.find((list) => list.id === listId)
      if (list) {
        // Find the specific todo item
        const todo = list.items.find((todo) => todo.id === todoId)
        if (todo) {
          // Toggle the completed status
          todo.completed = !todo.completed
        }
      }
    },

    // Updates which list is currently active/selected
    SET_ACTIVE_LIST(state, listId) {
      state.activeListId = listId
    },

    // Deletes a specific list
    DELETE_LIST(state, listId) {
      // Find the index of the list to delete
      const index = state.lists.findIndex((list) => list.id === listId)
      // If the index is found
      if (index !== -1) {
        // Remove the list from the array
        state.lists.splice(index, 1)
      }
    },
  },

  getters: {
    // Returns all lists
    getLists: (state) => state.lists,

    // Returns the currently active list
    getActiveList: (state) => state.lists.find((list) => list.id === state.activeListId),
  },
})
