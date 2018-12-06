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
};
</script>

<style scoped>
.sidebar {
  flex: 1;
  background-color: #00695C;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
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
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
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
