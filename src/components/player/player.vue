<template>
    <div class="player" v-show="playlist.length > 0">
        <transition name="normal" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
            <div class="normal-player" v-show="fullScreen">
                <div class="background">
                    <img width="100%" height="100%" :src="currentSong.image">
                </div>
                <div class="top">
                    <div class="back" @click="back">
                        <i class="icon-back"></i>
                    </div>
                    <h1 class="title" v-html="currentSong.name"></h1>
                    <h2 class="subtitle" v-html="currentSong.singer"></h2>
                </div>
                <div class="middle">
                    <div class="middle-l">
                        <div class="cd-wrapper" ref="cdWrapper">
                            <div class="cd" :class="cdCls">
                                <img class="image" :src="currentSong.image">
                            </div>
                        </div>
                        <div class="playing-lyric-wrapper">
                            <div class="playing-lyric">{{ currentSong.lyric }}</div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="progress-wrapper">
                        <span class="time time-l">{{ format(currentTime) }}</span>
                        <!-- 进度条 -->
                        <el-progress :percentage="percentage" :color="customColor" class="progress" ref="progressBar">
                            <el-button ref="progressBtn"></el-button>
                        </el-progress>
                        <span class="time time-r">{{ formatSeconds(currentSong.duration) }}</span>
                    </div>
                    <div class="operators">
                        <div class="icon i-left" @click="changeMode">
                            <i :class="iconMode"></i>
                        </div>
                        <div class="icon i-left" :class="disableCls">
                            <i class="icon-prev" @click="prev"></i>
                        </div>
                        <div class="icon i-center">
                            <i @click="togglePlaying" :class="playIcon"></i>
                        </div>
                        <div class="icon i-right" :class="disableCls">
                            <i class="icon-next" @click="next"></i>
                        </div>
                        <div class="icon i-right">
                            <i @click="toggleFavorite(currentSong)" class="icon" :class="getFavoriteIcon(currentSong)"></i>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="mini">
            <div class="mini-player" v-show="!fullScreen" @click="open">
                <div class="icon">
                    <img class="image" :src="currentSong.image" :class="cdCls">
                </div>
                <div class="text">
                    <h2 class="name" v-html="currentSong.name"></h2>
                    <p class="desc" v-html="currentSong.singer"></p>
                </div>
                <div class="control">
                    <i @click.stop="togglePlaying" :class="miniIcon" class="icon-mini"></i>
                </div>
                <div class="control" @click.stop="showPlaylist">
                    <i class="icon-playlist"></i>
                </div>
            </div>
        </transition>
        <playList ref="playlist"></playList>
        <audio :src="currentSong.url" ref="audio" @canplay="ready" @error="error" @timeupdate="updateTime"
            @ended="end"></audio>
    </div>
</template>
<script>
// import Scroll from '../../base/scroll/scroll.vue'
import { mapGetters, mapMutations,mapActions } from 'vuex';
import animations from 'animate.css'
import { prefixStyle } from '../../common/js/dom'
import { playMode } from '../../common/js/config';
import { currentIndex, currentSong } from '../../store/getters';
import PlayList from '../../components/playlist/playList.vue'
import { shuffle } from '../../common/js/util'
import {playerMixin} from '../../common/js/mixin'

