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
            {text: 'Photoshop 基础', link: '/guide/new-document'},
        ],
        sidebar: {
            "/guide/": [
                {
                    text: '',
                    items: [
                        {text: '新建文档', link: '/guide/new-document'},
                        {text: '打开文档', link: '/guide/open-document'},
                        {text: '保存文档', link: '/guide/save-document'},
                        {text: '关闭文档', link: '/guide/close-document'},
                        {text: '性能配置', link: '/guide/performance-configuration'},
                        {text: '图像大小', link: '/guide/image-size'},
                        {text: '图层', link: '/guide/layers'},
                        {text: '视图操作', link: '/guide/view'},
                        {text: '移动工具', link: '/guide/move'},
                        {text: '选区', link: '/guide/selection'},
                        {text: '历史记录', link: '/guide/history'},
                        {text: '画笔工具', link: '/guide/brush'},
                        {text: '修饰修复', link: '/guide/repair'},
                        {text: '常用快捷方式', link: '/guide/keymapping'},
                    ]
                },
            ]
        }
    }
});
