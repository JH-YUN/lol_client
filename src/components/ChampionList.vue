<template>
<div class="championList">
  <v-container>
    <v-row
      align="start"
      justify="start"
      class="ma-2"
    >
      <v-col cols="4" offset="7" justify-self="end" class="mr-auto">
        <v-text-field autofocus clearable label="search" v-model="keyword"> </v-text-field>
      </v-col>

      <v-col
        v-for="row in filteredList" :key="row.key"
        cols="auto"
      >
      <router-link :to="'/champion/detail/'+row.id">
        <v-card width="130">
          <v-img width="130" align="center" :src="imgPath+row.image.full"></v-img>
          <!-- <img :src="'data:image/png;base64, '+row.image.base64"> -->
          <v-card-title class="subtitle-1 text-center">{{row.name}}</v-card-title>
        </v-card>
      </router-link>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import fs from 'fs';
import path from 'path';

export default {
  name: 'list',
  data: () => ({
    championList: null,
    filteredList: null,
    imgPath: path.join(__static, '/img/champion/'),
    keyword: '',
  }),
  watch: {
    keyword() {
      this.filteredList = this.championList.filter((e) => {
        return (e.name.includes(this.keyword));
      });
    },
  },
  created() {
    this.get_champion_list();
  },
  methods: {
    get_champion_list() {
      this.championList = Object.values(this.$parent.champions).sort((a, b) => (a.name < b.name ? -1 : 1));
      this.filteredList = this.championList;
    },
  },
};
</script>
