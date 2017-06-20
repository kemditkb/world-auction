<template lang="pug">
aside.main-sidebar
  section.sidebar
    ul.sidebar-menu
      li.header 選單
      li
        router-link(to='/')
          i.fa.fa-dashboard
          span 控制面板
      li.treeview
        a(href='#')
          i.fa.fa-laptop
          span 系統管理
          span.pull-right-container
            i.fa.fa-angle-left.pull-right
        ul.treeview-menu
          li
            router-link(to='/category')
              i.fa.fa-circle-o
              |  商品類別
          li
            router-link(to='/product')
              i.fa.fa-circle-o
              |  商品管理
</template>

<script>
export default {
  
}
</script>
