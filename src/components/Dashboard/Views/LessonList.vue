<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

          </paper-table>
        </div>
      </div>
    </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'

  const tableColumns = ['Lesson ID', 'Lesson Name']
  const tableData = []

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          title: 'Lessons',
          subTitle: 'All the Lessons that are being taught in this school are listed below.',
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }

</script>
<style>

</style>
