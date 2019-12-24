<template>
<div class="championList">
  <h1>테스트</h1>
</div>
</template>

<script>
// import * as fs from 'fs';

export default {
  name: 'championList',
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
