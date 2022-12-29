import Mock from 'mockjs'
import Test from '../../assets/songs/testSong.mp3'
import Test2 from '../../assets/songs/test2.mp3'
import Test3 from '../../assets/songs/test3.mp3'
import Test4 from '../../assets/songs/test4.mp3'
import Test5 from '../../assets/songs/test5.mp3'
import Test6 from '../../assets/songs/test6.mp3'




var { songs } = Mock.mock({
    "songs": [
        {
            singer: '薛之谦',
            id:997,
            url:Test2,
            album: '天外来物',
            name: '天外来物',
            duration:257
        },
        {
            id:997,
            singer: '薛之谦',
            album: '初学者',
            name: '我好像在哪见过你',
            url:Test4,
            duration:279

        },
        {
            id:997,
            singer: '薛之谦',
            album: '绅士',
            name: '演员',
            url:Test3,
            duration:261

        },
        {
            id:997,
            singer: '薛之谦',
            album: '未完成的歌',
            name: '认真的雪',
            url:Test5,
            duration:259
        },
        {
            id:997,
            singer: '薛之谦',
            album: '意外',
            name: '意外',
            url:Test6,
            duration:291,
        },
        {
            id:997,
            singer: '薛之谦',
            album: '初学者',
            name: '刚刚好',
            url:Test6,
            duration:291,
        },
        {
            id:997,
            singer: '薛之谦',
            album: '意外',
            name: '其实',
            url:Test6,
            duration:291,
        },
        {
            singer:'毛不易',
            id:629,
            album: '平凡的一天',
            name: '像我这样的人',
            url:Test,
            image:'http://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=130y130'
        },
        {
            id:629,
            singer:'毛不易',
            album: '小王',
            name: '呓语',
            image:'http://p2.music.126.net/XPPeIZu7wgcGXZ0666mfFg==/109951164640697307.jpg?param=130y130'
        },
        {
            id:629,
            singer:'毛不易',
            album: '平凡的一天',
            name: '消愁',
            image:'http://p2.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=130y130'
        },
        {
            id:629,
            singer:'毛不易',
            album: '月光，背影与海',
            name: '看得最远的地方',
            image:'http://p2.music.126.net/tnptLhv4Ni0rCcJKHuH99w==/109951168073189447.jpg?param=130y130'
        },
        {
            id:629,
            singer:'毛不易',
            album: '平凡的一天',
            name: '借',
            image:'http://p2.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=130y130'
        },
        {
            singer: '林俊杰',
            id:555,
            album: '新地球',
            name: '浪漫血液',
            image:'http://p2.music.126.net/QXZRckFTN5375vdQSyG0jA==/109951166919095160.jpg?param=130y130'
        },
        {
            id:555,
            singer: '林俊杰',
            album: '新地球',
            name: '新地球',
            image:'http://p1.music.126.net/QXZRckFTN5375vdQSyG0jA==/109951166919095160.jpg?param=130y130'
        },
        {
            id:555,
            singer: '林俊杰',
            album: '她说',
            name: '她说',
            image:'http://p2.music.126.net/MrV_33HsqJYR7vDwRh_Aow==/109951168111272763.jpg?param=130y130'
        },
        {
            id:555,
            singer: '林俊杰',
            album: '新地球',
            name: '可惜没如果',
        },
        {
            id:555,
            singer: '林俊杰',
            album: '因你而在',
            name: '修炼爱情',
            image:'http://p1.music.126.net/D_hiKMwrdQlqD36LoKLO2w==/109951163187408030.jpg?param=130y130'
        },
    ]
})


Mock.mock('/api/songList','get',(data)=>{
    console.log(data);
    let {name} = JSON.parse(data.body)
    if(name == '薛之谦'){
        return{
            message:'获取成功',
            data:songs.slice(0,7),
            status:200
        }
    }else if(name == '毛不易'){
        return{
            message:'获取成功',
            data:songs.slice(7,12),
            status:200
        }
    }else if(name == '林俊杰')
    {
        return{
            message:'获取成功',
            data:songs.slice(12,17),
            status:200
        }
    }
    
})