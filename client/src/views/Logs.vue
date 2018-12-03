<template>
<div>
<H1>Logs</H1>
  <div class='container'>
    <data-table v-bind:headers="headers" v-bind:data="log.data"></data-table>
  </div>
</div>
</template>

<script>
import DataTable from '../components/datatable/DataTable';

export default {
  name: 'Logs',
  components: {
    DataTable,
  },
  data() {
    return {
      log: {
        success: null,
        message: null,
        data: null,
      },
      headers: [
        'Type',
        'Date Time',
        'Event Data',
      ],
    };
  },
  created() {
    fetch('http://localhost:8081/logs').then(response => response.json()).then((log) => { this.log = log; });
    this.$io.on('login', (data) => {
      this.log.data.push(data);
    });
    this.$io.on('logout', (data) => {
      this.log.data.push(data);
    });
  },
};
</script>

<style scoped>
</style>
