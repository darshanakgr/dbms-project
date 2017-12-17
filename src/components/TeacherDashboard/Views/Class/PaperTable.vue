<template>
  <div>
    <div class="header">
      <slot name="header">
        <h4 class="title">{{title}}</h4>
        <p class="category">{{subTitle}}</p>
        <div align="right">
          <PopupInput :databaseTable="title"></PopupInput>
        </div>
      </slot>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table" :class="tableClass">
        <thead>
          <th v-for="column in columnNames">
            <div class="" align="center">
             {{column}}
            </div>
          </th>
        </thead>
        <tbody>
          <tr v-for="item in data">
            <td v-for="column in columns" v-if="hasValue(item, column)">
              <div align="center" v-if="column!='options'">
                {{itemValue(item, column)}}
              </div>
              <div align="center" v-if="column=='options'">
                <PopupEditInput :editData="item"></PopupEditInput>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import PopupInput from './PopupInput.vue'
  import PopupEditInput from './PopupEditInput.vue'

  export default {
    components: {
      'PopupInput': PopupInput,
      'PopupEditInput': PopupEditInput
    },
    props: {
      columns: Array,
      columnNames: Array,
      data: Array,
      type: {
        type: String, // striped | hover
        default: 'Striped'
      },
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      }
    },
    data () {
      return {

      }
    },
    computed: {
      tableClass () {
        return `table-${this.type}`
      }
    },
    methods: {
      hasValue (item, column) {
        return item[column] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column]
      },
      remove (id) {
        alert(id + ' delete from database query')
      }
    }
  }
</script>

<style>

</style>
