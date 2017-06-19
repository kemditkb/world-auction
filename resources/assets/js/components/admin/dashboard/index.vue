<template lang="pug">
.content-wrapper
  section.content-header
    h1 公告事項
  section.content
    .box
      .box-header.with-border
        h3.box-title Title
        .box-tools.pull-right
          button.btn.btn-box-tool(type='button', data-widget='collapse', data-toggle='tooltip', title='Collapse')
            i.fa.fa-minus
          button.btn.btn-box-tool(type='button', data-widget='remove', data-toggle='tooltip', title='Remove')
            i.fa.fa-times
      .box-body
        | Start creating your amazing application!
      .box-footer
        | Footer
</template>

<script>
export default {
  
}
</script>
