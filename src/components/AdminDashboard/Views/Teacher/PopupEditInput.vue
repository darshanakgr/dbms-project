<template>
  <div>
    <transition name="modal">
      <div class="modal-mask" @click="close" v-show="showEditModal">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h3>Edit Record</h3>
          </div>
          <div class="modal-body">
            <label class="form-label">
              First Name
              <input v-model="dataObject.firstName" class="form-control" name="fName" v-validate="'required|alpha'">
            </label>
            <span v-show="errors.has('fName')" style="color:red">Invalid name</span>
            <label class="form-label">
              Last Name
              <input v-model="dataObject.lastName" class="form-control" name="lName" v-validate="'required|alpha'">
            </label>
            <span v-show="errors.has('lName')" style="color:red">Invalid name</span>
            <label class="form-label">
              Address Line 1
              <input v-model="dataObject.address1" class="form-control" name="add1" v-validate="'required'">
            </label>
            <span v-show="errors.has('add1')" style="color:red">Invalid address</span>
            <label class="form-label">
              Address Line 1
              <input v-model="dataObject.address2" class="form-control" name="add2" v-validate="'required'">
            </label>
            <span v-show="errors.has('add2')" style="color:red">Invalid address</span>
            <label class="form-label">
              Address Line 1
              <input v-model="dataObject.address3" class="form-control" name="add3" v-validate="'required'">
            </label>
            <span v-show="errors.has('add3')" style="color:red">Invalid address</span>
          </div>
          <div class="modal-footer text-right">
            <button class="modal-default-button" @click="saveRecord()">
              Update record
            </button>
            <button class="modal-default-button" @click="close()">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div class="modal-mask" @click="close" v-show="showDeleteModal">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h3>Delete Record</h3>
          </div>
          <div class="modal-body">
            <label class="form-label">
              Confirm record deletion?
            </label>
          </div>
          <div class="modal-footer text-right">
            <button class="modal-default-button" @click="deleteRecord()">
              Yes
            </button>
            <button class="modal-default-button" @click="close()">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </transition>
    <div>
      <button id="show-modal" @click="showEditModal = true">Edit</button>
      <button id="show-delete-modal" @click="showDeleteModal = true">Delete</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      editData: Object
    },
    data () {
      return {
        showEditModal: false,
        showDeleteModal: false,
        dataObject: {},
        title: '',
        body: ''
      }
    },
    methods: {
      saveRecord: function () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.$http.patch('http://localhost:3000/updateTeacher', this.dataObject).then(function (res) {
              if (res.ok && res.status === 200) {
                return alert('Teacher updated successfully')
              }
              alert('Unable to update this teacher')
            }).catch(function (err) {
              console.log(err)
              alert('Unable to update this teacher')
            })
            this.close()
          }
        })
      },
      deleteRecord: function () {
        this.$http.post('http://localhost:3000/removeTeacher', this.dataObject).then(function (res) {
          if (res.ok && res.status === 200) {
            return alert('Teacher deleted successfully')
          }
          alert('Unable to delete this intrument')
        }).catch(function (err) {
          console.log(err)
          alert('Unable to delete this teacher')
        })
        this.close()
      },
      close: function () {
        this.showEditModal = false
        this.showDeleteModal = false
        this.title = ''
        this.body = ''
      }
    },
    mounted: function () {
      this.dataObject.teacherId = this.editData.teacher_id
      this.dataObject.firstName = this.editData.first_name
      this.dataObject.lastName = this.editData.last_name
      this.dataObject.address1 = this.editData.address_line_1
      this.dataObject.address2 = this.editData.address_line_2
      this.dataObject.address3 = this.editData.address_line_3
      document.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
          this.close()
        }
      })
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
  }

  .modal-container {
    width: 300px;
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .text-right {
    text-align: right;
  }

  .form-label {
    display: block;
    margin-bottom: 1em;
  }

  .form-label > .form-control {
    margin-top: 0.5em;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    line-height: 1.5;
    border: 1px solid #ddd;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
