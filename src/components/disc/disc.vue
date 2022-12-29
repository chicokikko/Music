<template>
    <transition name="slide">
        <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
    </transition>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import RecoSong from '../../api/mockServe/recoSong'
import MusicList from '../../components/music-list/music-list.vue'
export default {
    props: [],
    components: {
        MusicList
    },
    data() {

        return {
            songs: [],
        }
    },
    methods: {
        getRecoSong() {
            axios({
                method: 'get',
                url: '/api/recoSong',
                data: { name: this.title }
            }).then((res) => {
                if (res.status == 200) {
                    this.songs = res.data.data
                }
            })
        },
        
    },
    computed: {
        title() {
            return this.disc.name
        },
        bgImage() {
            return this.disc.url
        },
        ...mapGetters([
            'disc'
        ])
    },
    watch: {

    },
    filters: {

    },
    beforeCreate() {

    },
    created() {
        this.getRecoSong()
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
  
<style scoped>

</style>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>