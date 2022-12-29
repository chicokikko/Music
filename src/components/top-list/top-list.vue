<template>
    <transition name="slide">
        <music-list :rank="rank" :title="title" :bg-image="bgImage" :songs="songs"></music-list>
    </transition>
</template>
<script>
import MusicList from '../../components/music-list/music-list'
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
    props: [],
    components: {
        MusicList
    },
    data() {

        return {
            songs: [],
            rank:true
          
        }
    },
    methods: {
        getDetailList() {
            axios({
                method: 'get',
                url: '/api/detailList',
                data: { name: this.title }
            }).then((res) => {
                if (res.status == 200) {
                    console.log(res);
                    this.songs = res.data.data
                }
            })
        },
    },
    computed: {
        title() {
            console.log(this.topList,222)
            return this.topList.name
        },
        bgImage() {
            console.log(this.topList,333)
            return this.topList.url
        },
        ...mapGetters([
            'topList'
        ])
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
        this.getDetailList()
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
  
<style  scoped>

</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>