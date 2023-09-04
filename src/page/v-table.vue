<script setup>
import {ref} from 'vue'

const tableData = ref([])
const tableHead = ref([{
  name: "省区",
  prop: "province",
  width: 80,
  sortable: true
},
  {
    name: "地市",
    prop: "city",
    width: 80
  },
  {
    name: "延迟次数(次)",
    prop: "num",
    width: 120,
    sortable: true
  },
  {
    name: "延迟次数(次)",
    prop: "num2",
    width: 120,
    sortable: true
  },

])
</script>

<template>
  <section class="v-table-con">
    <h1>表格组件</h1>
    <v-table :tableData="tableData"
             :tableHead="tableHead"></v-table>
  </section>
</template>

<style scoped>

</style>
