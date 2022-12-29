<template>
    <div class="suggest">
        <ul class="suggest-list">
            <li @click="selectItem(item)" class="suggest-item" v-for="(item) in result">
                <div class="icon">
                    <i :class="getIconCls(item)"></i>
                </div>
                <div class="name">
                    <p class="text" v-html="getDisplayName(item)"></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
import Suggest from '../../api/mockServe/suggest'
const TYPE_SINGER = 'singer'
import { mapMutations } from 'vuex';
export default {
    props: {
        query: {
            type: String,
            default: ''
        }
    },
    components: {

    },
    data() {

        return {
            result: []
        }
    },
    methods: {
        selectItem(item) {
            console.log(item);
            if (item.type === TYPE_SINGER) {
                const singer = item.name
                console.log(singer);
                this.$router.push({
                    path: `/search/${singer}`
                })
                this.setSinger(item)
            }
        },
        search() {
            if (!this.query) {
                return
            }
            axios({
                method: 'get',
                url: '/api/suggest',
                data: { name: this.query }
            }).then((res) => {
                if (res.status == 200) {
                    console.log(res);
                    this.result = res.data.data
                }
            })
        },
        getIconCls(item) {
            if (item.type === TYPE_SINGER) {
                return 'icon-mine'
            } else {
                return 'icon-music'
            }
        },
        getDisplayName(item) {
            if (item.type == TYPE_SINGER) {
                console.log(11);
                return `${item.keywords}-${item.song}`
            } else {
                console.log(222);
                return `${item.singer}-${item.keywords}`
            }
        },
        ...mapMutations({
            setSinger: 'SET_SINGER'
        }),
        // ...mapActions([
        //     'insertSong'
        // ])

    },
    computed: {

    },
    watch: {
        query() {
            this.search()
        }
    },
    filters: {

    },
    beforeCreate() {

    },
    created() {
        this.search()
    },
    beforeMount() {

    },
    mounted() {
        console.log(this.query);
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

  .suggest
    height: 100%
    overflow: hidden
    .suggest-list
      padding: 0 30px
      .suggest-item
        display: flex
        align-items: center
        padding-bottom: 20px
      .icon
        flex: 0 0 30px
        width: 30px
        [class^="icon-"]
          font-size: 14px
          color: $color-text-d
      .name
        flex: 1
        font-size: $font-size-medium
        color: $color-text-d
        overflow: hidden
        .text
          no-wrap()
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>