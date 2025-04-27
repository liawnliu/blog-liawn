import { type DefaultTheme } from 'vitepress';

const sidebar = {
    '/front-end/': [{
        text: 'web前端',
        collapsed: false, // 一直展开，不带有折叠功能
        items: [{
            text: '学习JavaScript',
            link: '/front-end/html、css、js、ts/学习JavaScript/',
            collapsed: true, // 具有折叠功能
            items: [
                {
                    text: '1.基础语法',
                    link: '/front-end/html、css、js、ts/学习JavaScript/1.基础语法'
                },
                {
                    text: '2.变量、作用域和内存问题',
                    link: '/front-end/html、css、js、ts/学习JavaScript/2.变量、作用域和内存问题'
                },
                {
                    text: '3.引用类型',
                    link: '/front-end/html、css、js、ts/学习JavaScript/3.引用类型'
                },
                {
                    text: '4.面向对象程序设计',
                    link: '/front-end/html、css、js、ts/学习JavaScript/4.面向对象程序设计'
                },
                {
                    text: '5.函数表达式',
                    link: '/front-end/html、css、js、ts/学习JavaScript/5.函数表达式'
                },
                {
                    text: '6.Http、Ajax和跨域',
                    link: '/front-end/html、css、js、ts/学习JavaScript/6.Http、Ajax和跨域'
                },
                {
                    text: '7.异步编程',
                    link: '/front-end/html、css、js、ts/学习JavaScript/7.异步编程'
                },
                {
                    text: '8.浏览器渲染',
                    link: '/front-end/html、css、js、ts/学习JavaScript/8.浏览器渲染'
                },
                {
                    text: 'js零碎知识和案例',
                    link: '/front-end/html、css、js、ts/学习JavaScript/js零碎知识和案例'
                }
            ],
        },
        {
            text: '学习CSS',
            collapsed: true,
            link: '/front-end/html、css、js、ts/学习CSS/',
            items: [
                {
                    text: '1.选择器',
                    link: '/front-end/html、css、js、ts/学习CSS/1.选择器'
                },
                {
                    text: '2.盒模型',
                    link: '/front-end/html、css、js、ts/学习CSS/2.盒模型'
                },
                {
                    text: '3.字体与文本属性',
                    link: '/front-end/html、css、js、ts/学习CSS/3.字体与文本属性'
                },
                {
                    text: '4.变换、过渡、动画',
                    link: '/front-end/html、css、js、ts/学习CSS/4.变换、过渡、动画'
                },
                {
                    text: '5.定位与浮动',
                    link: '/front-end/html、css、js、ts/学习CSS/5.定位与浮动'
                },
                {
                    text: '6.表格与居中布局',
                    link: '/front-end/html、css、js、ts/学习CSS/6.表格与居中布局'
                },
                {
                    text: '7.多列布局',
                    link: '/front-end/html、css、js、ts/学习CSS/7.多列布局'
                },
                {
                    text: '8.弹性盒布局',
                    link: '/front-end/html、css、js、ts/学习CSS/8.弹性盒布局'
                },
                {
                    text: '9.网格布局',
                    link: '/front-end/html、css、js、ts/学习CSS/9.网格布局'
                },
                {
                    text: '10.媒体查询',
                    link: '/front-end/html、css、js、ts/学习CSS/10.媒体查询'
                },
                {
                    text: '11.还原UI设计',
                    link: '/front-end/html、css、js、ts/学习CSS/11.还原UI设计'
                },
            ],
        },
        {
            text: '学习TypeScript',
            collapsed: true,
            link: '/front-end/html、css、js、ts/学习TypeScript/',
            items: [
                {
                    text: '1.typescript基础',
                    link: '/front-end/html、css、js、ts/学习TypeScript/1.typescript基础'
                },
                {
                    text: '2.typescript进阶',
                    link: '/front-end/html、css、js、ts/学习TypeScript/2.typescript进阶'
                },
            ],
        },
        {
            text: '学习Vue',
            collapsed: true,
            link: '/front-end/web前端js框架/学习Vue/',
            items: [
                {
                    text: '1.vue基础',
                    link: '/front-end/web前端js框架/学习Vue/1.vue基础'
                },
                {
                    text: '2.vue进阶',
                    link: '/front-end/web前端js框架/学习Vue/2.vue进阶'
                },
                {
                    text: '3.vue周边',
                    link: '/front-end/web前端js框架/学习Vue/3.vue周边'
                },
                {
                    text: '4.vue3学习',
                    link: '/front-end/web前端js框架/学习Vue/4.vue3学习'
                },
                {
                    text: '5.vue散记',
                    link: '/front-end/web前端js框架/学习Vue/5.vue散记'
                },
            ],
        },
        {
            text: '学习React',
            collapsed: true,
            link: '/front-end/web前端js框架/学习React/',
            items: [
                {
                    text: '1.react基础',
                    link: '/front-end/web前端js框架/学习React/1.react基础'
                },
                {
                    text: '2.react进阶',
                    link: '/front-end/web前端js框架/学习React/2.react进阶'
                },
                {
                    text: 'react相关问题',
                    link: '/front-end/web前端js框架/学习React/react相关问题'
                },
            ],
        },{
            text: 'H5游戏引擎Laya',
            collapsed: true,
            link: '/front-end/LayaBox游戏引擎/',
            items: [
                {
                    text: '1.环境搭建',
                    link: '/front-end/LayaBox游戏引擎/1.环境搭建'
                },
                {
                    text: '2.IDE的使用',
                    link: '/front-end/LayaBox游戏引擎/2.IDE的使用'
                },
                {
                    text: '3.组件库的介绍',
                    link: '/front-end/LayaBox游戏引擎/3.组件库的介绍'
                },
                {
                    text: '4.常用组件详解',
                    link: '/front-end/LayaBox游戏引擎/4.常用组件详解'
                },
                {
                    text: '5.组件化开发',
                    link: '/front-end/LayaBox游戏引擎/5.组件化开发'
                },
                {
                    text: '6.屏幕适配与抗锯齿',
                    link: '/front-end/LayaBox游戏引擎/6.屏幕适配与抗锯齿'
                },
                {
                    text: '7.性能优化',
                    link: '/front-end/LayaBox游戏引擎/7.性能优化'
                },
            ],
        }]
    }, 
    {
        text: '常用工具',
        collapsed: false,
        items: [
            {
                text: 'Npm的使用',
                link: '/front-end/常用工具/Npm的使用'
            },
            {
                text: 'Git的使用',
                link: '/front-end/常用工具/Git的使用'
            },
            {
                text: 'webpack的使用',
                link: '/front-end/常用工具/webpack的使用'
            },
            {
                text: 'VSCode的使用',
                link: '/front-end/常用工具/VSCode的使用'
            },
            {
                text: 'Chrome的使用',
                link: '/front-end/常用工具/Chrome的使用'
            },
            {
                text: '使用vuepress写blog',
                link: '/front-end/常用工具/使用vuepress写blog'
            },
            {
                text: '使用docsify写blog',
                link: '/front-end/常用工具/使用docsify写blog'
            },
            {
                text: '使用gitbook写blog',
                link: '/front-end/常用工具/使用gitbook写blog'
            },
            {
                text: '基于mocha+chai的单元测试',
                link: '/front-end/web前端测试与调试/基于mocha+chai的单元测试'
            }
        ]
    },
    {
        text: '前端面试',
        collapsed: false,
        items: [{
            text: '基础知识',
            collapsed: true,
            link: '/front-end/前端面试/基础知识/',
            items: [
                {
                    text: '1.html、css基础',
                    link: '/front-end/前端面试/基础知识/1.html、css基础'
                },
                {
                    text: '2.js异步',
                    link: '/front-end/前端面试/基础知识/2.js异步'
                },
            ]
        }]
    },
    {
        text: '简单项目实践',
        collapsed: false,
        items: [{
            text: 'react+express+ts写爬虫',
            collapsed: true,
            link: '/front-end/项目/react+express+ts写爬虫/',
            items: [
                {
                    text: '1.用ts编写小爬虫',
                    link: '/front-end/项目/react+express+ts写爬虫/1.用ts编写小爬虫'
                },
                {
                    text: '2.用express实现爬虫接口',
                    link: '/front-end/项目/react+express+ts写爬虫/2.用express实现爬虫接口'
                },
                {
                    text: '3.用react展示爬虫数据',
                    link: '/front-end/项目/react+express+ts写爬虫/3.用react展示爬虫数据'
                },
            ]
        }]
    },
    {
        text: '数据结构与算法',
        collapsed: false,
        items: [{
            text: '数据结构与算法ts版',
            collapsed: true,
            link: '/front-end/数据结构与算法/',
            items: [
                {
                    text: '1.环境搭建',
                    link: '/front-end/数据结构与算法/1.环境搭建'
                },
                {
                    text: '2.栈',
                    link: '/front-end/数据结构与算法/2.栈'
                },
                {
                    text: '3.队列',
                    link: '/front-end/数据结构与算法/3.队列'
                },
                {
                    text: '4.链表',
                    link: '/front-end/数据结构与算法/4.链表'
                },
                {
                    text: '5.集合',
                    link: '/front-end/数据结构与算法/5.集合'
                },
                {
                    text: '6.字典和散列表',
                    link: '/front-end/数据结构与算法/6.字典和散列表'
                },
                {
                    text: '7.递归',
                    link: '/front-end/数据结构与算法/7.递归'
                },
                {
                    text: '8.树',
                    link: '/front-end/数据结构与算法/8.树'
                },
                {
                    text: '9.二叉堆和堆排序',
                    link: '/front-end/数据结构与算法/9.二叉堆和堆排序'
                },
                {
                    text: '10.图',
                    link: '/front-end/数据结构与算法/10.图'
                },
                {
                    text: '11.排序和搜索算法',
                    link: '/front-end/数据结构与算法/11.排序和搜索算法'
                },
                {
                    text: '12.算法设计与技巧',
                    link: '/front-end/数据结构与算法/12.算法设计与技巧'
                },
                {
                    text: '13.算法复杂度',
                    link: '/front-end/数据结构与算法/13.算法复杂度'
                },
            ],
        }]
    }],
    '/back-end/': [{
        text: 'Java',
        collapsed: false,
        items: [{
            text: 'JavaSE',
            link: '/back-end/JavaSE/',
            collapsed: true,
            items: [
                {
                    text: '1.JavaSE基础篇',
                    link: '/back-end/JavaSE/1.JavaSE基础篇'
                },
                {
                    text: '2.JavaSE加强篇1',
                    link: '/back-end/JavaSE/2.JavaSE加强篇1'
                },
                {
                    text: '3.JavaSE加强篇2',
                    link: '/back-end/JavaSE/3.JavaSE加强篇2'
                },
            ],
        },{
            text: 'JavaWeb',
            link: '/back-end/JavaWeb/',
            collapsed: true,
            items: [
                {
                    text: 'MySql',
                    link: '/back-end/JavaWeb/MySql/',
                    collapsed: true,
                    items: [
                        {
                            text: '1.数据定义语言DDL',
                            link: '/back-end/JavaWeb/MySql/1.数据定义语言DDL'
                        },
                        {
                            text: '2.数据查询语言DQL',
                            link: '/back-end/JavaWeb/MySql/2.数据查询语言DQL'
                        },
                    ],
                },
            ],
        }]
    },{
        text: 'NodeJs',
        collapsed: false,
        items: [{
            text: 'Node基础',
            link: '/back-end/NodeJs/',
            collapsed: true,
            items: [
                {
                    text: '1.globals和模块',
                    link: '/back-end/NodeJs/1.globals和模块'
                },
                {
                    text: '2.Buffer缓存区和path路径',
                    link: '/back-end/NodeJs/2.Buffer缓存区和path路径'
                },
                {
                    text: '3.文件和目录操作',
                    link: '/back-end/NodeJs/3.文件和目录操作'
                },
                {
                    text: '4.http传输相关',
                    link: '/back-end/NodeJs/4.http传输相关'
                }
            ],
        }]
    },{
        text: 'Python',
        collapsed: false,
        items: [{
            text: 'Python基础',
            link: '/back-end/Python/',
            collapsed: true,
            items: [
                {
                    text: '1.python基础',
                    link: '/back-end/Python/1.python基础'
                },
                {
                    text: '2.python进阶',
                    link: '/back-end/Python/2.python进阶'
                },
                {
                    text: '3.python建议',
                    link: '/back-end/Python/3.python建议'
                },
            ]}
        ],
    }],
    // 第三个侧边栏，对应导航栏的第二项
    '/my-life/': [{
        text: '电脑工具',
        collapsed: false,
        items: [
            {
                text: 'win10下载与安装',
                link: '/my-life/电脑工具/win10下载与安装'
            },
            {
                text: '谷歌浏览器使用',
                link: '/my-life/电脑工具/谷歌浏览器使用'
            },
            {
                text: 'Frp实现内网穿透',
                link: '/my-life/电脑工具/Frp实现内网穿透'
            },
            {
                text: 'SoftEther实现虚拟局域网',
                link: '/my-life/电脑工具/SoftEther实现虚拟局域网'
            } 
        ]
    },
    {
        text: '手机工具',
        collapsed: false,
        items: [{
            text: 'Shizuku',
            collapsed: true,
            link: '/my-life/手机工具/Shizuku/',
            items: [
                {
                    text: '1.Shizuku的使用',
                    link: '/my-life/手机工具/Shizuku/1.Shizuku的使用'
                },
                {
                    text: '2.给自己的应用添加ShizukuAPI',
                    link: '/my-life/手机工具/Shizuku/2.给自己的应用添加ShizukuAPI'
                },
                {
                    text: '3.给别人的应用添加ShizukuAPI',
                    link: '/my-life/手机工具/Shizuku/3.给别人的应用添加ShizukuAPI'
                }
            ],
        }]
    }, 
    {
        text: '日常生活',
        collapsed: false,
        items: [{
            text: '土味情话',
            link: '/my-life/日常生活/驾照'
        },{
            text: '驾照',
            collapsed: true,
            link: '/my-life/日常生活/驾照/',
            items: [
                {
                    text: '1.科目1-信号开关类',
                    link: '/my-life/日常生活/驾照/1.科目1-信号开关类'
                },
                {
                    text: '2.科目1-通行常识类',
                    link: '/my-life/日常生活/驾照/2.科目1-通行常识类'
                },
                {
                    text: '3.科目1-交通法规类',
                    link: '/my-life/日常生活/驾照/3.科目1-交通法规类'
                },
                {
                    text: '4.科目1-易错点口诀',
                    link: '/my-life/日常生活/驾照/4.科目1-易错点口诀'
                },
                {
                    text: '5.科目4-事故相关类',
                    link: '/my-life/日常生活/驾照/5.科目4-事故相关类'
                },
                {
                    text: '6.科目4-常识类',
                    link: '/my-life/日常生活/驾照/6.科目4-常识类'
                },
                {
                    text: '7.科目4-图标类',
                    link: '/my-life/日常生活/驾照/7.科目4-图标类'
                }
            ]
        }]
    },
    {
        text: '影视剪辑',
        collapsed: false,
        items: [{
            text: '文案课',
            collapsed: true,
            link: '/my-life/影视剪辑/文案课/',
            items: [
                {
                    text: '1.提升认知',
                    link: '/my-life/影视剪辑/文案课/1.提升认知'
                },
                {
                    text: '2.作品不热门？',
                    link: '/my-life/影视剪辑/文案课/2.作品不热门？'
                },
                {
                    text: '3.写作没思路？',
                    link: '/my-life/影视剪辑/文案课/3.写作没思路？'
                },
                {
                    text: '4.文案没节奏？',
                    link: '/my-life/影视剪辑/文案课/4.文案没节奏？'
                },
                {
                    text: '5.流量不稳定？',
                    link: '/my-life/影视剪辑/文案课/5.流量不稳定？'
                },
                {
                    text: '6.还是不会写？',
                    link: '/my-life/影视剪辑/文案课/6.还是不会写？'
                },
                {
                    text: '7.运营不会搞？',
                    link: '/my-life/影视剪辑/文案课/7.运营不会搞？'
                },
                {
                    text: '8.选题不会选？',
                    link: '/my-life/影视剪辑/文案课/8.选题不会选？'
                },
                {
                    text: '9.开头不会写？',
                    link: '/my-life/影视剪辑/文案课/9.开头不会写？'
                },
            ],
        }]
    },
    {
        text: '电商运营',
        collapsed: false,
        items: [{
            text: '抖店无货源',
            collapsed: true,
            link: '/my-life/电商运营/抖店无货源/',
            items: [
                {
                    text: '1.抖音精细化选品的8个方法',
                    link: '/my-life/电商运营/抖店无货源/1.抖音精细化选品的8个方法'
                },
            ],
        }, {
            text: '女装有货源无库存',
            collapsed: true,
            link: '/my-life/电商运营/女装有货源无库存/',
            items: [
                {
                    text: '1.开店以及设置',
                    link: '/my-life/电商运营/女装有货源无库存/1.开店以及设置'
                },
                {
                    text: '2.选品上架以及运营',
                    link: '/my-life/电商运营/女装有货源无库存/2.选品上架以及运营'
                },
            ],
        }]
    },
    {
        text: 'TikTok',
        collapsed: false,
        items: [{
            text: '翻译',
            collapsed: true,
            link: '/my-life/TikTok/翻译/',
            items: [
                {
                    text: 'deeply',
                    link: '/my-life/TikTok/翻译/deeply'
                },
            ],
        }]
    }]
} as DefaultTheme.Sidebar;

export default sidebar;
