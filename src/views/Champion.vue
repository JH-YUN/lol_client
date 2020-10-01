<template>
<!-- <div class="chmpion"> -->

  <!-- <v-content> -->
    <router-view></router-view>
    <!-- <ChampionList v-if="selectedChampion === null" champion-list=""/> -->
    <!-- <ChampionDetail v-else champion-id="selectedChampion"/> -->
  <!-- </v-content> -->
<!-- </div> -->
</template>

<script>
import fs from 'fs';
import path from 'path';

export default {
  name: 'champion',
  data: () => ({
    champions: null,
    selectedChampion: null,
    runeData: {},
  }),
  created() {
    this.champions = JSON.parse(fs.readFileSync(path.join(__static, '/dragontail/9.24.2/data/ko_kr/champion.json')), 'utf8').data;
    const runeArr = JSON.parse(fs.readFileSync(path.join(__static, `dragontail/9.24.2/data/ko_KR/runesReforged.json`)), 'utf8');

    runeArr.forEach((e) => {
      this.runeData[e.id] = e;
    });
  },
  methods: {

  },
};
</script>
