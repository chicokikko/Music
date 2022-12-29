<template>
    <div class="listView" ref="listView" >
        <ul>
            <li class="list-group" ref="listGroup" v-for="(item, i) in orderList" :key="i" :id="item.label">
                <h2 class="groupTitle">{{ item.label }}</h2>
                <ul>
                    <li class="groupItem" v-for="detail in item.group">
                        <el-image class="avatar" :src="detail.url" lazy></el-image>
                        <p class="name">{{ detail.name }}</p>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="shortcut" >
            <ul>
               <li v-for="(alphabet) in shortcut"  class="alphabet"><a :href="('#'+alphabet)">{{ alphabet }}</a></li>
            </ul>
        </div>
    </div>

</template>
<script>
import axios from "axios";
import '../../api/mockServe/singer';

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
                console.log(res);
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
                                url: item.url
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
    },
    beforeUpdate() {

    },
    updated() {

    },
    beforeDestroy() {

    },
    destroy() {

    }
}

</script>
  
<style>
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

.listView {
    position: relative;
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

.alphabet {
    margin-top: 8px;
    color: #8a8c8e;
    text-align: center;
}
</style>