import Mock from 'mockjs'
var {singer} = Mock.mock({
    "singer":[
        {
        url:"http://p1.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=130y130",
        name:'张惠妹',
        label:'Z'
    },
    {
        url:"http://p1.music.126.net/ExCdjHZtgV5HZryfG8hBUw==/109951167431002717.jpg?param=130y130",
        name:'周深',
        label:'Z'
    },
    {url:"http://p1.music.126.net/TQZGbxp-xnJla-q7ii9z0A==/1364493985498917.jpg?param=130y130",
        name:'吴莫愁',
        label:'W'
    },
    {url:"http://p1.music.126.net/ZEEvSOoXV7Dv2QEkqUN3zg==/109951165625860507.jpg?param=130y130",
        name:'孙楠',
        label:'S'
    },
    {url:"http://p1.music.126.net/MXMZYksJmsa0gcGkuk2mDQ==/109951167712155407.jpg?param=130y130",
        name:'陈楚生',
        label:'C',
    },
    {
        url:"http://p1.music.126.net/36WeG5-ykSvhlzujVMtWyw==/109951166229071726.jpg?param=130y130",
        name:'蔡健雅',
        label:'C'
    },
    {url:"http://p1.music.126.net/Q4JSaV98wuU6xElATsFjAw==/3261151495434543.jpg?param=130y130",
        name:'杨宗纬',
        label:'Y'
    },
    {url:"http://p1.music.126.net/ei0o1W2N_SX1vpkXr2DDtA==/109951165122695489.jpg?param=130y130",
    name:'颜人中',
    label:'Y'
},
    {url:"http://p1.music.126.net/d893ZcYNPz7zhOm0NP6G3Q==/109951166839019298.jpg?param=130y130",
        name:'胡海泉',
        label:'H'

    },
    {url:"http://p1.music.126.net/6RuXmqmZw-GGoO5-FOfZMw==/109951166564073533.jpg?param=130y130",
    name:'黄小琥',
    label:'H'
    },
    {url:"http://p1.music.126.net/HciCtD7swUU_D9wem9NfNA==/6044015418524944.jpg?param=130y130",
        name:'陶喆',
        label:'T'
    },
    {
        url:'http://p1.music.126.net/Vbo8K447I5LLvH9VpdTfww==/109951166527176990.jpg?param=130y130',
        name:'Tizzy',
        label:'T'
    },
    {url:"http://p1.music.126.net/6qELnB2Zk0rPqczY9LbSoQ==/109951165693670160.jpg?param=130y130",
        name:'李荣浩',
        label:'L'
    },
    {url:"http://p1.music.126.net/sFAifnpKoWw0vNihjBJ-ZQ==/109951167433999712.jpg?param=130y130",
        name:'告五人',
        label:'G'
    },
    {url:"http://p1.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg?param=130y130",
        name:'薛之谦',
        label:'X',
        bgImg: 'http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg?imageView=1&type=webp&thumbnail=750x0',
    },
    {url:"http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=130y130",
        name:'邓紫棋',
        label:'D'
    },
    {   bgImg:'http://p2.music.126.net/W5LXS0-I-P9Wk6lQpS6HGA==/109951165787072463.jpg?param=640y300',
        url:"http://p1.music.126.net/6dylPpmQsQZaSlDkSoiv9g==/109951166048163326.jpg?param=130y130",
        name:'毛不易',
        label:'M'
    },
    {
        url:'http://p2.music.126.net/vzdyGdpOPG45A_W-FhIemA==/109951164344449366.jpg?param=130y130',
        name:'买辣椒也用券',
        label:'M'
    },
    {url:"http://p1.music.126.net/ATZ8-mOxophKXrLC0iXMZw==/109951163536269820.jpg?param=130y130",
        name:'许嵩',
        label:'X'
    },
    {url:"http://p1.music.126.net/3kORMwHAvsaHheopIt2wlw==/109951168007866165.jpg?param=130y130",
        name:'沈以诚',
        label:'S'
    },
    {url:"http://p1.music.126.net/XRfyWFfOEZq9WXWrW2drew==/109951167881965224.jpg?param=130y130",
        name:'Taylor Swift ',
        label:'T'
    },
    {url:"http://p1.music.126.net/VOXA9iqlExh6hruuPamo0Q==/109951166533103808.jpg?param=130y130",
        name:'姜云升',
        label:'J'
    },
    {url:"http://p2.music.126.net/CjFViMQAalj8BwWnFErU7A==/109951167843496843.jpg?param=130y130",
        name:'刘至佳',
        label:'L'
    },
    {
        url:'http://p1.music.126.net/thrEGQSfLQp0Kd6M5yBEEg==/109951167878713410.jpg?param=130y130',
        name:'林俊杰',
        label:'L',
        bgImg: 'http://p1.music.126.net/7636PzUiFMETHU7SAr05FA==/109951167878710661.jpg?imageView=1&type=webp&thumbnail=750x0',
    }

    ]
})

Mock.mock('/api/singerList','get',()=>{
    return{
        message:'获取成功',
        data:singer,
        status:200
    }
})