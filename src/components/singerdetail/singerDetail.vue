<template>
    <transition name="slide">
        <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
    </transition>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import musicList from '../../components/music-list/music-list.vue'
import '../../api/mockServe/songList'
import axios from 'axios';
export default {
    props: [],
    components: {
        musicList
    },
    data() {

        return {
            show: true,
            songs: []
        }
    },
    methods: {
        _getDetail() {
            // if (!this.singer.id) {
            //   this.$router.push('/singer')
            //   return
            // }
            
            axios({
                method: 'get',
                url: '/api/songList',
                data:{name:this.title}
            }).then((res) => {
                if (res.status == 200) {
                    console.log(res);
                    this.songs = res.data.data
                    console.log(this.songs)
                }
            })
        }

        //   _normalizeSongs(list) {
        //     let ret = []
        //     list.forEach((item) => {
        //       let {musicData} = item
        //       if (musicData.songid && musicData.albummid) {
        //         ret.push(createSong(musicData))
        //       }
        //     })
        //     return ret
        //   }

    },
    computed: {
        title() {
            return this.singer.name
        },
        bgImage() {
            return this.singer.bgImg
        },
        ...mapGetters([
            'singer'
        ]),
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
        console.log(111111)
        console.log(this.title)
        console.log(this.singer);
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
  
<style scoped>

</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 1s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>