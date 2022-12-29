<template>
      <div class="recommend">
            <div class="recommend-content">
                  <div class="slider-wrapper"></div>
                  <div class="recommend-list">
                        <!-- 轮播图 -->
                        <el-carousel class="container" indicator-position="outside">
                              <el-carousel-item class="carousel" v-for="(item, i) in image" :key="i">
                                    <div class="h3"> <el-image fit="fill" class="image" :src="item.url"></el-image>
                                    </div>
                              </el-carousel-item>
                        </el-carousel>
                        <h1 class="list-title">热门歌单推荐</h1>
                        <ul class="recommendSongList">
                              <li @click="selectItem(item)" class="detail" v-for="(item, img) in detail" :key="img">
                                    <img class="smallImg" :src="item.url">
                                    <div class="info">
                                          <p class="title">{{ item.name }}</p>
                                          <p class="titleInfo">{{ item.info }}</p>
                                    </div>
                              </li>
                        </ul>
                  </div>
            </div>
            <router-view></router-view>
      </div>
</template>
<script>
import axios from "axios"
import '../../api/mockServe/recommendSong'
import { mapMutations } from "vuex";

export default {
      props: [],
      components: {
            
      },
      data() {

            return {
                  image: [],
                  detail:[]
            }
      },
      methods: {
            getRecommend() {
                  axios({
                        method: 'get',
                        url: "/api/recommend"
                  }).then((res) => {
                        if (res.status == 200) {
                              this.image = res.data.data
                        }
                  })
            },
            getRecommendLish() {
                  axios({
                        method: 'get',
                        url: "/api/recommendList"
                  }).then((res) => {
                        if (res.status == 200) {
                               console.log(res);
                              this.detail = res.data.data
                        }
                  })
            },
            selectItem(item){
                  this.$router.push({
                        path:`/recommend/${item.dissid}`
                  })
                  this.setDisc(item)
            },
            ...mapMutations({
                  setDisc:'SET_DISC'
            })
      },
      computed: {

      },
      watch: {

      },
      filters: {

      },
      beforeCreate() {

      },
      created() {

      },
      beforeMount() {

      },
      mounted() {
            this.getRecommend(),
                  this.getRecommendLish()
      },
      beforeUpdate() {

      },
      updated() {

      },
      beforeDestroy() {

      },
      destroy() {

      }
};
</script>
  
<style lang='stylus' scoped rel="stylesheet/stylus">
@import "../../common/stylus/variable"
.recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list        
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme

        .carousel:nth-child(2n) {
            background-color: #99a9bf
          }
          
        .carousel:nth-child(2n+1) {
            background-color: #d3dce6
          }
        .h3 {
            color: #475669
            font-size: 18px
            opacity: 0.75
            margin: 0
              .image{
                  width:100%
              }
          }
</style>
<style>
.recommendSongList {
      width: 375px;
      padding-left: 25px;
      padding-right: 10px;
      height:300px;
      overflow: scroll;
}

.detail {
      width: 355px;
      height: 60px;
      margin-bottom: 20px;
      display: flex
}

.smallImg {
      width: 60px;
      height: 60px;
      margin-right: 20px
}

.title {
      color: white;
      font-size: 16px;
      margin-bottom: 10px;
}

.titleInfo {
      font-size: 12px;
      color: gray;
}
</style>