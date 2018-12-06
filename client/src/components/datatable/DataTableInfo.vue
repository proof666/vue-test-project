<template>
  <div>
    <span
      v-show="length && length > 0 && lastUpdate">{{`${length} line(s) shown. Data retrieved: ${lastUpdate}.`}}
    </span>
    <span v-show="loading">{{`Loading data...`}}</span>
    <span v-show="!loading && !length">{{`There is no data to display :(.`}}</span>
  </div>
</template>

<script>
export default {
  name: 'Data-Table-Info',
  props: {
    length: Number,
    lastUpdate: String,
    loading: Boolean,
  },
};
</script>

<style scoped>
span {
  font-size: 14px;
  padding-bottom: 8px; 
}
</style>
