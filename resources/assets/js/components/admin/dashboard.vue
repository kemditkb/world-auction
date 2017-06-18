<template lang="pug">
  div
    app-header
    app-sidebar
</template>

<script>
import Header from './partial/header'
import Sidebar from './partial/sidebar'

export default {
  components: {
    'app-header': Header,
    'app-sidebar': Sidebar
  }
}
</script>
