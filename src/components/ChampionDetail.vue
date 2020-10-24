<template>
  <div class="ChampionDetail">
    <v-container>
      <v-card outlined>
        <v-container>
          <v-row>
            <v-col cols="auto">
              <v-img width="150" :src="championImgPath+champion.image.full"></v-img>
            </v-col>
            <v-col cols="auto">
              <v-card-title>{{champion.name}}</v-card-title>
              <v-card-actions>
                <v-btn :color="e == selectedPosition ? 'secondary' : ''" :value="e" @click="setPosition(e)" v-for="(e,i) in detail.position" :key="i">{{e}}</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-card outlined class="pa-4">
        <v-card-title>룬</v-card-title>
        <!-- <v-btn @click="test()">test</v-btn> -->
        <v-btn v-for="(e, i) in detail.rune[this.selectedPosition].rune" :key="i" @click="selectRune(i)" x-large>
          <v-img width="50" :src="runeImgPath+perksData[e.mainRune].icon"></v-img>
          <v-img width="20" :src="runeImgPath+perksData[e.subRune].icon"></v-img>
          <span class="caption pt-2 pl-2">{{e.pick}}</span>
        </v-btn>
        <!-- <v-row v-if="selectedRune !== null">
          <v-col cols="auto" v-for="(e, i) in runeData[selectedRune.mainRune.substring(0,2)+'00'].slots" :key="i">
            <v-img v-for="(e1, i1) in e.runes" :key="i1" width="50" :src="runeImgPath+e1.icon"></v-img>
          </v-col>
        </v-row> -->
        <v-row v-for="(selRuneEl, selRuneIndex) in selectedRune.detail" :key="'rune'+selRuneIndex" justify="center" style="width: 700px">
          <v-col class="mr-4">
            <v-row align="center" justify="center" v-for="(e, i) in perksData[selectedRune.mainRune.substring(0,2)+'00'].slots" :key="i">
              <v-col v-if="i==0" cols="4">
                <v-img width="90" :src="runeImgPath+perksData[e.mainRune].icon"></v-img>
              </v-col>
              <v-col v-else v-for="(e1, i1) in e.runes" :key="i1">
                <v-img :class="[selectedRune.detail[selRuneIndex].indexOf(String(e1.id)) < 0 ? 'gray-img' : '']" width="50" :src="runeImgPath+e1.icon"></v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col align-self="end">
            <v-row justify="center" v-for="(e, i) in perksData[selectedRune.subRune.substring(0,2)+'00'].slots" :key="i">
              <v-col v-for="(e1, i1) in e.runes" :key="i1">
                <v-img :class="[selectedRune.detail[selRuneIndex].indexOf(String(e1.id)) < 0 ? 'gray-img' : '']" v-if="i > 0" width="50" :src="runeImgPath+e1.icon"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>

      <v-card outlined>
        <v-card-title>스펠 & 스킬</v-card-title>
        <v-card-subtitle>소환사 주문</v-card-subtitle>
        <v-card-text>
          <v-list-item v-for="(e, i) in detail.skill[this.selectedPosition].first3Level" :key="i" two-line>
            <v-list-item-content>
              <v-list-item-title>
                {{e.order}}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{e.pick}}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>

        <v-card-subtitle>첫 3레벨</v-card-subtitle>
        <v-card-text>
          <v-list-item v-for="(e, i) in detail.skill[this.selectedPosition].first3Level" :key="i" two-line>
            <v-list-item-content>
              <v-list-item-title>
                {{e.order}}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{e.pick}}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      <v-card-subtitle>선마</v-card-subtitle>
      <v-card-text>
      <v-list-item v-for="(e, i) in detail.skill[this.selectedPosition].master" :key="i" two-line>
            <v-list-item-content>
              <v-list-item-title>
                {{e.order}}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{e.pick}}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </v-card>


      <v-card outlined>
        <v-card-title>아이템</v-card-title>
      </v-card>

    </v-container>

  </div>
</template>


<script>
import fs from 'fs';
import path from 'path';

export default {
  name: 'ChampionDetail',
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    detail: null,
    champion: null,
    runeData: null,
    perksData: null,
    selectedPosition: null,
    championImgPath: path.join(__static, '/dragontail/9.24.2/img/champion/'),
    itemImgPath: path.join(__static, '/dragontail/9.24.2/img/item/'),
    runeImgPath: path.join(__static, '/dragontail/img/'),
    selectedRune: null,
  }),
  created() {
    this.getDetail();
    this.setPosition(this.detail.position[0]);
    this.selectRune(0);
  },
  methods: {
    getDetail() {
      this.champion = this.$parent.champions[this.id];
      this.detail = JSON.parse(fs.readFileSync(path.join(__static, `/data/${this.id}_data.json`)), 'utf8');
      this.runeData = this.$parent.runeData;
      this.perksData = this.$parent.perksData;
      // console.log(this.detail);
    },
    setPosition(position) {
      this.selectedPosition = position;
    },
    selectRune(index) {
      this.selectedRune = this.detail.rune[this.selectedPosition].rune[index];
    },
    test() {
      // console.log(this.runeImgPath+this.runeData[detail.rune[this.selectedPosition].rune.mainRune.substring(0,2)+'00'].slots[0].runes.find((obj)=>obj.id==e.mainRune).icon);
    },
  }
};
</script>

<style>
  .gray-img {
    filter: grayscale(100%);
  }
</style>
