<template lang="pug">
  .row
    .col-xs-12
      .box.box-primary
        h3.box-title 新增商品
      .box-body
        .form-group
          label 商品名稱
          input.form-control(type="text")
        .form-group
          label 起標價格
          input.form-control(type="text")
        .form-group
          label 出價增額
          input.form-control(type="text")
        .form-group
          label 開始時間
          .input-group.date(data-provide="datepicker")
            input.form-control(type="text")
            .input-group-addon
              span.glyphicon.glyphicon-th
        .form-group
          label 結束時間
          .input-group.date(data-provide="datepicker")
            input.form-control(type="text")
            .input-group-addon
              span.glyphicon.glyphicon-th
      .box-booter
        button.btn.btn-default(type="submit") 取消
        button.btn.btn-info.pull-right(type="submit") 新增
</template>

<script type="text/javascript">
  
</script>