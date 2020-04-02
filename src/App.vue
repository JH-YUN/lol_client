<script src="http://localhost:8098"></script>

<template>
  <v-app>
    <v-app-bar app color="blue lighten-1" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img alt="Logo" class="shrink mr-2" contain src="@/assets/lol-icon-96.png" width="60" />
        </router-link>
      </div>

      <v-spacer></v-spacer>
      <router-link to="/champion/list">
        <v-btn text>
          <span class="mr-2">챔피언 목록</span>
        </v-btn>
      </router-link>
      <v-btn>
        <v-icon>mdi-settings</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>

export default {
  name: "App",

  components: {},

  data: () => ({

  }),
  mounted() {

  },
  methods: {

  },
};
</script>
