import Mock from 'mockjs'
var {list} = Mock.mock({
    "list":
    [
        {
            singer:'任然',
            name:'刁钻',
            album:'刁钻',
            duration:'224',
            id:'0001'
        },
        {
            singer:'廖雅桐',
            name:'把你交还人海',
            album:'把你交还人海',
            duration:'192',
            id:'0001'
        },
        {
            singer:'程响',
            name:'不敢',
            album:'不敢',
            duration:'259',
            id:'0001'
        },
        {
            singer:'十豆',
            name:'几分之几',
            album:'几分之几',
            duration:'224',
            id:'0001'
        },
        {
            singer:'薛之谦',
            name:'方圆几里',
            album:'意外',
            duration:'224',
            id:'0001'
        },
        {
            singer:'雪二',
            name:'下风',
            album:'上风，下风',
            duration:'224',
            id:'0001'
        },
        {
            singer:'曾雪雅',
            name:'爱分先后吗',
            album:'爱分先后吗',
            duration:'224',
            id:'0001'
        },
        {
            singer:'路飞文',
            name:'还有遗憾吧',
            album:'还有遗憾吧',
            duration:'224',
            id:'0001'
        },
        //
        {
            singer:'王若琳',
            name:'有你的快乐',
            album:'k情歌8',
            duration:'224',
            id:'0002'
        },{
            singer:'邓紫棋',
            name:'后会无期',
            album:'后会无期',
            duration:'224',
            id:'0002'
        },{
            singer:'董又霖',
            name:'一个人去巴黎',
            album:'一个人去巴黎',
            duration:'224',
            id:'0002'
        },{
            singer:'薛之谦',
            name:'认真的雪',
            album:'认真的雪',
            duration:'224',
            id:'0002'
        },{
            singer:'周杰伦',
            name:'告白气球',
            album:'告白气球',
            duration:'224',
            id:'0002'
        },{
            singer:'回春丹',
            name:'初恋',
            album:'初恋',
            duration:'224',
            id:'0002'
        },
        {
            singer:'熊猫眼乐队',
            name:'开心就好不要烦恼',
            album:'全聚了德',
            duration:'224',
            id:'0003'
        },
        {
            singer:'梁博',
            name:'给我一点温度',
            album:'给我一点温度',
            duration:'224',
            id:'0003'
        },
        {
            singer:'五月天',
            name:'盛夏光年',
            album:'冠军',
            duration:'224',
            id:'0003'
        },
        {
            singer:'杨千嬅',
            name:'勇',
            album:'盛放',
            duration:'224',
            id:'0003'
        },
        {
            singer:'达达乐队',
            name:'song F',
            album:'黄金时代',
            duration:'224',
            id:'0003'
        },
        {
            singer:'打扰一下',
            name:'未来',
            album:'come on',
            duration:'224',
            id:'0003'
        },
        {
            singer:'反光镜',
            name:'只有音乐才是我的解药',
            album:'释你',
            duration:'224',
            id:'0003'
        },


    ]
})

Mock.mock('/api/recoSong','get',(data)=>{
    let {name} = JSON.parse(data.body)
    if(name == '怀旧老歌'){
        return{
            message:'获取成功',
            data:list.slice(0,7),
            status:200
        }
    }else if(name == '动感单车'){
        return{
            message:'获取成功',
            data:list.slice(7,14),
            status:200
        }
    }else if(name == '好久不见')
    {
        return{
            message:'获取成功',
            data:list.slice(14,21),
            status:200
        }
    }
    
})

// Mock.mock('/api/recoSong','get',()=>{
//     return{
//         message:'获取成功',
//         data:list,
//         status:200
//     }
// })

