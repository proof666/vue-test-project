<template>
<div>
<H1>Data</H1>
  <div class='container'>
    <data-table v-bind:loading="inProgress" v-bind:headers="headers" v-bind:data="sortedData"></data-table>
  </div>
</div>
</template>

<script>
import DataTable from '../components/datatable/DataTable';

export default {
  name: 'Data',
  components: {
    DataTable,
  },
  data() {
    return {
      dataStore: {
        success: null,
        message: null,
        data: null,
      },
      headers: [
        'Type',
        'Date Time',
        'Data',
      ],
      inProgress: true,
    };
  },
  computed: {
    sortedData() {
      return this.dataStore.data ? this.dataStore.data.sort(function(a, b){
        if(a.datetime > b.datetime) { return -1; }
        if(a.datetime < b.datetime) { return 1; }
        return 0;
      }) : null
    }
  },
  mounted() {
    this.$io.on('addData', (data) => {
      this.dataStore.data.push(data);
    });
  },
  created() {
    fetch(`${process.env.BACKEND_HOST}/data`).then(response => response.json()).then((data) => { this.dataStore = data; }).finally(()=> {this.inProgress = false});
  },
};
</script>

<style scoped>
</style>
