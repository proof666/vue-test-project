<template>
  <span v-show="length && lastUpdate">
      {{`${length} line(s) shown. Data retrieved: ${lastUpdate}.`}}
    </span>
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
