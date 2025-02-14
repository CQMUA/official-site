import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/'},
    {icon: '/blog.svg', text: '博客', link: '/blog/'},
    {icon: 'vscode-icons:file-type-mediawiki', text: 'wiki', link: 'https://wiki.macrodd.online/'},
    {
        icon: '/guidance.svg',
        text: '指南',
        items: [
            {icon: '/join.svg', text: '加入我们', link: '/guide/join-us/'},
            {icon: 'icon-park:config', text: 'Passport配置', link: '/guide/passport-setup/'},
        ]
    },
    {
        text: '联盟',
        items: [
            {icon: '/mua.png', text: 'MUA', link: 'http://www.mualliance.cn/'},
            {icon: 'devicon:passport', text: 'Passport', link: 'https://p.mpsmc.cn/'},
            {icon: '/command_block.gif', text: '服务器中心', link: 'https://server.cqmua.cn/'},
            {icon: '/yuque.svg', text: '语雀', link: 'https://www.yuque.com/pguide/cqmua'},
            {icon: 'icon-park:server', text: '服务状态', link: 'https://status.cqmu.online/status/cqmua'}
        ]
    }
])
