import {defineThemeConfig} from 'vuepress-theme-plume'
import {navbar} from './navbar'
import {notes} from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    logo: '/logo.svg',

    appearance: true,  // 配置 深色模式

    social: [
        {icon: 'github', link: 'https://github.com/CQMUA'},
        {icon: 'gitlab', link: 'https://zds.cqmu.edu.cn/'},
        {icon: "qq", link: 'https://qm.qq.com/cgi-bin/qm/qr?k=Cgj2RSh1os5bxN28-Js3CJfyiWE3FOli&jump_from=webapi&authKey=QCOTDUdGTz61LMkNalsy6R+sMcH2zjpB846xdEtXj3PfibYbgkxXTVtC38JnNJU0'},
    ],
    navbarSocialInclude: ['qq', 'github', 'gitlab',], // 允许显示在导航栏的 social 社交链接
    aside: true, // 页内侧边栏， 默认显示在右侧
    outline: [2, 3], // 页内大纲， 默认显示 h2, h3

    /**
     * 文章版权信息
     * @see https://theme-plume.vuejs.press/guide/features/copyright/
     */
    // copyright: true,

    // prevPage: true,   // 是否启用上一页链接
    // nextPage: true,   // 是否启用下一页链接
    // createTime: true, // 是否显示文章创建时间

    /* 站点页脚 */
       footer: {
       message: '2025 ©CQMUA All Rights Reserved | <async-component-wrapper><a href="https://beian.miit.gov.cn/" target="_blank">渝ICP备2025114514号</a></async-component-wrapper>',
       copyright: 'NOT AN OFFICIAL MINECRAFT ORGANIZATION! NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT!',
     },

    /**
     * @see https://theme-plume.vuejs.press/config/basic/#profile
     */
    profile: {
        avatar: '/logo.svg',
        name: 'CQMUA',
        description: '重庆 Minecraft 高校联盟',
        circle: true,
        location: '重庆市',
        organization: 'CQMUA, MUA',
    },

    navbar,
    notes,

    /**
     * 公告板
     * @see https://theme-plume.vuejs.press/guide/features/bulletin/
     */
    // bulletin: {
    //   layout: 'top-right',
    //   contentType: 'markdown',
    //   title: '注意',
    //   content: 'CQMUA测试预览版',
    // },

    /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
    transition: {
        page: true,        // 启用 页面间跳转过渡动画
        postList: true,    // 启用 博客文章列表过渡动画
        appearance: "fade",  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
    },

})
