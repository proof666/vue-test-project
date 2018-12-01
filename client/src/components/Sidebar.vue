<template>
  <div class="sidebar">
    <ul>
      <router-link tag="li" :to="{ path: 'Logs'}">Logs</router-link>
      <router-link tag="li" :to="{ path: 'Data'}">Data</router-link>
      <router-link tag="li" :to="{ path: 'AddData'}">Add Data</router-link>
    </ul>
</div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.sidebar {
  flex: 1;
  background-color: #00695C;
  overflow-x: hidden;
}
.sidebar ul {
  padding: 0;
}
.sidebar li {
  list-style: none;
  padding: 6px 8px;
  margin: 6px 8px;
  border-radius: 4px;
  font-size: 22px;
  display: block;
  color: whitesmoke;
}
.sidebar li.router-link-exact-active {
  background-color: #009688;
  border-color: whitesmoke;
}
.sidebar li:hover {
  cursor: pointer;
  background-color: #80CBC4;
}
</style>
