<template>
    <div class="search">
        <div class="search-box-wrapper">
            <search-box ref="searchBox" @query="onQueryChange"></search-box>
        </div>
        <div class="shortcut-wrapper" v-show="!query">
            <div class="shortcut">
                <div class="hot-key">
                    <h1 class="title">热门搜索</h1>
                    <ul>
                        <li class="item" v-for="item in hotKey" @click="addQuery(item.k)">
                        <span>{{item.k}}</span>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="search-result" v-show="query">
            <suggest :query="query"></suggest>
        </div>
        <router-view></router-view>
    </div>
  </template>
  <script>
  import SearchBox from '../../base/search-box/search-box.vue'
  import axios from 'axios';
  import Suggest from '../../components/suggest/suggest.vue'
  import Hotsearch from '../../api/mockServe/hot-search'
     export default{
          props:[],
          components:{
            SearchBox,
            Suggest
          },
          data() {
              
              return{
                  hotKey:[],
                  query:''
              }
          },
          methods: {
              getHotKey(){
                axios({
                    method:'get',
                    url:'/api/hotSearch'
                }).then((res)=>{
                    if(res.status == 200){
                        console.log(res);
                        this.hotKey = res.data.data.slice(0,10)
                    }
                })
              },
              addQuery(query){
                this.$refs.searchBox.setQuery(query)
              },
              onQueryChange(query){
                this.query = query
              } 
          },
          computed:{
              
          },
          watch:{
              
          },
          filters:{
              
          },
          beforeCreate() {
             
          },
          created() {
              
          },
          beforeMount() {
              
          },
          mounted() {
             this.getHotKey()
          },
          beforeUpdate() {
             
          },
          updated() {
             
          },
          beforeDestroy(){
              
          },
          destroy(){
              
          }
      };
  </script>
  
<style scoped>
.shortcut-wrapper>.shortcut{
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 178px;
    left: 20px;
}
</style>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin"


  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
      .shortcut
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 10px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear
              extend-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-d
    .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0
</style>