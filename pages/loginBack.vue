<template>
  <div>
    <h1>로그인</h1>
    <v-form>
      <div label="이메일"
                    @keypress="enterCheck"
                    v-model="formData.email"
      ></div>
      <div label="비밀번호"
                    v-model="formData.password"
                    @keypress="enterCheck"
                    type="password"></div>
      <button @click="login" class="primary">로그인</button>
    </v-form>
  </div>
</template>

<script>
  export default {
    layout: 'default',
    name: "login.vue",
    middleware: 'auth',
    auth: 'guest',
    data: () => ({
      formData: {
        email: '',
        password: '',
      }
    }),
    methods: {
      async login() {
        if(this.formData.email === '' || this.formData.password === '') return;
        try{
          await this.$auth.loginWith('local', {data: this.formData});
          this.$snackbar.show('환영합니다, '+this.$auth.user.nickname+'님!');
          this.$router.back();
        }
        catch (e) {
          this.$snackbar.show(e.response.data);
        }
      },
      enterCheck(e) {
        if(e.keyCode === 13) this.login();
      },
    },
  }
</script>

<style scoped>
</style>