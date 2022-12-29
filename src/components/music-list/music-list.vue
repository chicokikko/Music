<template>
    <div class="musicList">
        <div class="bgImage" ref="bgImage" :style="bgStyle">
            <div class="back">
                <i class="icon-back" @click="back"></i>
            </div>
            <h1 class="title" v-html="title"></h1>
            <div class="play-wrapper">
                <div ref="playBtn" class="play" @click="random">
                    <p class="text"><i class="icon-play"></i>&#160;随机播放</p>
                </div>
            </div>
            <div class="filter" ref="filter"></div>
        </div>
        <div class="bg-layer" ref="layer"></div>
        <scroll :data="songs"  class="list" ref="list">
            <div class="song-list-wrapper" >
                <songList :songs="songs" @select="selectItem" :rank="rank"></songList>
            </div>
            <!-- <div class="loading-container" v-show="!songs.length">
                <loading></loading>
            </div> -->
        </scroll>
    </div>
</template>
<script>
import Loading from '../loading2.vue'
import { playlistMixin } from '../../common/js/mixin'
import Scroll from '../../base/scroll/scroll.vue'
import SongList from '../../base/songList/songList.vue'
import { mapActions } from 'vuex';
import axios from 'axios';
export default {
    mixins: [playlistMixin],
    props: {
        bgImage: {
            type: String,
            default: ''
        },
        songs: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: ''
        },
          rank: {
            type: Boolean,
            default: false
          }
    },
    components: {
        Scroll,
        Loading,
        SongList

        
    },
    data() {

        return {
            songList: [],
            // id:''
        }
    },
    methods: {
        back(){
            window.history.back();
        },
        handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.list.$el.style.bottom = bottom
        this.$refs.list.refresh()
      },
        selectItem(item, index) {
            this.selectPlay({
                list: this.songs,
                index,
            })
        },
        random() {
            this.randomPlay({
                list: this.songs
            })
        },

        ...mapActions([
            'selectPlay',
            'randomPlay'
        ]),



    },
    computed: {
        bgStyle() {
            return `background-image:url(${this.bgImage})`
        }
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

    },
    beforeUpdate() {

    },
    updated() {
        console.log(this.songs);
    },
    beforeDestroy() {

    },
    destroy() {

    }
};
</script>
  
<style scoped>
.musicList {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #130c0e;
    overflow: hidden;
}

.back {
    padding-top: 22px;
    margin-left: 14px;
    font-size: 20px;
    float: left;
}

.bgImage {
    height: 300px;
    position: relative;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.text {
    position: absolute;
    top: 250px;
    left: 130px;
    border: 1px solid;
    padding: 5px 15px 5px 15px;
    border-radius: 10px;
}

.title {
    font-size: 20px;
    position: absolute;
    top: 22px;
    left: 45%;
}
.song-list-wrapper{
    overflow: scroll;
}
</style>
