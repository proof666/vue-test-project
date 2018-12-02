<template>
  <div class="table-container">
    <data-table-info v-bind:length="data ? data.length : 0" v-bind:lastUpdate="lastUpdate"/>
  <table>
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in (data)" :key="index">
        <th>{{row.type}}</th>
        <th>{{row.datetime}}</th>
        <th>
          <p v-for="(key, index) in Object.keys(row.eventData)"
          :key="index">{{`${key}: ${row.eventData[key]}`}}</p>
        </th>
      </tr>
    </tbody>
  </table>
    <data-table-info v-bind:length="data ? data.length : 0" v-bind:lastUpdate="lastUpdate"/>
  </div>
</template>

<script>
import DataTableInfo from './DataTableInfo';

export default {
  name: 'Data-Table',
  props: {
    headers: Array,
    data: Array,
  },
  components: {
    DataTableInfo,
  },
  data() {
    return {
      lastUpdate: '',
    };
  },
  mounted() {
    this.lastUpdate = new Date().toISOString();
  },
  updated() {
    this.lastUpdate = new Date().toISOString();
  },
};
</script>

<style scoped>
.table-container {
  width: 70%;
  margin: 0 auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead th {
  background-color: #00695C;
  color: white;
  font-weight: bold;
}
th, td{
  padding: 4px;
  text-align: left;
  font-weight: normal;
}
table, th, td {
  border: 1px solid gray;
}
tr:hover {
  background-color: #f5f5f5;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tbody tr th p {
  margin: 4px 0px;
}
</style>
