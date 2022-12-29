<template>
        <div class="listView" ref="listView">
            <ul>
                <li class="list-group" ref="listGroup" v-for="(item, i) in orderList" :key="i" :id="item.label">
                    <h2 class="groupTitle">{{ item.label }}</h2>
                    <ul>
                        
                        <li @click="selectItem(detail)" class="groupItem" v-for="(detail,index) in item.group" :key="index">
                            <el-image class="avatar" :src="detail.url" lazy></el-image>
                            <p class="name">{{ detail.name }}</p>
                        </li>
                  
                    </ul>
                </li>
            </ul>
            <div class="shortcut">
                <ul>
                    <li v-for="(alphabet) in shortcut" class="alphabet"><a :href="('#' + alphabet)">{{ alphabet }}</a>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
     
   

</template>
<script>
import axios from "axios";
import '../../api/mockServe/singer';
import{ mapState, mapMutations} from 'vuex'



// import Scroll from '../../base/scroll/scroll.vue'


export default {
    props: {

    },
    components: {

    },
    data() {

        return {
            singerList: [],
            orderList: [],
        }
    },
    methods: {
        getSinger() {
            axios({
                method: 'get',
                url: '/api/singerList'
            }).then((res) => {
                
                if (res.status == 200) {
                    this.singerList = res.data.data
                }
                let labelList = []
                //labelList此处获取到label的所有值
                for (var i = 0; i < this.singerList.length; i++) {
                    let label = this.singerList[i].label
                    labelList.push(label)
                }

                let labelLists = Array.from(new Set(labelList))
                //给数组去重
                let list = []

                labelLists.forEach((v, index) => {
                    list.push({
                        label: v,
                        group: []
                    })
                    this.singerList.forEach(item => {
                        if (v == item.label) {
                            list[index].group.push({
                                name: item.name,
                                url: item.url,
                                bgImg:item.bgImg
                            })
                        }
                    })
                })
                this.orderList = list

                this.orderList.sort((a, b) => {
                    return a.label.charCodeAt(0) - b.label.charCodeAt(0)
                })
            })
        },
        selectItem(item){
            console.log(item);
            this.$router.push({
                path: `/singer/${item.name}`
            })
        this.setSinger(item)
        console.log(item);
        },
        ...mapMutations({
            setSinger:'SET_SINGER'
        })

    },
    computed: {
        shortcut() {
            return this.orderList.map((group) => {
                return group.label.substr(0, 1)
            })
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
        this.getSinger()
    //     this.bscroll = new BScroll(this.$refs.wrapper, {
    //         probeType: 2,
    //         pullUpLoad: true,
    //         click: true,
    //         disableMouse: false,
    //         disableTouch: false,
    //         mouseWheel: true,
    //     })
    //    // console.log(this.bscroll);

    //     this.bscroll.on('scroll', position => {
    //         console.log(position);
    //     })

    //     this.bscroll.on("pullingUp", () => {
    //         console.log('上拉');
    //     })
    },
    beforeUpdate() {

    },
    updated() {
        // this.bscroll = new BScroll(this.$refs.wrapper, {
        //     probeType: 2,
        //     pullUpLoad: true,
        //     click: true,
        //     disableMouse: false,
        //     disableTouch: false,
        //     mouseWheel: true,
        // })
    },
    beforeDestroy() {

    },
    destroy() {

    }
}

</script>
  
<style>
.wrapper {
    height: 668px;
    overflow: auto;
    position: relative;
}

.groupItem {
    display: flex;
}


.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 10px;
    margin-left: 15px;
}

.name {
    margin-top: 20px;
}

.groupTitle {
    margin-top: 10px;
    background-color: #3e4145;
    padding-left: 15px;
    color: #8a8c8e;
    height: 25px;
    line-height: 25px;
}


.shortcut {
    position: fixed;
    top: 200px;
    right: 20px;
}

.shortcut>ul {
    background-color: #3e4145;
    opacity: 0.5;
    border-radius: 5px;
}
.shortcut>ul>li::-webkit-scrollbar {
   display: none;
 }
.alphabet {
    margin-top: 8px;
    color: #8a8c8e;
    text-align: center;
}
</style>