<template>
  <div class="app">
    <Sidebar />
    <TodoList />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: {
    Sidebar,
    TodoList,
  },
}
</script>

<style>
.app {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  min-width: 250px;
  border-right: 1px solid #ddd; /* The deviding line between slidebar and todos */
  padding: 20px;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}

.todo-list {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  margin-left: 250px;
}
</style>
