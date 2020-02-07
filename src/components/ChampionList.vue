<template>
<div class="championList">
  <h1>테스트</h1>
  <h1>{{imgPath}}</h1>
  <v-container>
    <v-row
      align="start"
      justify="start"
      class="ma-2"
    >
      <v-col cols="4" offset="7" justify-self="end" class="mr-auto">
        <v-text-field v-model.lazy="searchKeyword" autofocus clearable label="search"> </v-text-field>
      </v-col>

      <v-col
        v-for="row in filteredChampionList" :key="row.key"
        cols="auto"
      >
        <v-card width="130">
          <v-img width="130" align="center" :src="imgPath+row.image.full"></v-img>
          <!-- <img :src="'data:image/png;base64, '+row.image.base64"> -->
          <v-card-title class="subtitle-1 text-center">{{row.name}}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import fs from 'fs';
import path from 'path';

export default {
  name: 'championList',
  data: () => ({
    championList: [],
    filteredChampionList: [],
    imgPath: path.join(__static, '/dragontail/9.24.2/img/champion/'),
    searchKeyword: '',
  }),
  watch: {
    searchKeyword: function() {
      this.searchChampion(this.searchKeyword);
    }
  },
  mounted() {
    this.get_champion_list();
    // this.img_to_base64();

  },
  methods: {
    get_champion_list() {
      const championList = JSON.parse(fs.readFileSync(path.join(__static, '/dragontail/9.24.2/data/ko_kr/champion.json')), 'utf8').data;
      this.championList = Object.values(championList).sort(function(a, b) {
        return a.name < b.name ? -1 : 1;
      });
      this.filteredChampionList = this.championList;

    },
    searchChampion(keyword) {
      this.filteredChampionList = this.championList.filter(function(el) {
        if(el.name.includes(keyword)) {
          return true;
        }
        return false;
      });
    },
    img_to_base64() {
      for (const champion of Object.keys(this.championList)) {
        this.championList[champion].image.base64 = fs.readFileSync(path.join(this.imgPath, this.championList[champion].image.full)).toString('base64');
      }
    },
  },
};
</script>
