<template>
    <div class="rank" ref="rank">
        <scroll :data="topList" class="toplist" ref="toplist" >
            <ul>
                <li class="item" v-for="(item, i) in rankSong" :key="i" @click="selectItem(item)">
                    <div class="icon">
                        <img width="100" height="100" :src="item.url" />
                    </div>
                    <ul class="songlist">
                        <li class="song" v-for="(items, index) in 3" :key="items">
                            <span>{{ index + 1 }}</span>
                            <span> {{ item.list[index].name }}&#8194;-&#8194; {{ item.list[index].singer }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="loading-container" v-show="!topList.length">
                <loading></loading>
            </div>
        </scroll>
    <router-view></router-view>

    </div>
</template>
<script>
import axios from 'axios';
import Rank from '../../api/mockServe/rank'
import Scroll from '../../base/scroll/scroll.vue'
import Loading from '../loading2.vue'
import {playlistMixin} from '../../common/js/mixin'
import { mapMutations } from 'vuex';

export default {
    mixins: [playlistMixin],
    props: [],
    components: {
        Scroll,
        Loading
        

    },
    data() {

        return {
            topList: [],
            rankSong: {}
        }
    },
    methods: {
        selectItem(item){
            console.log(item);
            this.setTopList(item)
            this.$router.push({
                path:`/rank/${item.name}`
            })
            // this.setTopList(item)
        },
        handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''

        this.$refs.rank.style.bottom = bottom
        this.$refs.toplist.refresh()
      },
        getRankList() {
            axios({
                method: 'get',
                url: '/api/rankList',
                data: {}
            }).then((res) => {
                if (res.status == 200) {
                    console.log(res);
                    this.rankSong = res.data.data
                }
            })
        },
        getTopList() {
            axios({
                method: 'get',
                url: '/api/rank',
                //data: { name: this.title }
            }).then((res) => {
                if (res.status == 200) {
                    //console.log(res);
                    this.topList = res.data.data
                }
            })
        },
        ...mapMutations({
            setTopList:'SET_TOP_LIST'
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
        this.getRankList()
        this.getTopList()
    },
    beforeMount() {

    },
    mounted() {

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
  
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin"
.rank
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .toplist
      height: 100%
      overflow: hidden
      .item
        display: flex
        margin: 0 20px
        padding-top: 20px
        height: 100px
        &:last-child
          padding-bottom: 20px
        .icon
          flex: 0 0 100px
          width: 100px
          height: 100px
        .songlist
          flex: 1
          display: flex
          flex-direction: column
          justify-content: center
          padding: 0 20px
          height: 100px
          overflow: hidden
          background: $color-highlight-background
          color: $color-text-d
          font-size: $font-size-small
          .song
            no-wrap()
            line-height: 26px
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
<style scoped>

</style>