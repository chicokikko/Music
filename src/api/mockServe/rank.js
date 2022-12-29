import Mock from 'mockjs'
var { rank } = Mock.mock({
    "rank": [
        {
            url: 'http://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=150y150',
            name: '飙升榜',
            update: '12月14日',
        },
        {
            url: 'http://p2.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=150y150',
            name: '新歌榜',
            update: '12月14日'
        },
        {
            url: 'http://p1.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=150y150',
            name: '原创榜',
            update: '12月08日'
        },
        {
            url: 'http://p2.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg?param=150y150',
            name: '热歌榜',
            update: '12月14日'
        },
    ]
})

Mock.mock('/api/rank', 'get', () => {
    return {
        message: '获取成功',
        data: rank,
        status: 200
    }
})

var { rankList } = Mock.mock({
    "rankList": [
        {
            singer: '盛哲',
            name: '在你的身边',
            duration: 419,
            title: '热歌榜'
        },
        {
            singer: '王贰浪',
            name: '把回忆拼好给你',
            duration: 419,
            title: '热歌榜'
        },
        {
            singer: '告五人',
            name: '唯一',
            duration: 419,
            title: '热歌榜'
        },
        {
            singer: '林达浪',
            name: '还是会想你',
            duration: 419,
            title: '热歌榜'
        },
        {
            singer: '赵雷',
            name: '我记得',
            duration: 419,
            title: '热歌榜'
        },
        {
            singer: '队长',
            name: '哪里都是你',
            duration: 419,
            title: '热歌榜'
        },
        {
            singer: '呆呆破',
            name: '柔光',
            duration: 419,
            title: '飙升榜',
        },
        {
            singer: '林俊杰',
            name: '心墙',
            duration: 419,
            title: '飙升榜',
        },
        {
            singer: '苏星婕',
            name: '哪里都是你',
            duration: 419,
            title: '飙升榜',
        },
        {
            singer: '徐秉龙',
            name: '听后感',
            duration: 419,
            title: '飙升榜',
        },
        {
            singer: '郭静',
            name: '心墙',
            duration: 419,
            title: '飙升榜',
        },
        {
            singer: '卢卢快闭嘴',
            name: '梦里花',
            duration: 419,
            title: '飙升榜',
        },
        {
            singer: '陈奕迅',
            name: '无条件',
            duration: 419,
            title: '飙升榜',

        },
        {
            singer: '苏星婕',
            name: '梦里花',
            duration: 419,
            title: '新歌榜'
        },
        {
            singer: '邓紫棋',
            name: '面壁者',
            duration: 419,
            title: '新歌榜'
        },
        {
            singer: '范亚亚',
            name: '雨天',
            duration: 419,
            title: '新歌榜'
        },
        {
            singer: '徐秉龙',
            name: '听后感',
            duration: 419,
            title: '新歌榜'
        },
        {
            singer: '李荣浩',
            name: '乌梅子酱',
            duration: 419,
            title: '新歌榜'
        },
        {
            singer: '周深',
            name: '光亮',
            duration: 419,
            title: '新歌榜'
        },
        {
            singer: 'SZA',
            name: 'Kill Bill',
            duration: 419,
            title: '新歌榜'
        },
        {
            singer: '酷孩子',
            name: 'Kill Bill',
            duration: 419,
            title: '原创榜'
        },
        {
            singer: 'uzzy',
            name: '感受',
            duration: 419,
            title: '原创榜'
        },
        {
            singer: '姜昊男',
            name: '朋友身份',
            duration: 419,
            title: '原创榜'
        },
        {
            singer: '李学士',
            name: '退场',
            duration: 419,
            title: '原创榜'
        },
        {
            singer: '刘大壮',
            name: '不见山海',
            duration: 419,
            title: '原创榜'
        },
        {
            singer: 'ice papeer',
            name: '黑洞之内',
            duration: 419,
            title: '原创榜'
        },
        {
            singer: '吴达文',
            name: '对决',
            duration: 419,
            title: '原创榜'
        },
        {
            singer: '萱萱',
            name: '雷雨声',
            duration: 419,
            title: '原创榜'
        },
    ]
})

Mock.mock('/api/rankList', 'get', (data) => {
    return {
        message: '获取成功',
        data: [
            {
                url: 'http://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=150y150',
                name: '飙升榜',
                list: rankList.slice(0, 3)
            },
            {
                url: 'http://p2.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=150y150',
                name: '新歌榜',
                list: rankList.slice(8, 11)
            },
            {
                url: 'http://p1.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=150y150',
                name: '原创榜',
                list: rankList.slice(16, 19)
            },
            {
                url: 'http://p2.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg?param=150y150',
                name: '热歌榜',
                list: rankList.slice(24, 27)
            },
            {
                url: 'http://p1.music.126.net/urByD_AmfBDBrs7fA9-O8A==/109951167976973225.jpg?param=150y150',
                name: '古典榜',
                list: rankList.slice(24, 27)
            },
            {
                url: 'http://p2.music.126.net/5oN9YaFznwNGXkmi8i2Ytw==/109951167430864741.jpg?param=150y150',
                name: '韩语榜',
                list: rankList.slice(24, 27)
            },
            {
                url: 'http://p2.music.126.net/-4Dy9H4RQyN7sS7OQplC8g==/109951168129993341.jpg?param=150y150',
                name: '黑胶榜',
                list: rankList.slice(24, 27)
            },
            {
                url: 'http://p2.music.126.net/5wDP78s43ydVTKt62C8OjQ==/109951165613100063.jpg?param=150y150',
                name: 'KTV榜',
                list: rankList.slice(24, 27)
            }
        ],
        status: 200
    }

})



Mock.mock('/api/detailList', (data) => {
    let { name } = JSON.parse(data.body)
    if (name == '飙升榜') {
        return {
            message: '获取成功',
            data: rankList.slice(0, 8),
            status: 200
        }
    } else if (name == '新歌榜') {
        return {
            message: '获取成功',
            data: rankList.slice(8, 15),
            status: 200
        }
    } else if (name == '原创榜') {
        return {
            message: '获取成功',
            data: rankList.slice(15, 21),
            status: 200
        }
    } else if (name == '热歌榜') {
        return {
            message: '获取成功',
            data: rankList.slice(21, 28),
            status: 200
        }
    }

})