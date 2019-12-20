<template>
  <v-layout row wrap>
    <v-flex xs12 sm4>
      <v-chip color="red" text-color="white">테스트1</v-chip>
    </v-flex>
    <v-flex xs12 sm4>
      <v-chip color="orange">테스트2</v-chip>
    </v-flex>
    <v-flex xs12 sm4>
      <v-chip color="orange">테스트3</v-chip>
    </v-flex>
  </v-layout>
</template>

<script>
// import * as fs from "fs";

export default {
  name: "test",
  data: () => ({}),
  // mounted() {
  //   const p = this.$electron.remote.app.getPath("appData");
  //   console.log(p);
  // },
  // methods: {},
};
</script>
