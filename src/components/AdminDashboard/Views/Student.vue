<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <paper-table :title="title" :columns="columns"></paper-table>
      </div>
    </div>
  </div>
</template>
<script>
  import PaperTable from 'src/components/UIComponents/PaperTable.vue'

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        title: 'Student Detail',
        columns: ['Student Id', 'Name', 'Gender', 'Mobile', 'Registered Date']
      }
    },
    methods: {}
  }
</script>
<style>

</style>
