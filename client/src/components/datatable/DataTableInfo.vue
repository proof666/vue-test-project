<template>
  <div>
    <span
      v-show="length && length > 0 && lastUpdate"
    >{{`${length} line(s) shown. Data retrieved: ${lastUpdate}.`}}</span>
    <span v-show="!length">{{`There is no data to display :(.`}}</span>
  </div>
</template>

<script>
export default {
  name: 'Data-Table-Info',
  props: {
    length: Number,
    lastUpdate: String,
  },
};
</script>

<style scoped>
span {
  font-size: 14px;
}
</style>
