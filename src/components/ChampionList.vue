<template>
<div class="championList">
  <h1>테스트</h1>
  <h1>{{imgPath}}</h1>
  <v-list-item v-for="row in championList" :key="row.key">
    <img :src="imgPath+row.image.full">
    {{row.name}}
  </v-list-item>
</div>
</template>

<script>
import fs from 'fs';
import path from 'path';

export default {
  name: 'championList',
  data: () => ({
    championList: [],
    imgPath: path.join(__static, '/dragontail/9.24.2/img/champion/'),
  }),
  mounted() {
    this.get_champion_list();
  },
  methods: {
    get_champion_list() {
      const championList = JSON.parse(fs.readFileSync(path.join(__static, '/dragontail/9.24.2/data/ko_kr/champion.json')), 'utf8').data;
      this.championList = championList;
      console.log(this.imgPath);
    },
  },
};
</script>
