import Mock from 'mockjs'
var { content } = Mock.mock({
    "content": [
        {
            keywords: '风吹半夏主题曲',
            singer: 'singer1',
            type: 'song'
        },
        {
            keywords: '风情万种',
            type: 'song',
            singer: 'singer1',
        },
        {
            keywords: '风的颜色',
            type: 'song',
            singer: 'singer1',
        },
        {
            keywords: '风居住的街道',
            type: 'song',
            singer: 'singer1',
        },
        {
            keywords: '风吹一夏',
            type: 'song',
            singer: 'singer1',
        },
        {
            keywords: '恋爱循环',
            type: 'song',
            singer: 'singer1',
        },
        {
            keywords: '恋曲',
            type: 'song',
            singer: 'singer1',
        },
   
        {
            keywords: '恋恋风尘',
            type: 'song',
            singer: 'singer1',
        },
        {
            keywords: '薛之谦',
            type: 'singer',
            song: '动物世界',
            name:'薛之谦',
            bgImg: 'http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg?imageView=1&type=webp&thumbnail=750x0',
        },
        {
            keywords: '薛之谦',
            type: 'singer',
            song: '认真的雪',
            name:'薛之谦',
            bgImg: 'http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg?imageView=1&type=webp&thumbnail=750x0',

        },
        {
            keywords: '薛之谦',
            type: 'singer',
            song: '丑八怪',
            name:'薛之谦',
            bgImg: 'http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg?imageView=1&type=webp&thumbnail=750x0',
        },
        {
            keywords: '薛之谦',
            type: 'singer',
            song: '意外',
            name:'薛之谦',
            bgImg: 'http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg?imageView=1&type=webp&thumbnail=750x0',
        },
        {
            keywords: '鞠婧祎',
            type: 'singer',
            song: 'be my poi'
        },
        {
            keywords: '鞠婧祎',
            type: 'singer',
            song: '恋爱告急'
        },
        {
            keywords: '范丞丞',
            type: 'singer',
            song: 'songs1'
        },
        {
            keywords: '张杰',
            type: 'singer',
            song: '逆战'
        },
        {
            keywords: '张杰',
            type: 'singer',
            song: '剑心'
        },
        {
            keywords: '毛不易',
            type: 'singer',
            song: '像我这样的人'
        },
        {
            keywords: '许嵩',
            type: 'singer',
            song: '断桥残雪'
        },
    ]
})

console.log(content.slice(0,9));

Mock.mock('/api/suggest', 'get', (data) => {
    let { name } = JSON.parse(data.body)
    
    if (name == 'singer1') {
        return{
            message:'获取成功',
            data:content.slice(0,8),
            status:200
        }
            
    }else if(name == '薛之谦'){
        return{
            message:'获取成功',
            data:content.slice(8,12),
            status:200
        }
    }else if(name == '鞠婧祎'){
        return{
            message:'获取成功',
            data:content.slice(13,15),
            status:200
        }
    }else if(name == '风的颜色'){
        return{
            message:'获取成功',
            data:content.slice(0,8),
            status:200
        }
    }else if(name == '意外'){
        return{
            message:'获取成功',
            data:content.slice(8,12),
            status:200
        }
    }else{
        return{
            message:'获取成功',
            data:[],
            status:200
        }
    }


})