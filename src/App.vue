<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn>
        <span class="mr-2">Latest Release</span>
        <router-link to="/test">Go to Test</router-link>
        <router-link to="/home">Go to Test</router-link>
      </v-btn>

    </v-app-bar>
      <Home />
    <v-content>
      <HelloWorld />
    </v-content>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
// import Test from './views/Test.vue';


export default {
  name: "App",

  components: {
    HelloWorld,
    Home,
    // Test,
  },

  data: () => ({
    //
  }),
  mounted() {
    // const p = this.$electron.remote.app.getPath("appData");
    // const p =app.getPath("appData");
    // console.log(app);
  }
};
</script>
