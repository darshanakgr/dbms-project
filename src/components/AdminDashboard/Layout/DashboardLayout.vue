<template>
  <div :class="{'nav-open': showSidebar}">
    <div class="wrapper">
      <side-bar type="sidebar" :sidebar-links="sidebarLinks">

      </side-bar>
      <notifications>

      </notifications>
      <div class="main-panel">
        <top-navbar :sidebarLinks="sidebarLinks" :showSidebar="showSidebar"></top-navbar>

        <dashboard-content @click.native="toggleSidebar">

        </dashboard-content>

        <content-footer></content-footer>
      </div>
    </div>
    <!--This sidebar appears only for screens smaller than 992px-->
    <side-bar type="navbar" :sidebar-links="sidebarLinks">

    </side-bar>
  </div>
</template>

<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import SideBar from './SideBar.vue'
  import Notifications from '../../UIComponents/NotificationPlugin/Notifications.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      SideBar,
      Notifications
    },
    data () {
      return {
        showSidebar: false,
        sidebarLinks: [
          {
            name: 'Student',
            icon: 'ti-reddit',
            path: '/admin/student'
          },
          {
            name: 'Teacher',
            icon: 'ti-tumblr-alt',
            path: '/admin/teacher'
          },
          {
            name: 'Instrument',
            icon: 'ti-headphone',
            path: '/admin/instrument'
          },
          {
            name: 'Category',
            icon: 'ti-check-box',
            path: '/admin/category'
          },
          {
            name: 'Classroom',
            icon: 'ti-home',
            path: '/admin/classroom'
          },
          {
            name: 'Payment',
            icon: 'ti-money',
            path: '/admin/payment'
          },
          {
            name: 'User',
            icon: 'ti-user',
            path: '/admin/user'
          },
          {
            name: 'Lesson',
            icon: 'ti-book',
            path: '/admin/lesson'
          },
          {
            name: 'Parent',
            icon: 'ti-paragraph',
            path: '/admin/parent'
          },
          {
            name: 'Play',
            icon: 'ti-control-play',
            path: '/admin/play'
          },
          {
            name: 'Sibling',
            icon: 'ti-smallcap',
            path: '/admin/sibling'
          },
          {
            name: 'Enrollment',
            icon: 'ti-notepad',
            path: '/admin/enrollment'
          },
          {
            name: 'Class',
            icon: 'ti-smallcap',
            path: '/admin/class'
          },
          {
            name: 'Attendance',
            icon: 'ti-calendar',
            path: '/admin/attendance'
          }
        ]
      }
    },
    methods: {
      toggleSidebar () {
        if (this.showSidebar) {
          this.displaySidebar(false)
        }
      },
      displaySidebar (value) {
        this.showSidebar = value
      }
    }
  }

</script>
<style lang="scss">

</style>
