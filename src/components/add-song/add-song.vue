<template>
    <transition name="slide">
        <div class="add-song" v-show="showFlag" @click.stop>
            <div class="header">
                <h1 class="title">添加歌曲到列表</h1>
                <div class="close" @click="hide">
                    <i class="icon-close"></i>
                </div>
            </div>
            <div class="search-box-wrapper">
                <search-box @query="search" placeholder="搜索歌曲"></search-box>
            </div>
            <div class="shortcut" v-show="!query">
                <switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches>
            </div>
            <div class="list-wrapper">
                <scroll ref="songList" class="list-scroll" v-if="currentIndex === 0" :data="playHistory">
                    <div class="list-inner">
                        <song-list :songs="playHistory" @select="selectSong"></song-list>
                    </div>
                </scroll>
            </div>
            <div class="search-result" v-show="query">
                <suggest :query="query" :showSinger="showSinger" @select="selectSuggest"></suggest>
            </div>
            <top-tip ref="topTip">
                <div class="tip-title">
                    <i class="icon-ok"></i>
                    <span class="text">一首歌曲已经添加到播放列表</span>
                </div>
            </top-tip>
        </div>
    </transition>
</template>
<script>
import searchBox from '../../base/search-box/search-box.vue';
import Suggest from '../../components/suggest/suggest.vue'
import Switches from '../../base/switches/switches.vue'
import Scroll from '../../base/scroll/scroll.vue'
import { mapGetters, mapActions } from 'vuex'
import SongList from '../../base/songList/songList.vue'
import '../../api/mockServe/songList'
import axios from 'axios';
import TopTip from '../../base/top-tip/top-tip.vue'
export default {
    props: {},
    components: {
        searchBox,
        Suggest,
        Switches,
        Scroll,
        TopTip,
        SongList,


    },
    data() {

        return {
            showFlag: false,
            query: '',
            showSinger: false,
            currentIndex: 0,
            songs: [],
            switches: [
                { name: '最近播放' },
                { name: '搜索历史' }
            ]
        }
    },
    methods: {
        show() {
            this.showFlag = true
        },
        hide() {
            this.showFlag = false
        },
        _getDetail() {
            axios({
                method: 'get',
                url: '/api/songList',
            }).then((res) => {
                if (res.status == 200) {
                    this.songs = res.data.data
                }
            })
        },
        selectSong(songs, index) {
            if (index !== 0) {
                this.insertSong(songs)
                this.$refs.topTip.show()
            }
        },
        search(query) {
            this.query = query
        },
        selectSuggest() {

        },
        switchItem(index) {
            this.currentIndex = index
        },
        showTip(){
            this.$refs.topTip.show()
        },
        ...mapActions([
            'insertSong'
        ])
    },
    computed: {
        ...mapGetters([
            'playHistory'
        ])
    },
    watch: {

    },
    filters: {

    },
    beforeCreate() {

    },
    created() {
        this._getDetail()
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

  .add-song
    position: fixed
    top: 0
    bottom: 0
    width: 100%
    z-index: 200
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
    .header
      position: relative
      height: 44px
      text-align: center
      .title
        line-height: 44px
        font-size: $font-size-large
        color: $color-text
      .close
        position: absolute
        top: 0
        right: 8px
        .icon-close
          display: block
          padding: 12px
          font-size: 20px
          color: $color-theme

    .search-box-wrapper
      margin: 20px
    .shortcut
      position: fixed !important
      left: 50px !important
      top:115px !important
      .list-wrapper
        position: absolute
        top: 170px
        bottom: 0
        width: 100%
        .list-scroll
          height: 100%
          overflow: hidden
          .list-inner
            padding: 30px 30px
    .search-result
      position: fixed
      top: 124px
      bottom: 0
      width: 100%
    .tip-title
      text-align: center
      padding: 18px 0
      font-size: 0
      .icon-ok
        font-size: $font-size-medium
        color: $color-theme
        margin-right: 4px
      .text
        font-size: $font-size-medium
        color: $color-text
</style>