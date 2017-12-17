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
              <input v-model="dataObject.firstName" class="form-control" name="fname" v-validate="'required|alpha'">
            </label>
            <span v-show="errors.has('fname')" style="color:red">Invalid name</span>
            <label class="form-label">
              Last Name
              <input v-model="dataObject.lastName" class="form-control" name="lname" v-validate="'required|alpha'">
            </label>
            <span v-show="errors.has('lname')" style="color:red">Invalid name</span>
            <label class="form-label">
              Gender
              <select v-model="dataObject.gender" class="form-control" name="gender" v-validate="'required'">
                <option value ="male">Male</option>
                <option value ="female">Female</option>
              </select>
            </label>
            <span v-show="errors.has('gender')" style="color:red">Invalid gender</span>
            <label class="form-label">
              Registration date
              <input v-model="dataObject.registerDate" type="date" class="form-control" name="registerDate" v-validate="'required'">
            </label>
            <span v-show="errors.has('registerDate')" style="color:red">Invalid date</span>
            <label class="form-label">
              Parent ID
              <select v-model="dataObject.parentId" class="form-control" name="parentId" v-validate="'required'">
                <option v-for="choice in studentParents" :value ="choice.parent_id">{{ choice.first_name }}</option>
              </select>
            </label>
            <span v-show="errors.has('parentId')" style="color:red">Invalid parent ID</span>
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
        studentParents: {},
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
            this.$http.patch('http://localhost:3000/updateStudent', this.dataObject).then(function (res) {
              if (res.ok && res.status === 200) {
                return alert('Student updated successfully')
              }
              alert('Unable to update this student')
            }).catch(function (err) {
              console.log(err)
              alert('Unable to update this student')
            })
            this.close()
          }
        })
      },
      deleteRecord: function () {
        this.$http.post('http://localhost:3000/removeStudent', this.dataObject).then(function (res) {
          if (res.ok && res.status === 200) {
            return alert('Student deleted successfully')
          }
          alert('Unable to delete this student')
        }).catch(function (err) {
          console.log(err)
          alert('Unable to delete this student')
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
    created () {
      this.$http.get('http://localhost:3000/getAllParents').then(function (data) {   /* get address here */
        this.studentParents = [...data.body]
      })
    },
    mounted: function () {
      this.dataObject.studentId = this.editData.student_id
      this.dataObject.firstName = this.editData.sf
      this.dataObject.lastName = this.editData.sl
      this.dataObject.gender = this.editData.gender
      this.dataObject.registerDate = this.editData.register_date
      this.dataObject.parentId = this.editData.parent_id
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
