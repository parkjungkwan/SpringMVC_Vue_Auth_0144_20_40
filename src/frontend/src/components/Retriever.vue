<template>
<div>
  <h3>검색결과 : {{count}}</h3>
  <div class="text-center">
    <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
  </div>
</div>


</template>

<script>
  import { mapState } from "vuex";

  export default {
    data() {
      return {
        page: 1
      };
    },
    computed: {
      ...mapState({
        bugsmusic: state => state.crawling.bugsmusic,
        count: state => state.crawling.count
      })
    }
  };
</script>
