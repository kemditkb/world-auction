<template lang="pug">
  .row
    .col-xs-12
        .box
          .box-header
            .btn.btn-success.btn-md
              i.fa.fa-plus-circle 新增項目
          .box-body.table-responsive.no-padding
              table.table.table-striped.table-hover
                thead
                  tr
                    th 編號
                    th 類別名稱
                    th 操作
                tbody
                  tr
                    td 1
                    td 古董
                    td
                      .btn-group
                        .btn.bg-orange.btn-xs 編輯
                        .btn.btn-danger.btn-xs 刪除
                  tr
                    td 2
                    td 珠寶
                    td
                      .btn-group
                        .btn.bg-orange.btn-xs 編輯
                        .btn.btn-danger.btn-xs 刪除
</template>

<script type="text/javascript">

</script>