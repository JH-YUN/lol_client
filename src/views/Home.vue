<template>
  <div class="home">
    <h1>홈</h1>
    <h1>{{test}}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/test">Go to Test</router-link>
  </div>
</template>

<script>
const app = require('electron').remote.app;
export default {
  name: 'home',
  components: {
  },
  data: () => ({
    test: '',
  }),
  mounted() {
    console.log('hihi');
    this.test = app.getPath('appData');
    // const p = this.$electron.remote.app.getPath("appData");
    // const p =app.getPath("appData");
    // console.log(app);
  }
};
</script>
