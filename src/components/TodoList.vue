<template>
  <div class="todo-list" v-if="activeList">
    <div class="header">
      <h2>{{ activeList.title }}</h2>
      <button class="add-todo-btn" @click="showAddTodoDialog">+</button>
    </div>
    
    <div class="todos">
      <div v-for="todo in activeList.items" :key="todo.id" class="todo-item">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
        />
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeList() {
      return this.$store.getters.getActiveList;
    }
  },
  methods: {
    toggleTodo(todoId) {
      if (this.activeList) {
        this.$store.commit('TOGGLE_TODO', {
          listId: this.activeList.id,
          todoId
        });
      }
    },
    showAddTodoDialog() {
      if (this.activeList) {
        const text = prompt('Enter todo text:');
        if (text) {
          this.$store.commit('ADD_TODO', {
            listId: this.activeList.id,
            text
          });
        }
      }
    }
  }
}
</script>
