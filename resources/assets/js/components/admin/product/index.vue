<template lang="pug">
  .row
    .col-xs-12
        .box
          .box-header
            router-link.btn.btn-success.btn-md(:to="{path: '/product_create'}")
              i.fa.fa-plus-circle 新增商品
          .box-body.table-responsive.no-padding
              table.table.table-striped.table-hover
                thead
                  tr
                    th 編號
                    th 商品名稱
                    th 操作
                tbody
                  tr
                    td 1
                    td 九龍圖
                    td
                      .btn-group
                        .btn.btn-success.btn-xs 查看
                        .btn.bg-orange.btn-xs 編輯
                        .btn.btn-danger.btn-xs 刪除
                  tr
                    td 2
                    td 梅花圖
                    td
                      .btn-group
                        .btn.btn-success.btn-xs 查看
                        .btn.bg-orange.btn-xs 編輯
                        .btn.btn-danger.btn-xs 刪除
</template>

<script type="text/javascript">

</script>