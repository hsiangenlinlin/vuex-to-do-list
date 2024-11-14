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
    TodoList
  }
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
  border-right: 1px solid #ddd;
  padding: 20px;
  overflow-y: auto;
}

.list-item {
  padding: 10px;
  cursor: pointer;
}



.todo-list {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

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

.add-list-btn, .add-todo-btn {
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  cursor: pointer;
}
</style>