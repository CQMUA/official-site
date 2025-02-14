import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/'},
    {text: '博客', link: '/blog/'},
    {text: 'wiki', link: 'https://wiki.macrodd.online/'},
    {
        text: '指南',
        items: [
            {text: '加入我们', link: '/guide/join-us/'},
            {text: 'Passport配置', link: '/guide/passport-setup/'},
        ]
    },
    {
        text: '联盟',
        items: [
            {text: 'MUA', link: 'http://www.mualliance.cn/'},
            {text: 'Passport', link: 'https://p.mpsmc.cn/'},
            {text: '服务器中心', link: 'https://server.cqmua.cn/'},
            {text: '语雀', link: 'https://www.yuque.com/pguide/cqmua'},
            {text: '服务状态', link: 'https://status.cqmu.online/status/cqmua'}
        ]
    }
])
