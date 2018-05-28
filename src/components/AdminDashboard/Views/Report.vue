<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-md-3">
        <button class="btn btn-fill btn-success">Students Detail Report</button>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-3">
        <button class="btn btn-fill btn-success">Student Detail Report</button>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-3">
        <button class="btn btn-fill btn-success" @click="showTeachersDetailReport()">Teachers Detail Report</button>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-3">
        <button class="btn btn-fill btn-success" @click="showTeacherDetailReport()">Teacher Detail Report</button>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-3">
        <button class="btn btn-fill btn-success">Attendance Detail Report</button>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-3">
        <button class="btn btn-fill btn-success">Class Detail Report</button>
      </div>
    </div>
  </div>
</template>

<script>
  import pdfMake from 'pdfmake/build/pdfmake'
  import pdfFonts from 'pdfmake/build/vfs_fonts'
  pdfMake.vfs = pdfFonts.pdfMake.vfs

  export default {
    components: {

    },
    data () {
      return {

      }
    },
    methods: {
      showTeachersDetailReport () {
        this.$http.get('http://localhost:3000/getTeachersDetailReport').then((res) => {
          var body = res.body
          body.unshift(['Teacger ID', 'Name', 'Contact No', 'No of Lessons', 'Address'])
          console.log(body)
          var dd = {
            pageSize: 'A4',
            pageOrientation: 'landscape',
            content: [
              {text: 'TACHERS DETAIL REPORT', style: 'header'},
              {text: 'Music School Management System'},
              {text: 'RUBIX SOLUTIONS @2017', margin: [0, 0, 0, 20]},
              {
                table: {
                  widths: [60, 150, 80, 80, '*'],
                  body: body
                }
              }
            ],
            styles: {
              header: {
                fontSize: 22,
                bold: true
              }
            }
          }
          pdfMake.createPdf(dd).open({}, window)
        }).catch((e) => {
          alert(e.message)
        })
      },
      showTeacherDetailReport () {
        var teacherId = prompt('Enter Teacher\'s ID')
        this.$http.post('http://localhost:3000/getTeacherDetailReport', {teacherId}).then((res) => {
          var teacher = res.body
          teacher.modules.unshift(['Class ID', 'Year', 'Day', 'Time', 'Lesson'])
          teacher.payments.unshift(['Payment ID', 'Amount', 'Date'])
          var dd = {
            pageSize: 'A4',
            pageOrientation: 'portrait',
            content: [
              {text: 'TEACHER DETAIL REPORT', style: 'header'},
              {text: 'Music School Management System'},
              {text: 'RUBIX SOLUTIONS @2017', margin: [0, 0, 0, 20]},
              {
                columns: [
                  {
                    width: 150,
                    text: 'Teacher ID'
                  },
                  {
                    width: '*',
                    text: teacher.teacher_id
                  }
                ],
                columnGap: 5,
                margin: [0, 0, 0, 2]
              },
              {
                columns: [
                  {
                    width: 150,
                    text: 'Name'
                  },
                  {
                    width: '*',
                    text: teacher.name
                  }
                ],
                columnGap: 5,
                margin: [0, 0, 0, 2]
              },
              {
                columns: [
                  {
                    width: 150,
                    text: 'Address'
                  },
                  {
                    width: '*',
                    text: teacher.address
                  }
                ],
                columnGap: 5,
                margin: [0, 0, 0, 2]
              },
              {
                columns: [
                  {
                    width: 150,
                    text: 'Contact No'
                  },
                  {
                    width: '*',
                    ul: teacher.mobileNo
                  }
                ],
                columnGap: 5,
                margin: [0, 0, 0, 20]
              },
              {
                text: 'Enrolled Classes',
                bold: true,
                margin: [0, 0, 0, 10]
              },
              {
                style: 'tableExample',
                table: {
                  widths: [60, 60, 80, 60, '*'],
                  body: teacher.modules
                }
              },
              {
                text: 'Payments History',
                bold: true,
                margin: [0, 20, 0, 10]
              },
              {
                style: 'tableExample',
                table: {
                  widths: ['*', '*', '*'],
                  body: teacher.payments
                }
              }

            ],
            styles: {
              header: {
                fontSize: 22,
                bold: true
              }
            }
          }
          pdfMake.createPdf(dd).open({}, window)
        }).catch((e) => {
          alert('No record for that Teacher ID')
        })
      }
    },
    created () {

    },
    updated () {

    }
  }
</script>
<style>
  div.row{
    margin-bottom: 10px;
  }
</style>
