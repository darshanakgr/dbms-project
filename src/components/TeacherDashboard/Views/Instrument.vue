<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns"
                     :columnNames="table1.columnNames">

        </paper-table>
      </div>
    </div>
    <div align="center">
      <button @click="pageNo-=10">Previous page</button>
      Page {{this.pageNo / 10 + 1}}
      <button @click="pageNo+=10">Next page</button>
    </div>
  </div>
</template>

<script>
  import PaperTable from './Instrument/PaperTable.vue'

  const tableColumnNames = ['Instrument ID', 'Instrument Name', 'Purchase Date', 'Instrument Category', 'Options']
  /* Give here the names of the attributes */
  const tableColumns = ['instrument_id', 'instrument_name', 'purchased_date', 'category_id', 'options']
  /* Give here the column names as they are in the table */
  const tableData = []
  /* table data will be loaded upon created(), code is below */

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          title: 'Instruments',
          subTitle: 'All the instruments that are being used in this school are listed below.',
          columns: [...tableColumns],
          columnNames: [...tableColumnNames],
          data: [...tableData]
        },
        pageNo: 0,
        tableSize: 0
      }
    },
    created () {
      this.$http.get('http://localhost:3000/getAllInstruments').then(function (data) {   /* get address here */
        this.tableData = data.body.slice(0, 10)
        /* retrive rows, 10 by 10 */
        this.table1.data = [...this.tableData]
      })
    },
    updated () {
      if (this.pageNo < 0) {
        this.pageNo = 0
      }
      this.$http.get('http://localhost:3000/getAllInstruments').then(function (data) {   /* get address here */
        this.tableData = data.body.slice(this.pageNo, this.pageNo + 10)
        /* update the row range when buttons are clicked */
        if (this.tableData.length === 0) {
          this.pageNo -= 10
        }
        this.table1.data = [...this.tableData]
      })
    }
  }
</script>
<style>

</style>
