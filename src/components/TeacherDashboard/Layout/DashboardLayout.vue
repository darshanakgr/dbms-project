<template>
  <div :class="{'nav-open': showSidebar}">
    <div class="wrapper">
      <side-bar type="sidebar" :sidebar-links="sidebarLinks">

      </side-bar>
      <notifications>

      </notifications>
      <div class="main-panel">
        <top-navbar></top-navbar>

        <dashboard-content @click.native="toggleSidebar">

        </dashboard-content>

        <content-footer></content-footer>
      </div>
    </div>
    <!--This sidebar appears only for screens smaller than 992px-->
    <side-bar type="navbar" :sidebar-links="sidebarLinks">
      <ul class="nav navbar-nav">
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown">
            <i class="ti-panel"></i>
            <p>Stats</p>
          </a>
        </li>
        <drop-down title="5 Notifications" icon="ti-bell">

          <li><a>Notification 1</a></li>
          <li><a>Notification 2</a></li>
          <li><a>Notification 3</a></li>
          <li><a>Notification 4</a></li>
          <li><a>Another notification</a></li>

        </drop-down>
        <li>
          <a>
            <i class="ti-settings"></i>
            <p>Settings</p>
          </a>
        </li>
        <li class="divider"></li>
      </ul>
    </side-bar>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import SideBar from './SideBar.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      SideBar
    },
    data () {
      return {
        showSidebar: false,
        sidebarLinks: [
          {
            name: 'Student',
            icon: 'ti-panel',
            path: '/teacher/student'
          },
          {
            name: 'Lesson',
            icon: 'ti-user',
            path: '/teacher/lesson'
          },
          {
            name: 'Class',
            icon: 'ti-text',
            path: '/teacher/class'
          },
          {
            name: 'Instrument',
            icon: 'ti-view-list-alt',
            path: '/teacher/instrument'
          },
          {
            name: 'Attendance',
            icon: 'ti-panel',
            path: '/teacher/attendance'
          },
          {
            name: 'Enrollment',
            icon: 'ti-user',
            path: '/teacher/enrollment'
          },
          {
            name: 'Play',
            icon: 'ti-text',
            path: '/teacher/play'
          },
          {
            name: 'Classroom',
            icon: 'ti-view-list-alt',
            path: '/teacher/classroom'
          },
          {
            name: 'Category',
            icon: 'ti-view-list-alt',
            path: '/teacher/category'
          }
        ]
      }
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      },
      displaySidebar (value) {
        this.showSidebar = value
      }
    }
  }
</script>
