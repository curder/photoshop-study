import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/photoshop-study/",
    title: "Photoshop 软件学习",
    description: "记录 Photoshop 软件的学习。",
    lastUpdated: true,
    themeConfig: {
        logo: "",
        siteTitle: "Photoshop 学习",
        outline: {
            label: "章节导航",
            level: 'deep',
        },
        lastUpdated: {
            text: "最后更新时间",
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: "https://github.com/curder/photoshop-study/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/photoshop-study'}
        ],
        nav: [
            {text: 'Photoshop 基础', link: '/guide/keymapping'},
        ],
        sidebar: {
            "/guide/": [
                {
                    text: '',
                    items: [
                        {text: '常用快捷方式', link: '/guide/keymapping'},
                    ]
                },
            ]
        }
    }
});
