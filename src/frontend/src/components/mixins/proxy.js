import axios from "axios";

export const proxy={
    methods: {
        tester(d){
            alert(d)
        },
        paging(url){
            const movies = []
            const pages = []
            let temp = {}
            axios
                .get(url)
                .then(({data})=>{
                    data.list.forEach(elem => {movies.push(elem)})
                    let pager = data.pager
                    let i = pager.pageStart
                    for(; i <= pager.pageEnd;i++){
                        pages.push(i+1)
                    }
                    temp.rowCount = pager.rowCount
                    temp.existPrev = pager.existPrev
                    temp.existNext = pager.existNext
                    temp.nextBlock = pager.nextBlock
                    temp.prevBlock = pager.prevBlock
                    temp.nowPage = pager.nowPage
                })
                .catch(err=>{
                    alert(`통신 실패 ${err}`)
                })

            return {movies, pages, temp}
        }
    }
}