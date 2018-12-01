<template>
  <div id="app">
    <sidebar/>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
#content {
  padding: 10px 10px;
  flex: 5
}
</style>
