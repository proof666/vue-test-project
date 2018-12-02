<template>
<div>
<H1>Data</H1>
  <div class='container'>
    <data-table v-bind:headers="headers" v-bind:data="dataStore.data"></data-table>
  </div>
</div>
</template>

<script>
import DataTable from './DataTable';

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
    };
  },
  created() {
    fetch('http://localhost:8081/data').then(response => response.json()).then((data) => { this.dataStore = data; });
  },
};
</script>

<style scoped>
</style>
