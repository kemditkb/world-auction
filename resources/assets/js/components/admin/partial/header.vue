<template lang="pug">
header.main-header
  router-link.logo(to='/')
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
        li
          a(href="#", @click.prevent='logout') 登出
</template>

<script>
export default {
  methods: {
    logout: function () {
      this.$router.push('/login')
    }
  }
}
</script>
