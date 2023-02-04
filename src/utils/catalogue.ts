let catalogue = [
    {
        name: 'attribute',
        title: "自定义属性-加载动画"
    },
    {
        name: 'attr',
        title: "attr函数获取属性值"
    },
    {
        name: 'filter',
        title: "CSS filter"
    },
    {
        name: 'form',
        title: ":valid实现表单验证"
    },
    {
        name: 'checked',
        title: "伪类checked"
    },
    {
        name: 'navigation',
        title: "伪类active"
    },
    {
        name: 'icss',
        title: "利用伪元素实现消息小箭头"
    },
    {
        name: 'center',
        title: "最简单的垂直水平居中"
    },
    {
        name: 'empty',
        title: ":empty"
    },
    {
        name: 'gradientBackground',
        title: "渐变背景"
    },
    {
        name: 'gradientText',
        title: "渐变文字"
    },
    {
        name: 'gridBackground',
        title: "网格背景"
    },
    {
        name: 'glass',
        title: "毛玻璃"
    },
    {
        name: 'fracture',
        title: "折角",
    },
    {
        name: 'dl',
        title: "插入换行"
    },
    {
        name: 'zebra',
        title: "斑马纹"
    },
    {
        name: 'text-effect',
        title: "文字效果"
    },
    {
        name: 'footer',
        title: "满幅的背景，定宽的内容"

    },
    {
        name: 'd3',
        title: "3d悬停效果"
    },
    {
        name: 'clock',
        title: "时钟"
    },
    {
        name: 'love-animation',
        title: "爱心动画"
    },
    {
        name: 'animate2',
        title: "滑过动画"
    },
    {
        name: 'calculator',
        title: "计算器"
    },
    {
        name: 'skew',
        title: "悬停翻转动画"
    },
    {
        name: 'hexagon',
        title: "css六边形"
    },
    {
        name: 'shadow',
        title: "3d阴影"
    },
    {
        name: 'loading',
        title: "加载动画"
    },
    {
        name: 'loading2',
        title: "加载动画2"
    },
    {
        name: 'loading3',
        title: "加载动画3"
    },
    {
        name: 'shadow2',
        title: "阴影展示"
    },
    {
        name: 'tree',
        title: "canvas树"
    },
    {
        name: 'lx',
        title: "练习"
    },
]


const routes = catalogue.map(item => (
    {
        name: item.name,
        path: `/${item.name}`,
        component: () => import(`../views/${item.name}.vue`),
        meta: {
            title: item.title
        }
    })
);

export default routes