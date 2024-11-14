<template>
  <div class="todo-list" v-if="activeList">
    <div class="header">
      <h2>{{ activeList.title }}</h2>
      <button class="add-todo-btn" @click="showAddTodoDialog">+</button>
    </div>

    <div class="todos">
      <div v-for="todo in activeList.items" :key="todo.id" class="todo-item">
        <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo.id)" />
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeList() {
      return this.$store.getters.getActiveList
    },
  },
  methods: {
    toggleTodo(todoId) {
      if (this.activeList) {
        this.$store.commit('TOGGLE_TODO', {
          listId: this.activeList.id,
          todoId,
        })
      }
    },
    showAddTodoDialog() {
      if (this.activeList) {
        const text = prompt('Enter todo text:')
        if (text) {
          this.$store.commit('ADD_TODO', {
            listId: this.activeList.id,
            text,
          })
        }
      }
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.add-todo-btn {
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  cursor: pointer;
}
</style>
