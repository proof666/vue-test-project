<template>
<div>
<H1>Data</H1>
  <div class='container'>
    <data-table v-bind:loading="inProgress" v-bind:headers="headers" v-bind:data="dataStore.data"></data-table>
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
  created() {
    fetch(`${process.env.BACKEND_HOST}/data`).then(response => response.json()).then((data) => { this.dataStore = data; }).finally(()=> {this.inProgress = false});
    this.$io.on('addData', (data) => {
      this.dataStore.data.push(data);
    });
  },
};
</script>

<style scoped>
</style>