const transform = prefixStyle('transform')
const transitionDuration = prefixStyle('transitionDuration')
export default {
    mixins: [playerMixin],
    props: {
    },
    components: {
        PlayList
        // Scroll
    },
    data() {

        return {
            songReady: false,
            currentTime: 0,
            percentage: 0,
            customColor: '#77787b',
        }
    },
    methods: {
        showPlaylist() {
            this.$refs.playlist.show()
        },
        back() {
            this.setFullScreen(false)
        },
        open() {
            this.setFullScreen(true)
        },
        enter(el, done) {
            const { x, y, scale } = this._getPosAndScale()

            let animation = {
                0: {
                    transform: `translate3d(${x}px,${y}px,0) scale(${scale})`
                },
                60: {
                    transform: `translate3d(0,0,0) scale(1.1)`
                },
                100: {
                    transform: `translate3d(0,0,0) scale(1)`
                }
            }
            // animations.registerAnimation({
            //     name: 'move',
            //     animation,
            //     presets: {
            //         duration: 400,
            //         easing: 'linear'
            //     }
            // })
            // animations.runAnimation(this.$refs.cdWrapper, 'move', done)

        },
        afterEnter() {
            animations.unregisterAnimation('move')
            this.$refs.cdWrapper.style.animation = ''
        },
        leave(el, done) {
            this.$refs.cdWrapper.style.transition = 'all 0.4s'
            const { x, y, scale } = this._getPosAndScale()
            this.$refs.cdWrapper.style[transform] = `translate3d(${x}px,${y}px,0) scale(${scale})`
            this.$refs.cdWrapper.addEventListener('transitionend', done)
        },
        afterLeave() {
            this.$refs.cdWrapper.style.transition = ''
            this.$refs.cdWrapper.style[transform] = ''
        },
        togglePlaying() {
            if (!this.songReady) {
                return
            }
            this.setPlayingState(!this.playing)
        },
        _getPosAndScale() {
            const targetWidth = 40
            const paddingLeft = 40
            const paddingBottom = 30
            const paddingTop = 80
            const width = window.innerWidth * 0.8
            const scale = targetWidth / width
            const x = -(window.innerWidth / 2 - paddingLeft)
            const y = window.innerHeight - paddingTop - width / 2 - paddingBottom
            return {
                x,
                y,
                scale
            }
        },
        prev() {
            if (!this.songReady) {
                return
            }
            let index = this.currentIndex - 1
            if (index === -1) {
                index = this.playlist.length - 1
            }
            this.setCurrentIndex(index)
            if (!this.playing) {
                this.togglePlaying()
            }
            this.songReady = false

        },
        next() {
            if (!this.songReady) {
                return
            }
            let index = this.currentIndex + 1
            if (index === this.playlist.length) {
                index = 0
            }
            this.setCurrentIndex(index)
            if (!this.playing) {
                this.togglePlaying()
            }
            this.songReady = false

        },
        loop() {
            this.$refs.audio.currentTime = 0
            this.$refs.audio.play()
        },
        ready() {
            this.songReady = true
            this.savePlayHistory(this.currentSong)
        },
        error() {
            this.songReady = true

        },
        updateTime(e) {
            this.currentTime = parseInt(e.target.currentTime)
        },
        format(interval) {
            interval = interval | 0
            const minute = interval / 60 | 0
            const second = this._pad(interval % 60)
            return `${minute}:${second}`
        },
        _pad(num, n = 2) {
            let length = num.toString().length
            while (length < n) {
                num = '0' + num
                length++
            }
            return num
        },
        formatSeconds(value) {
            //  秒
            let second = parseInt(value)
            //  分
            let minute = 0
            //  小时
            let hour = 0
            //  天
            //  let day = 0
            //  如果秒数大于60，将秒数转换成整数
            if (second > 60) {
                //  获取分钟，除以60取整数，得到整数分钟
                minute = parseInt(second / 60)
                //  获取秒数，秒数取佘，得到整数秒数
                second = parseInt(second % 60)
                //  如果分钟大于60，将分钟转换成小时

            }

            let result = '' + parseInt(second)
            if (minute > 0) {
                result = '' + parseInt(minute) + ':' + result
            }

            return result

        },
        changePercent() {
            const that = this

            const timer = setInterval(function () {
                that.percentage = that.currentTime / that.currentSong.duration * 100
                if (that.currentTime == that.currentSong.duration) {
                    clearInterval(timer)
                }
            }, 1000)


        },
        end() {
            if (this.mode === playMode.loop) {
                this.loop()
            } else (
                this.next()
            )
        },
        changeMode() {
            const mode = (this.mode + 1) % 3
            this.setPlayMode(mode)
            let list = null
            if (mode === playMode.random) {
                list = shuffle(this.sequenceList)
            } else {
                list = this.sequenceList
            }
            this.resetCurrentIndex(list)
            this.setPlaylist(list)
        },
        resetCurrentIndex(list) {
            let index = list.findIndex((item) => {
                return item.name === this.currentSong.name
            })
            this.setCurrentIndex(index)
        },

        // pregressTouchStart(e) {
        //     this.touch.initiated = true
        //     this.touch.startX = e.touches[0].pageX
        // },
        // pregressTouchMove(e) {
        //     if (!this.touch.initiated) {
        //         return
        //     }
        //     const deltaX = e.touches[0].pageX - this.touch.startX
        // },
        // pregressTouchEnd(e) {

        // },
        ...mapMutations({
            setFullScreen: 'SET_FULL_SCREEN',
            setPlayingState: 'SET_PLAYING_STATE',
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setPlayMode: 'SET_PLAY_MODE',
            setPlaylist: 'SET_PLAYLIST'
        }),
        ...mapActions([
            'savePlayHistory'
        ])
    },
    computed: {
        playIcon() {
            return this.playing ? 'icon-pause' : 'icon-play'
        },
        miniIcon() {
            return this.playing ? 'icon-pause-mini' : 'icon-play-mini'
        },
        cdCls() {
            return this.playing ? 'play' : 'play pause'
        },
        disableCls() {
            return this.songReady ? '' : 'disable'
        },
        iconMode() {
            return this.mode === playMode.sequence ? 'icon-sequence' : this.mode ===
                playMode.loop ? 'icon-loop' : 'icon-random'
        },
        // percentage(){
        // return this.currentTime / this.currentSong.duration
        // },
        ...mapGetters([
            'fullScreen',
            'playlist',
            'currentSong',
            'playing',
            'currentIndex',
            'mode',
            'sequenceList'
        ]),
    },
    watch: {
        currentSong(newSong, oldSong) {
            if (!newSong.name) {
                return
            }
            if (newSong.name === oldSong.name) {
                return
            }
            this.$nextTick(() => {
                this.$refs.audio.play()
                this.changePercent()
            })
        },
        playing(newPlaying) {
            const audio = this.$refs.audio
            this.$nextTick(() => {
                newPlaying ? audio.play() : audio.pause()
            })

        },

    },
    filters: {

    },
    beforeCreate() {

    },
    created() {
        this.touch = {}
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
<style>
.el-progress__text {
    display: none !important;
}

.el-progress-bar__outer {
    background-color: #8a8c8e;
}

.el-progress-bar {
    padding-right: 30px !important;
    margin-left: 20px;
}
</style>
  

<style scoped>
.playing-lyric-wrapper {
    width: 80%;
    margin: 30px auto 0 auto;
    overflow: hidden;
    text-align: center;
}

.playing-lyric {
    height: 20px;
    line-height: 20px;
    font-size: medium;
    color: red
}

.normal-player {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    background: #130c0e
}

.background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(20px);
}

.top {
    position: relative;
    margin-bottom: 25px
}

.back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 50
}

