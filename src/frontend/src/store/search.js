import axios from 'axios';
import router from "@/router";

const state ={
    context : "http://localhost:5000/",
    soccers : [],
    movies : [],
    musics: [],
    pager: {}

}
const actions ={
    async find({commit},searchWord){
        alert('>>> '+searchWord)
        commit("TEST",searchWord)
        switch (searchWord) {
            case '영화': router.push("/Movie")
                break
            case '음악': router.push("/Music")
                break
            case '축구': router.push("/Soccer")
                break
        }


    },
    async movies({commit},searchWord,pageNumber){
        axios.get(`${state.context}/movies/${searchWord}/${pageNumber}`)
            .then(({data})=>{
                commit("MOVIE",data)
                router.push("/movie");
            })
            .catch(()=>{
                alert("영화 통신 실패")
            })
    }

}
const mutations ={
    MOVIE(state, data){
        alert("영화 뮤테이션에서 결과 수 : " + data.count)
        state.movies = []
        state.pager = data.pager;
        data.list.forEach(item => {
            state.movies.push({
                movieSeq: item.movieSeq,
                rank: item.rank,
                title: item.title,
                rankDate: item.rankDate
            });
        });
    },
    TEST(state, data){
        alert(`TEST ${data}`)
        state.pager = {}
    }
}
const getters ={}



export default {
    name:"search",
    namespaced: true,
    state,
    actions,
    mutations,
    getters

}