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
      <span v-if ='pager.existPrev' style="width: 50px; height: 50px; border: 1px solid black;margin-right: 5px">이전</span>
      <span @click="transferPage(i)" v-for='i of pages' :key="i" style="width: 50px; height: 50px; border: 1px solid black;margin-right: 5px">{{i}}</span>
      <span id="aa" v-if ='pager.existNext' style="width: 50px; height: 50px; border: 1px solid black;margin-right: 5px">다음</span>
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
        pages: [],
        list: [],
        pager: {},
        totalCount: '',
      }
    },
    created() {
      let json = paging(`${this.$store.state.search.context}/movies/null/0`)
      this.list = json.movies
      this.pages = json.pages
      this.pager = json.temp
    },
    computed: {
      ...mapState({
        count: state => state.crawling.count,
        bugsmusic: state => state.crawling.bugsmusic,
      })
    },
    methods: {
      transferPage(d) {
        alert(`이동 페이지 ${d-1}`)
        this.$store.dispatch('search/transferPage',{cate:'movies' ,
                                                                  searchWord:'null',
                                                                  pageNumber: d-1})
      }
    }
  }
function paging(d) {
  const movies = []
  const pages = []
  let temp = {}
  axios
          .get(d)
          .then(({data})=>{
            data.list.forEach(elem => {movies.push(elem)})
            let pager = data.pager
            alert('>>'+pager.rowCount)
            let i = pager.pageStart +1

            console.log(`페이지 끝: ${pager.pageEnd}`)
            for(; i <= pager.pageEnd + 1;i++){
              pages.push(i)
            }
            temp.rowCount = pager.rowCount
            temp.existPrev = pager.existPrev
            temp.existNext = pager.existNext
          })
          .catch(err=>{
            alert(`영화 통신 실패 ${err}`)
          })

  return {movies, pages, temp}
}
</script>
