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

      <v-card outlined class="pa-4" key="rune">
        <button @click="test()">테스트 버튼</button>
        <v-card-title>룬</v-card-title>
        <v-btn v-for="(e, i) in detail.rune[this.selectedPosition].rune" :key="i" @click="selectRune(i)" x-large>
          <v-img width="50" :src="runeImgPath+perksData[e.mainRune].icon"></v-img>
          <v-img width="20" :src="runeImgPath+perksData[e.subRune].icon"></v-img>
          <span class="caption pt-2 pl-2">{{e.pick}}</span>
        </v-btn>
        <v-row v-if="selectedRune !== null">
          <!-- <v-col cols="auto" v-for="(e, i) in runeData[selectedRune.mainRune.substring(0,2)+'00'].slots" :key="i">
            <v-img v-for="(e1, i1) in e.runes" :key="i1" width="50" :src="runeImgPath+e1.icon"></v-img>
          </v-col> -->
          <v-col cols="auto" v-for="(perks, i) in selectedRune.detail" :key="'detail'+i">
            <v-card>
              <v-row class="pa-3">
                <v-col>
                  <v-img v-for="(perkId, i1) in getMainRunes(perks)" :key="i1" width="50" :src="runeImgPath+perksData[perkId].icon"></v-img>
                </v-col>
                <v-col>
                  <v-img v-for="(perkId, i1) in getSubRunes(perks)" :key="i1" width="50" :src="runeImgPath+perksData[perkId].icon"></v-img>
                  <v-img v-for="(perkId, i1) in getStatMods(perks)" :key="i1" width="50" :src="runeImgPath+perksData[perkId].icon"></v-img>
                </v-col>
              </v-row>
              <v-btn block depressed color="primary">
                룬 선택
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-card outlined key="skill">
        <v-card-title>스펠 & 스킬</v-card-title>
        <v-card-subtitle>소환사 주문</v-card-subtitle>
        <v-card-text>
          <div class="d-flex mb-6" style="width: fit-content">
            <v-img class="mr-2" width="50" :src="summonerImgPath+detail.spell[selectedPosition][0]+'.png'"></v-img>
            <v-img class="mr-2" width="50" :src="summonerImgPath+detail.spell[selectedPosition][1]+'.png'"></v-img>
          </div>
          <div class="d-flex" style="width: fit-content">
            <v-img class="mr-2" width="50" :src="summonerImgPath+detail.spell[selectedPosition][2]+'.png'"></v-img>
            <v-img class="mr-2" width="50" :src="summonerImgPath+detail.spell[selectedPosition][3]+'.png'"></v-img>
          </div>
        </v-card-text>
        <v-card-subtitle>첫 3레벨</v-card-subtitle>
        <v-card-text>
          <div v-for="(e, i) in detail.skill[this.selectedPosition].first3Level" :key="i" class="mb-6">
            <div class="d-flex" style="width: fit-content">
              <v-img class="mr-2" v-for="(skillNumber, orderIndex) in skillOrderChartoNumber(e.order)" width="50" :src="summonerImgPath+championDetail.spells[skillNumber].image.full">
                <div class="black-bg">{{e.order.charAt(orderIndex)}}</div>
              </v-img>
            </div>
            <h3><small>{{e.pick}}</small></h3>
          </div>
        </v-card-text>
      <v-card-subtitle>선마</v-card-subtitle>
      <v-card-text>
        <div v-for="(e, i) in detail.skill[this.selectedPosition].master" :key="i" class="mb-6">
            <div class="d-flex" style="width: fit-content">
              <v-img class="mr-2" v-for="(skillNumber, orderIndex) in skillOrderChartoNumber(e.order)" width="50" :src="summonerImgPath+championDetail.spells[skillNumber].image.full">
                <div class="black-bg">{{e.order.charAt(orderIndex)}}</div>
              </v-img>
            </div>
            <h3><small>{{e.pick}}</small></h3>
          </div>
      </v-card-text>
    </v-card>


      <v-card outlined key="item">
        <v-card-title>아이템</v-card-title>
        <v-card-subtitle>시작 아이템</v-card-subtitle>
        <v-card-text>
          <div v-for="items in detail.item[selectedPosition].start" key="startItem" class="mb-6">
            <div class="d-flex" style="width: fit-content">
              <v-img class="mr-2" v-for="item in items" :src="itemImgPath+item+'.png'"  width="50"></v-img>
            </div>
          </div>
        </v-card-text>
        <v-card-subtitle>아이템</v-card-subtitle>
        <v-card-text>
          <div v-for="items in detail.item[selectedPosition].main" key="mainItem" class="mb-6">
            <div class="d-flex" style="width: fit-content">
              <v-img class="mr-2" v-for="item in items" :src="itemImgPath+item+'.png'"  width="50"></v-img>
            </div>
          </div>
        </v-card-text>
        <v-card-subtitle>신발</v-card-subtitle>
        <v-card-text>
          <div class="mb-6">
            <div class="d-flex" style="width: fit-content">
              <v-img class="mr-2" v-for="(item, i) in detail.item[selectedPosition].shoes"  width="50" :src="itemImgPath+item+'.png'"></v-img>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-container>

  </div>
</template>


<script>
import fs from 'fs';
import path from 'path';
import https from 'https';

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
    selectedRune: null,
    championImgPath: path.join(__static, '/dragontail/9.24.2/img/champion/'),
    itemImgPath: path.join(__static, '/dragontail/9.24.2/img/item/'),
    runeImgPath: path.join(__static, '/dragontail/img/'),
    summonerImgPath: path.join(__static, '/dragontail-10.21.1/10.21.1/img/spell/'),
    championDetail: null,
  }),
  computed: {

  },
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
      this.summonerData = this.$parent.summonerData;
      this.championDetail = JSON.parse(fs.readFileSync(path.join(__static, `/dragontail-10.21.1/10.21.1/data/ko_KR/champion/${this.id}.json`)), 'utf8').data[this.id];
    },
    setPosition(position) {
      this.selectedPosition = position;
    },
    selectRune(index) {
      this.selectedRune = this.detail.rune[this.selectedPosition].rune[index];
    },
    getMainRunes: (runes) => {
      return runes.filter((e, i)=> i < 4)
    },
    getSubRunes: (runes) => {
      return runes.filter((e, i)=> (i > 3 && i < 6))
    },
    getStatMods: (runes) => {
      return runes.filter((e, i)=> (i > 5))
    },
    skillCharMapping: (char) => {
      let lowerChar = char.toLowerCase();
      if (lowerChar == 'q') {
        return 0;
      } else if (lowerChar == 'w') {
        return 1;
      } else if (lowerChar == 'e') {
        return 2;
      }
    },
    skillOrderChartoNumber(skillOrder) {
      let arr = [];
      arr[0] = this.skillCharMapping(skillOrder.charAt(0));
      arr[1] = this.skillCharMapping(skillOrder.charAt(1));
      arr[2] = this.skillCharMapping(skillOrder.charAt(2));
      return arr;
    },

    test() {
      const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      })
      axios.defaults.options = httpsAgent;
      axios.get('https://127.0.0.1:2999/swagger/v2/swagger.json')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
  }
};
</script>

<style>
  .gray-img {
    filter: grayscale(100%);
  }
  .black-bg {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    width: 20px;
    text-align: center;
  }
</style>
