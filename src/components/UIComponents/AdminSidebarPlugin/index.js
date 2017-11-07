import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Student',
      icon: 'ti-panel',
      path: '/admin/student'
    },
    {
      name: 'Teacher',
      icon: 'ti-user',
      path: '/admin/teacher'
    },
    {
      name: 'Instrument',
      icon: 'ti-view-list-alt',
      path: '/admin/instrument'
    },
    {
      name: 'Classroom',
      icon: 'ti-text',
      path: '/admin/classroom'
    },
    {
      name: 'Payment',
      icon: 'ti-pencil-alt2',
      path: '/admin/payment'
    },
    {
      name: 'User',
      icon: 'ti-map',
      path: '/admin/user'
    },
    {
      name: 'Lesson',
      icon: 'ti-map',
      path: '/admin/lesson'
    },
    {
      name: 'Parent',
      icon: 'ti-map',
      path: '/admin/parent'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