.icon-back {
    display: block;
    padding: 9px;
    font-size: 18px;
    color: white;
    transform: rotate(-90deg)
}

.title {
    width: 70%;
    margin: 0 auto;
    line-height: 40px;
    text-align: center;
    font-size: 19px;
    color: yellow
}

.subtitle {
    line-height: 20px;
    text-align: center;
    font: size 18px;
    color: purple
}

.middle {
    position: fixed;
    width: 100%;
    top: 80px;
    bottom: 170px;
    white-space: nowrap;
    font-size: 0;
    /* background-color: antiquewhite; */
}

.middle-l {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 80%;
    /* background-color: beige; */
}

.cd-wrapper {
    position: absolute;
    left: 10%;
    top: 0;
    width: 80%;
    height: 100%;
    /* background-color: brown; */
}

.cd {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 10px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: rotate 20s linear infinite;
}

.cd.pause {
    animation-play-state: paused
}

@keyframes rotate {
    0% {
        transform: rotate(0)
    }

    100% {
        transform: rotate(360deg)
    }

}

.image {
    position: absolute;
    left: 11px;
    top: 11px;
    width: 93%;
    height: 93%;
    border-radius: 50%;
}

.bottom {
    position: absolute;
    bottom: 50px;
    width: 100%;
    /* background-color: red; */
}

.operators {
    display: flex;
    align-items: center;
}

.icon {
    flex: 1;
    color: #c37e00
}

.i-left {
    text-align: right
}

.i-left>i {
    font-size: 40px;
}

.i-center {
    padding: 0 20px;
    text-align: center;
    font-size: 40px;
}

.i-right {
    text-align: left;
    font-size: 40px;
}

.normal-enter-active,
.normal-leave-active {
    transition: all 0.4s;
}

.normal-enter,
.normal-leave-to {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
}


.mini-player {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 180;
    width: 100%;
    height: 60px;
    background-color: #464547;
}

.mini-player>.icon {
    flex: 0 0 40px;
    width: 40px;
    padding: 0 10px 0 20px;
}

.mini-player>.icon>.image {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: rotate 10s linear infinite;

    /* background-color: azure; */
}

.mini-player>.icon>.image.pause {
    animation-play-state: paused
}

.mini-player>.text {
    display: flex;
    flex-direction: column;
    flex: 1;
    line-height: 20px;
    overflow: hidden;
}

.mini-player>.text>.name {
    margin-bottom: 2px;
    font-size: 16px;
    color: pink;
    margin-top: 10px;
}

.mini-player>.text>.desc {
    font-size: 14px;
    color: blanchedalmond;
}

.mini-enter-active,
.mini-leave-active {
    transition: all 0.4s
}

.mini-enter,
.mini-leave-to {
    opacity: 0
}

.control {
    flex: 0 0 30px;
    width: 30px;
    padding: 0 10px;
    font-size: 22px;
}

.progress-wrapper {
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 10px 0;
}

.time {
    color: #c37e00;
    font-size: small;
    flex: 0 0 12px;
    line-height: 30px;
    width: 10px;
}

.time-l {
    text-align: left;
}

.time-r {
    text-align: right;
}

.progress {
    flex: 1;
    margin-bottom: 5px;
}
</style>