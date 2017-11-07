<template>
  <div>
    <transition name="modal">
        <div class="modal-mask" @click="close" v-show="showModal">
            <div class="modal-container" @click.stop>
                <div class="modal-header">
                    <h3>New Classroom</h3>
                </div>
                <div class="modal-body">
                    <label class="form-label">
                        Building name
                        <input v-model="dataObject.building" class="form-control">
                    </label>
                </div>
                <div class="modal-footer text-right">
                    <button class="modal-default-button" @click="saveRecord()">
                        Add new record
                    </button>
                    <button class="modal-default-button" @click="close()">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </transition>
    <div>
        <button id="show-modal" @click="showModal = true">Add Record</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    attributes: Array,
    databaseTable: ''
  },
  data () {
    return {
      dataObject: {},
      title: '',
      body: '',
      showModal: false
    }
  },
  methods: {
    saveRecord: function () {
      this.$http.post('http://localhost:3000/addNewClassroom', this.dataObject).then(function (res) {
        if (res.ok && res.status === 200) {
          return alert('Classroom added successfully')
        }
        alert('Unable to register this classroom')
      }).catch(function (err) {
        console.log(err)
        alert('Unable to register this classroom')
      })
      this.close()
    },
    close: function () {
      for (var key in this.dataObject) {
        delete this.dataObject[key]
      }
      this.showModal = false
      this.title = ''
      this.body = ''
    }
  },
  mounted: function () {
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
