import Mock from 'mockjs'
//轮播图
var {image} = Mock.mock({
    "image":
    [
    {url:"http://p1.music.126.net/tToxYInyAR6TfOPFFe8Mbw==/109951168114542309.jpg?imageView&quality=89"},
    {url:"http://p1.music.126.net/SlllmaoVH3ht_DVn7Ga9TA==/109951168114528827.jpg?imageView&quality=89"},
    {url:"http://p1.music.126.net/uYF3eLwFyVMMJ1v2h7sV0Q==/109951168114537691.jpg?imageView&quality=89"},
    {url:"http://p1.music.126.net/HbdP9ndHlGis0qvzi9DSCg==/109951168114538778.jpg?imageView&quality=89"},
    {url:"http://p1.music.126.net/5vol3i9DkWwZKgKAesg5DQ==/109951168114546269.jpg?imageView&quality=89"}
]
    
})

var {smallImage} = Mock.mock({
    "smallImage":[
        {url:"http://p1.music.126.net/kZb9DO4vykqiYEx0HHx86w==/109951163065542645.jpg?param=140y140",
        name:"怀旧老歌",
        info:"经典粤语,百听不厌",
        dissid:'1'
    },
        {url:"http://p1.music.126.net/HTiXYFaa_L6k_-c7T0ZJWw==/109951164425574633.jpg?param=140y140",
        name:"动感单车",
        info:"风驰电掣，车轮的速度由你决定",
        dissid:'2'
    },
        {url:"http://p1.music.126.net/BLMmLfUNu0zdprDISL_hTw==/109951165764406932.jpg?param=140y140",
        name:"好久不见",
        info:"偶遇在深秋午后",
        dissid:'3'
    },
        {url:"http://p2.music.126.net/xciEDzDuC1wOelXvKBIJ-Q==/109951168111262190.jpg?param=140y140",
        name:"英文磨耳朵",
        info:"慢速英文儿歌",
        dissid:'4'
    },
        {url:"http://p1.music.126.net/Xd6h-xOoPj2yTUuQXOhyCQ==/18612532836990988.jpg?param=140y140",
        name:"忧郁古典主义",
        info:"在新与旧的时空交错",
        dissid:8
    },
        {url:"http://p1.music.126.net/jbiaqbt3HfSPAvVYiokYcg==/109951167901512553.jpg?param=140y140",
        name:"快乐工作指南",
        info:"烦恼清空，快乐办公",
        dissid:'5'
    },
        {url:"http://p1.music.126.net/Cl0-NpZ0ESTDjJ1HmZ33KA==/109951163460576279.jpg?param=140y140",
        name:"日本民谣",
        info:"歌声轻柔，海风吹拂",
        dissid:'6'
    },
        {url:"http://p1.music.126.net/95_xsxD3lra9q485TmLGgw==/109951167577184184.jpg?param=140y140",
        name:"怀旧老春日漫步歌",
        info:"春光无限好，出门踏春吧",
        dissid:'7'
    }
    ],
})

Mock.mock('/api/recommend','get',()=>{
    return{
        message:'获取成功',
        data:image,
        status:200
    }
})

Mock.mock('/api/recommendList','get',()=>{
    return{
        message:'获取成功',
        data:smallImage,
        status:200
    }
})


