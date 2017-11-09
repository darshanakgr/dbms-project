import AdminDashboardLayout from '../components/AdminDashboard/Layout/DashboardLayout.vue'
import TeacherDashboardLayout from '../components/TeacherDashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
import Login from 'src/Login.vue'
// Admin pages
import AdminStudent from 'src/components/AdminDashboard/Views/Student.vue'
import AdminTeacher from 'src/components/AdminDashboard/Views/Teacher.vue'
import AdminPayement from 'src/components/AdminDashboard/Views/Payment.vue'
import AdminUser from 'src/components/AdminDashboard/Views/User.vue'
import AdminInstrument from 'src/components/AdminDashboard/Views/Instrument.vue'
import AdminClassroom from 'src/components/AdminDashboard/Views/ClassRoom.vue'
import AdminLesson from 'src/components/AdminDashboard/Views/Lesson.vue'
import AdminParent from 'src/components/AdminDashboard/Views/Parent.vue'
import AdminPlay from 'src/components/AdminDashboard/Views/Play.vue'
import AdminSibling from 'src/components/AdminDashboard/Views/Sibling.vue'
import AdminCategory from 'src/components/AdminDashboard/Views/Category.vue'
import AdminEnrollment from 'src/components/AdminDashboard/Views/Enrollment.vue'
import AdminClass from 'src/components/AdminDashboard/Views/Class.vue'
import AdminAttendance from 'src/components/AdminDashboard/Views/Attendance.vue'

// Student pages
import TeacherStudent from 'src/components/TeacherDashboard/Views/Student.vue'
import TeacherInstrument from 'src/components/TeacherDashboard/Views/Instrument.vue'
import TeacherLesson from 'src/components/TeacherDashboard/Views/Lesson.vue'
import TeacherClass from 'src/components/TeacherDashboard/Views/Class.vue'
import TeacherAttendance from 'src/components/TeacherDashboard/Views/Attendance.vue'
import TeacherCategory from 'src/components/TeacherDashboard/Views/Category.vue'
import TeacherClassroom from 'src/components/TeacherDashboard/Views/Classroom.vue'
import TeacherEnrollment from 'src/components/TeacherDashboard/Views/Enrollment.vue'
import TeacherPlay from 'src/components/TeacherDashboard/Views/Play.vue'

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/admin',
    component: AdminDashboardLayout,
    redirect: '/admin/student',
    children: [
      {
        path: '/admin/student',
        name: 'student',
        component: AdminStudent
      },
      {
        path: '/admin/teacher',
        name: 'teacher',
        component: AdminTeacher
      },
      {
        path: '/admin/user',
        name: 'user',
        component: AdminUser
      },
      {
        path: '/admin/payment',
        name: 'payment',
        component: AdminPayement
      },
      {
        path: '/admin/instrument',
        name: 'instrument',
        component: AdminInstrument
      },
      {
        path: '/admin/category',
        name: 'category',
        component: AdminCategory
      },
      {
        path: '/admin/classroom',
        name: 'classroom',
        component: AdminClassroom
      },
      {
        path: '/admin/lesson',
        name: 'lesson',
        component: AdminLesson
      },
      {
        path: '/admin/parent',
        name: 'parent',
        component: AdminParent
      },
      {
        path: '/admin/play',
        name: 'play',
        component: AdminPlay
      },
      {
        path: '/admin/sibling',
        name: 'sibling',
        component: AdminSibling
      },
      {
        path: '/admin/enrollment',
        name: 'enrollment',
        component: AdminEnrollment
      },
      {
        path: '/admin/class',
        name: 'class',
        component: AdminClass
      },
      {
        path: '/admin/attendance',
        name: 'attendance',
        component: AdminAttendance
      }
    ]
  },
  {
    path: '/teacher',
    component: TeacherDashboardLayout,
    redirect: '/teacher/student',
    children: [
      {
        path: '/teacher/student',
        name: 'student',
        component: TeacherStudent
      },
      {
        path: '/teacher/instrument',
        name: 'instrument',
        component: TeacherInstrument
      },
      {
        path: '/teacher/lesson',
        name: 'lesson',
        component: TeacherLesson
      },
      {
        path: '/teacher/class',
        name: 'class',
        component: TeacherClass
      },
      {
        path: '/teacher/attendance',
        name: 'student',
        component: TeacherAttendance
      },
      {
        path: '/teacher/category',
        name: 'instrument',
        component: TeacherCategory
      },
      {
        path: '/teacher/enrollment',
        name: 'lesson',
        component: TeacherEnrollment
      },
      {
        path: '/teacher/classroom',
        name: 'class',
        component: TeacherClassroom
      },
      {
        path: '/teacher/play',
        name: 'class',
        component: TeacherPlay
      }
    ]
  },
  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
