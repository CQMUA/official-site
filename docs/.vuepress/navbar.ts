import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/'},
    {icon: '/blog.svg', text: '大事记', link: '/blog/'},
    {
        icon: '/guidance.svg',
        text: '指南',
        items: [
            {icon: '/join.svg', text: '加入我们', link: '/guide/join-us/'},
            {icon: 'icon-park:config', text: 'Passport配置', link: '/guide/passport-setup/'},
        ]
    },
    {
        icon: '/minecraft.svg',
        text: '联合服务器',
        items: [
            {icon:'/minecraft_heart.png', text: '联合生存服',link: '/notes/union-server/1.union-survival.md'},
            // {icon:'/minecraft_stone.png', text: '联合复原服', link: '/notes/union-server/2.union-restore.md'},
            {icon:'fluent-emoji:video-game', text: '小游戏服', link: '/notes/union-server/3.mini-game.md'},
            {icon:'/redstone.png', text: '联合生电服',link: '/union-server/union-redstone/'},
        ]
    },
    // {
    //   icon: 'twemoji:world-map',
    //   text: '地图',
    //   items: [
    //       {icon:'/minecraft_heart.png', text: '联合生存服', link: 'http://maps.cqmua.cn/survival/'},
    //       {icon:'noto:houses', text: '像素大学城', link: 'http://maps.cqmua.cn/restore/'},
    //   ]
    // },
    {
        icon: 'logos:google-developers',
        text: '开发与服务',
        items: [
            {icon: 'devicon:passport', text: 'Passport', link: 'https://p.cqmua.cn/'},
            {icon: '/command_block.gif', text: '服务器中心', link: 'https://server.cqmua.cn/'},
            {icon: 'icon-park:server', text: '服务状态', link: 'http://100.126.170.14:3001/status/cqmua'},
        ]
    },
    {
        icon: '/logo.svg',
        text: '联盟友链',
        items: [
            {icon: '/yuque.svg', text: '语雀文档', link: 'https://www.yuque.com/pguide/cqmua'},
            {icon: '/mua.png', text: 'MUA', link: 'http://www.mualliance.cn/'},
            // {icon: '/cymc.png',text: 'CYMC',link: 'https://www.cymc.club/'},
            {icon:'/mpsmc.png', text: 'MPSMC', link: 'https://b.mpsmc.cn/'},
        ]
    },
    {icon: 'vscode-icons:file-type-mediawiki', text: 'WIKI', link: 'https://wiki.macrodd.cn/'},
])
