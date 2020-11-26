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
    perksData: {},
    summonerData: {},
  }),
  created() {
    this.champions = JSON.parse(fs.readFileSync(path.join(__static, '/championFull.json')), 'utf8').data;
    const perksStyle = JSON.parse(fs.readFileSync(path.join(__static, `perkstyles.json`)), 'utf8').styles;
    const perks = JSON.parse(fs.readFileSync(path.join(__static, `perks.json`)), 'utf8');
    const summoner = JSON.parse(fs.readFileSync(path.join(__static, `summoner.json`)), 'utf8');
    let perksIdList = [];

    perksStyle.forEach((style) => {
      let obj = new Object();
      obj.id = style.id;
      obj.name = style.name;
      obj.icon = style.iconPath.replace('/lol-game-data/assets/v1/', '');
      obj.slots = style.slots;
      style.slots.forEach((slot)=> {
        perksIdList = perksIdList.concat(slot.perks);
      });
      this.perksData[obj.id] = obj;
    })
    perksIdList = Array.from(new Set(perksIdList));
    perks.forEach((perk) => {
      if(perksIdList.indexOf(perk.id) >= 0) {
        let obj = new Object();
        obj.id = perk.id;
        obj.name = perk.name;
        obj.icon = perk.iconPath.replace('/lol-game-data/assets/v1/', '');
        this.perksData[obj.id] = obj;
      }
    })
    this.summonerData = summoner;
  },
  methods: {

  },
};
</script>
