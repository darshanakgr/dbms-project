import AdminDashboardLayout from '../components/AdminDashboard/Layout/DashboardLayout.vue'
import TeacherDashboardLayout from '../components/TeacherDashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

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

/* import TeacherStudent from 'src/components/TeacherDashboard/Views/Student.vue'
import TeacherClass from 'src/components/TeacherDashboard/Views/Class.vue'
import TeacherLesson from 'src/components/TeacherDashboard/Views/Lesson.vue'
import TeacherInstrument from 'src/components/TeacherDashboard/Views/Instrument.vue'
import TeacherUser from 'src/components/TeacherDashboard/Views/User.vue'
import TeacherPayment from 'src/components/TeacherDashboard/Views/Payment.vue' */

const routes = [
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '/admin',
    component: AdminDashboardLayout,
    redirect: '/admin/student',
    children: [
      {
        path: 'student',
        name: 'student',
        component: AdminStudent
      },
      {
        path: 'teacher',
        name: 'teacher',
        component: AdminTeacher
      },
      {
        path: 'user',
        name: 'user',
        component: AdminUser
      },
      {
        path: 'payment',
        name: 'payment',
        component: AdminPayement
      },
      {
        path: 'instrument',
        name: 'instrument',
        component: AdminInstrument
      },
      {
        path: 'category',
        name: 'category',
        component: AdminCategory
      },
      {
        path: 'classroom',
        name: 'classroom',
        component: AdminClassroom
      },
      {
        path: 'lesson',
        name: 'lesson',
        component: AdminLesson
      },
      {
        path: 'parent',
        name: 'parent',
        component: AdminParent
      },
      {
        path: 'play',
        name: 'play',
        component: AdminPlay
      },
      {
        path: 'sibling',
        name: 'sibling',
        component: AdminSibling
      },
      {
        path: 'enrollment',
        name: 'enrollment',
        component: AdminEnrollment
      },
      {
        path: 'class',
        name: 'class',
        component: AdminClass
      },
      {
        path: 'attendance',
        name: 'attendance',
        component: AdminAttendance
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
