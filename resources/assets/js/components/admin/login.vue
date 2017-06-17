<<template lang="pug">
.login-box
  .login-logo
    router-link(to='/')
      b 天下第一拍
  .login-box-body
    p.login-box-msg 登入開始管理
    form(@submit.prevent='login')
      .alert.alert-danger(v-if='error')
        a.close(data-dismiss='alert') ×
        |           {{ error }}
      .form-group.has-feedback
        input.form-control(type='text', placeholder='帳號', v-model='credentials.username')
        span.glyphicon.glyphicon-user.form-control-feedback
      .form-group.has-feedback
        input.form-control(type='password', placeholder='密碼', v-model='credentials.password')
        span.glyphicon.glyphicon-lock.form-control-feedback
      .row
        .col-xs-8
          .checkbox
            label
              input(type='checkbox', name='remember')
              | 記得我

        .col-xs-4
          button.btn.btn-primary.btn-block.btn-flat(type='submit') 登入
</template>

<<script>
export default {
  data: function () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    login: function () {
    }
  }
}
</script>
