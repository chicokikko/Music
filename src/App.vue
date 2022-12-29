
<template>
  <div id="app">
	 <m-header></m-header>
   <tab></tab>
   <router-view></router-view>
  <player></player>
  </div>
</template>
<script>
import MHeader from './components/m-header/m-header.vue'
import Tab from './components/tab/tab.vue'
import Player from './components/player/player.vue'

   export default{
		props:[],
		components:{
			MHeader,
      Tab,
      Player
		},
        data() {
            
			return{
				
			}
        },
        methods: {
            
        },
		computed:{
			
		},
		watch:{
			
		},
		filters:{
			
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
           
        },
		beforeDestroy(){
			
		},
		destroy(){
			
		}
    };
</script>

<style lang='stylus' scoped rel="stylesheet/stylus">
@import "./common/stylus/variable"
#app
  color: $color-theme
</style>
 <style>
 .el-carousel__container {
    height: 146px !important;
}
 </style>
