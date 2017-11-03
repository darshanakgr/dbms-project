<template>
  <div>
    <div class="header">
      <slot name="header">
        <h4 class="title">{{title}}</h4>
        <p class="category">{{subTitle}}</p>
        <div align="right">
          <button @click="addNewRecord(title)">Add record</button>
        </div>
      </slot>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table" :class="tableClass">
        <thead>
          <th  v-for="column in columnNames">
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
              <div align="center" v-if="column=='options' && title=='Instruments'">
                <button @click="remove(itemValue(item, 'instrument_id'))" :id="itemValue(item, 'instrument_id')">Delete</button>
                <button @click="edit(itemValue(item, 'instrument_id'))" :id="itemValue(item, 'instrument_id')">Edit</button>
              </div>
              <div align="center" v-if="column=='options' && title=='Classrooms'">
                <button @click="remove(itemValue(item, 'class_room_id'))" :id="itemValue(item, 'class_room_id')">Delete</button>
                <button @click="edit(itemValue(item, 'class_room_id'))" :id="itemValue(item, 'class_room_id')">Edit</button>
              </div>
              <div align="center" v-if="column=='options' && title=='Lessons'">
                <button @click="remove(itemValue(item, 'lesson_id'))" :id="itemValue(item, 'lesson_id')">Delete</button>
                <button @click="edit(itemValue(item, 'lesson_id'))" :id="itemValue(item, 'lesson_id')">Edit</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
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
      },
      edit (id) {
        alert(id + ' redirect to edit page')
      },
      addNewRecord (title) {
        alert(title)
        /* have some if statements, depending on title, redirect to correct add record page
          make sure button is only visible for administrators
        */
      }
    }
  }

</script>
<style>

</style>
