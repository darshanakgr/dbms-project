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
              Class Year
              <input v-model="dataObject.classYear" name="classYear" v-validate="'required|digits:4'" class="form-control">
            </label>
            <span v-show="errors.has('classYear')" style="color:red">Invalid year</span>
            <label class="form-label">
              Class Time
              <input v-model="dataObject.classTime" type="time" name="classTime" v-validate="'required'" class="form-control">
            </label>
            <span v-show="errors.has('classTime')" style="color:red">Invalid time</span>
            <label class="form-label">
              Class Type
              <select v-model="dataObject.classType" name="classType" v-validate="'required'" class="form-control">
                <option value ="0">Individual</option>
                <option value ="1">Group</option>
              </select>
            </label>
            <span v-show="errors.has('classType')" style="color:red">Invalid class type</span>
            <label class="form-label">
              Class Day
              <select v-model="dataObject.classDay" class="form-control" name="classDay" v-validate="'required'">
                <option value ="monday">Monday</option>
                <option value ="tuesday">Tuesday</option>
                <option value ="wednesday">Wednesday</option>
                <option value ="thursday">Thursday</option>
                <option value ="friday">Friday</option>
                <option value ="saturday">Saturday</option>
                <option value ="sunday">Sunday</option>
              </select>
            </label>
            <span v-show="errors.has('classDay')" style="color:red">Invalid class day</span>
            <label class="form-label">
              Classroom ID <br>
              <select v-model="dataObject.classroomId" class="form-control" name="classroomId" v-validate="'required'">
                <option v-for="choice in classroomIds" :value ="choice.class_room_id">{{ choice.building }}</option>
              </select>
            </label>
            <span v-show="errors.has('classroomId')" style="color:red">Invalid classroom ID</span>
            <label class="form-label">
              Lesson ID <br>
              <select v-model="dataObject.lessonId" class="form-control" name="lessonId" v-validate="'required'">
                <option v-for="choice in lessonIds" :value ="choice.lesson_id">{{ choice.lesson_name }}</option>
              </select>
            </label>
            <span v-show="errors.has('lessonId')" style="color:red">Invalid lesson ID</span>
            <label class="form-label">
              Teacher ID <br>
              <select v-model="dataObject.teacherId" class="form-control" name="teacherId" v-validate="'required'">
                <option v-for="choice in teacherIds" :value ="choice.teacher_id">{{ choice.name }}</option>
              </select>
            </label>
            <span v-show="errors.has('teacherId')" style="color:red">Invalid teacher ID</span>
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
        classroomIds: {},
        lessonIds: {},
        teacherIds: {},
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
            this.$http.patch('http://localhost:3000/updateClass', this.dataObject).then(function (res) {
              if (res.ok && res.status === 200) {
                return alert('Class updated successfully')
              }
              alert('Unable to update this class')
            }).catch(function (err) {
              console.log(err)
              alert('Unable to update this class')
            })
            this.close()
          }
        })
      },
      deleteRecord: function () {
        this.$http.post('http://localhost:3000/removeClass', this.dataObject).then(function (res) {
          if (res.ok && res.status === 200) {
            return alert('Class deleted successfully')
          }
          alert('Unable to delete this class')
        }).catch(function (err) {
          console.log(err)
          alert('Unable to delete this class')
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
      this.$http.get('http://localhost:3000/getAllClassrooms').then(function (data) {   /* get address here */
        this.classroomIds = [...data.body]
      })
      this.$http.get('http://localhost:3000/getAllLessons').then(function (data) {   /* get address here */
        this.lessonIds = [...data.body]
      })
      this.$http.get('http://localhost:3000/getAllTeachers').then(function (data) {   /* get address here */
        this.teacherIds = [...data.body]
      })
    },
    mounted: function () {
      this.dataObject.classId = this.editData.class_id
      this.dataObject.classYear = this.editData.class_year
      this.dataObject.classTime = this.editData.class_time
      this.dataObject.classType = this.editData.class_type
      this.dataObject.classDay = this.editData.class_day
      this.dataObject.classroomId = this.editData.class_room_id
      this.dataObject.lessonId = this.editData.lesson_id
      this.dataObject.teacherId = this.editData.teacher_id
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
