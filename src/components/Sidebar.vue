<template>
  <div class="sidebar">
    <h2>My Lists</h2>
    <div class="lists">
      <div
        v-for="list in lists"
        :key="list.id"
        class="list-item"
        :class="{ active: list.id === activeListId }"
        @click="selectList(list.id)"
      >
        {{ list.title }}
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
    }
  }
}
</script>