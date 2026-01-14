# AI PM Portfolio

AI Product Manager个人作品集网站，采用LANCH极简风格设计。

## 特性

- 🎨 极简设计，LANCH风格复刻
- 📱 完全响应式布局
- 🔄 流畅的滚动切换交互
- 📊 项目筛选和详情展示
- 📝 博客文章和AI随想
- 🔗 社交媒体链接

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 项目结构

```
/
├── index.html          # 主HTML文件
├── styles/            # CSS样式
│   ├── tokens.css     # 设计令牌
│   ├── base.css       # 基础样式
│   ├── layout.css     # 布局系统
│   ├── components.css # 组件样式
│   └── animations.css # 动画效果
├── js/                # JavaScript模块
│   ├── main.js        # 主入口
│   ├── navigation.js  # 导航控制
│   ├── scrollObserver.js # 滚动监听
│   ├── worksManager.js   # 作品管理
│   ├── analytics.js      # 分析追踪
│   └── contentLoader.js  # 内容加载
├── content/           # 内容数据
│   ├── profile.json   # 个人信息
│   ├── works.json     # 项目作品
│   ├── blog.json      # 博客文章
│   ├── thoughts.json  # AI随想
│   └── social.json    # 社交链接
└── public/            # 静态资源
    └── images/        # 图片资源
```

## 内容更新

所有内容通过JSON文件管理，编辑对应文件即可更新：

- `content/profile.json` - 个人介绍
- `content/works.json` - 项目作品
- `content/thoughts.json` - AI随想
- `content/social.json` - 社交媒体

## 技术栈

- Vite - 构建工具
- Vanilla JavaScript - 无框架依赖
- CSS Variables - 设计系统
- Intersection Observer - 滚动检测
