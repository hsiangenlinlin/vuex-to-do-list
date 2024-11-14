<template>
    <div class="sidebar">
      <h2>My Lists</h2>
      <div class="lists">
        <div
          v-for="list in lists"
          :key="list.id"
          class="list-item"
          :class="{ active: list.id === activeListId }"
        >
          <div class="list-item-content" @click="selectList(list.id)">
            {{ list.title }}
          </div>
          <button 
            v-if="list.id === activeListId"
            class="delete-btn"
            @click="deleteList(list.id)"
          >
            🗑️
          </button>
        </div>
      </div>
      <button class="add-list-btn" @click="showAddListDialog">+ Add List</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      lists() {
        return this.$store.getters.getLists;
      },
      activeListId() {
        return this.$store.state.activeListId;
      }
    },
    methods: {
      selectList(listId) {
        this.$store.commit('SET_ACTIVE_LIST', listId);
      },
      showAddListDialog() {
        const title = prompt('Enter list title:');
        if (title) {
          this.$store.commit('ADD_LIST', title);
        }
      },
      deleteList(listId) {
        if (confirm('Are you sure you want to delete this list?')) {
          this.$store.commit('DELETE_LIST', listId);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    cursor: pointer;
  }
  
  .list-item-content {
    flex-grow: 1;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px; /* Adjust this value based on your needs */
  }
  
  .delete-btn {
    visibility: hidden;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 8px;
    opacity: 1;
  }
  
  .delete-btn:hover {
    opacity: 1;
  }
  
  /* Show delete button only when list item is active */
  .list-item.active .delete-btn {
    visibility: visible;
  }

  .list-item.active {
  background-color: #363a13;
}

  </style>