<template>
<div>
  <h3>총게시글수 : {{pager.rowCount}}</h3>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">No.</th>
        <th class="text-left">순위</th>
        <th class="text-left">영화제목</th>
        <th class="text-left">집계일</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item of list" :key="item.seq">
        <td>{{ item.movieSeq }}</td>
        <td>{{ item.rank}}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.rankDate }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
  <div class="text-center" >
    <div style="margin: 0 auto; width: 500px; height: 100px">
      <span v-if ='existPrev' style="width: 50px; height: 50px; border: 1px solid black;margin-right: 5px">이전</span>
      <span v-for='i of pages' :key="i" style="width: 50px; height: 50px; border: 1px solid black;margin-right: 5px">{{i}}</span>
      <span v-if ='existNext' style="width: 50px; height: 50px; border: 1px solid black;margin-right: 5px">다음</span>
    </div>

    <!--<v-pagination v-model="page" :length="5" :total-visible="5"></v-pagination>-->
  </div>
</div>


</template>

<script>
  import { mapState } from "vuex";
  import axios from "axios";

  export default {
    data () {
      return {
        pageNumber: 0,
        existPrev : false,
        existNext : true,
        pages: [1,2,3,4,5],
        list: [],
        pager: {},
        totalCount: '',
      }
    },
    created() {
        axios
          .get(`${this.$store.state.search.context}/movies/${this.$store.state.search.searchWord}/${this.$store.state.search.pageNumber}`)
          .then(res=>{
            res.data.list.forEach(elem => {this.list.push(elem)})
            this.pager = res.data.pager
          })
          .catch(err=>{
            alert(`영화 통신 실패 ${err}`)
          })
    },
    computed: {
      ...mapState({

        count: state => state.crawling.count,
        bugsmusic: state => state.crawling.bugsmusic,
        navermovie: state => state.crawling.navermovie,


      })
    }
  };
</script>
