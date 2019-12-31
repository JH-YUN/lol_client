<template>
<!-- <div class="chmpion"> -->
  <ChampionList/>
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

  },
  methods: {

  },
};
</script>
