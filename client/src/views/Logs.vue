<template>
<div>
<H1>Logs</H1>
  <div class='container'>
    <data-table v-bind:loading="inProgress" v-bind:headers="headers" v-bind:data="sortedData"></data-table>
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
  computed: {
    sortedData() {
      return this.log.data ? this.log.data.sort(function(a, b){
        if(a.datetime > b.datetime) { return -1; }
        if(a.datetime < b.datetime) { return 1; }
        return 0;
      }) : null
    }
  },
  mounted() {
    this.$io.on('login', (data) => {
      this.log.data.push(data);
    });
    this.$io.on('logout', (data) => {
      this.log.data.push(data);
    });
    this.$io.on('addData', (data) => {
      this.log.data.push(data);
    });
  },
  created() {
    fetch(`${process.env.BACKEND_HOST}/logs`).then(response => response.json()).then((log) => { this.log = log; }).finally(()=> {this.inProgress = false});
  },
};
</script>

<style scoped>
</style>
