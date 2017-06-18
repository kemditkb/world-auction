<template lang="pug">
aside.main-sidebar
  section.sidebar
    ul.sidebar-menu
      li.header MAIN NAVIGATION
      li
        router-link(to='/dashboard')
          i.fa.fa-dashboard
          span Dashboard
      li
        router-link(to='/widgets')
          i.fa.fa-th
          span Widgets
          span.pull-right-container
            small.label.pull-right.bg-green Hot
      li.treeview
        a(href='#')
          i.fa.fa-laptop
          span UI Elements
          span.pull-right-container
            i.fa.fa-angle-left.pull-right
        ul.treeview-menu
          li
            router-link(to='/UI/general')
              i.fa.fa-circle-o
              |  General
          li
            router-link(to='/UI/icons')
              i.fa.fa-circle-o
              |  Icons
          li
            router-link(to='/UI/buttons')
              i.fa.fa-circle-o
              |  Buttons
          li
            router-link(to='/UI/sliders')
              i.fa.fa-circle-o
              |  Sliders
          li
            router-link(to='/UI/timeline')
              i.fa.fa-circle-o
              |  Timeline
          li
            router-link(to='/UI/modals')
              i.fa.fa-circle-o
              |  Modals 
</template>

<script>
export default {
  
}
</script>
