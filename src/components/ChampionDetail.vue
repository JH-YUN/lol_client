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

      <v-card outlined>
        <v-card-title>룬</v-card-title>
        <!-- <v-btn @click="test()">test</v-btn> -->
        <v-btn v-for="(e, i) in detail.rune[this.selectedPosition].rune" :key="i" x-large>
          <v-img width="50" :src="runeImgPath+runeData[e.mainRune.substring(0,2)+'00'].slots[0].runes.find((obj)=>obj.id==e.mainRune).icon"></v-img>
          <v-img width="20" :src="runeImgPath+runeData[e.subRune].icon"></v-img>
          <span class="caption pt-2 pl-2">{{e.pick}}</span>
        </v-btn>
        <v-row>
          <v-col cols="auto">
            <v-img width="50" :src="runeImgPath+runeData[e.mainRune.substring(0,2)+'00'].slots[0].runes.find((obj)=>obj.id==e.mainRune).icon"></v-img>
            <v-img v-for="runeImgPath+runeData[e.mainRune.substring(0,2)+'00'].slots[1]"></v-img>
          </v-col>
          <v-col cols="auto">

          </v-col>
        </v-row>
      </v-card>

      <v-card outlined>
        <v-card-title>스펠 & 스킬</v-card-title>
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
    selectedPosition: null,
    championImgPath: path.join(__static, '/dragontail/9.24.2/img/champion/'),
    itemImgPath: path.join(__static, '/dragontail/9.24.2/img/item/'),
    runeImgPath: path.join(__static, '/dragontail/img/'),
  }),
  created() {
    this.getDetail();
    this.setPosition(this.detail.position[0]);
  },
  methods: {
    getDetail() {
      this.champion = this.$parent.champions[this.id];
      this.detail = JSON.parse(fs.readFileSync(path.join(__static, `/data/${this.id}_data.json`)), 'utf8');
      this.runeData = this.$parent.runeData;
    },
    setPosition(position) {
      this.selectedPosition = position;
    },
    test() {
      // console.log(this.runeImgPath+this.runeData[detail.rune[this.selectedPosition].rune.mainRune.substring(0,2)+'00'].slots[0].runes.find((obj)=>obj.id==e.mainRune).icon);
    },
  }
};
</script>
