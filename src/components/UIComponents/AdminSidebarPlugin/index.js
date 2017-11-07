import Sidebar from './SideBar.vue'

const SidebarStore = {
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
      icon: 'ti-headphone',
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
