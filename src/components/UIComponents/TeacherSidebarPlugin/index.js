import Sidebar from './SideBar.vue'

const SidebarStore = {
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
      name: 'Payment',
      icon: 'ti-pencil-alt2',
      path: '/teacher/payment'
    },
    {
      name: 'User',
      icon: 'ti-map',
      path: '/teacher/user'
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
