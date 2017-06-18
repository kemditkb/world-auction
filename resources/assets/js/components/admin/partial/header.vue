<template lang="pug">
header.main-header
  router-link.logo(to='/dashboard')
    span.logo-mini
      b 天下
    span.logo-lg
      b 天下第一拍
  nav.navbar.navbar-static-top
    a.sidebar-toggle(href='#', data-toggle='offcanvas', role='button')
      span.sr-only Toggle navigation
      span.icon-bar
      span.icon-bar
      span.icon-bar
    .navbar-custom-menu
      ul.nav.navbar-nav
        li.dropdown.user.user-menu
          a.dropdown-toggle(href='#', data-toggle='dropdown')
            span.hidden-xs 管理者
          ul.dropdown-menu
            li.user-footer
              .pull-right
                a.btn.btn-default.btn-flat(@click.prevent='logout') 登出
</template>

<script>
export default {
  
}
</script>
