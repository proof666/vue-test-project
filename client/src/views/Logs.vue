<template>
<div>
<H1>Logs</H1>
  <div class='container'>
    <data-table v-bind:loading="inProgress" v-bind:headers="headers" v-bind:data="log.data"></data-table>
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
      inProgress: true,
    };
  },
  created() {
    fetch(`${process.env.BACKEND_HOST}/logs`).then(response => response.json()).then((log) => { this.log = log; }).finally(()=> {this.inProgress = false});
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
