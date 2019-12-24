<template>
<!-- <div class="chmpion"> -->
  <championList/>
<!-- </div> -->
</template>

<script>
import ChampionList from '@/components/ChampionList.vue';
import ChampionDetail from '@/components/ChampionDetail.vue';

export default {
  name: 'champion',
  components: {
    ChampionList,
    ChampionDetail,
  },
  data: () => ({
    championList: [],
  }),
  mounted() {
    this.get_champion_list();
    // eslint-disable-next-line no-console
    console.log('hihi');
  },
  methods: {
    get_champion_list() {
      // eslint-disable-next-line no-console
      console.log(this.$electron.remote.app.getPath('appData'));
    },
  },
};
</script>
