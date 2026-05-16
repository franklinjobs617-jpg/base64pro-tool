# Base64Pro - Gaming Guides Hub

## 项目概述

Base64Pro 是一个游戏攻略 Hub 站，专注于为玩家提供最新游戏的攻略、指南和维基内容。网站采用 SEO 优化策略，旨在通过 Google 搜索流量获取用户并进行广告变现。

### 核心定位
- **目标用户**：英语玩家的游戏攻略需求
- **内容策略**：聚焦新上线及即将上线的热门游戏
- **变现模式**：Google AdSense 自动广告

## 技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4

## 目录结构

```
├── public/                     # 静态资源
│   └── games/                  # 游戏图片资源
│       ├── directive-8020/     # Directive 8020 Hero 图
│       ├── lorain/             # Lorain Hero 图
│       ├── project-mist/
│       ├── thick-as-thieves/
│       ├── coffee-talk-tokyo/
│       └── 007-first-light/
├── src/
│   ├── app/                    # 页面路由
│   │   ├── layout.tsx          # 根布局
│   │   ├── page.tsx            # 首页
│   │   ├── sitemap.ts          # 动态 sitemap
│   │   ├── robots.ts           # robots.txt
│   │   ├── not-found.tsx       # 404 页面
│   │   └── game/[slug]/        # 游戏 Hub 页面
│   │       ├── page.tsx        # 游戏 Hub 主页
│   │       └── [guide]/page.tsx # 攻略详情页
│   ├── components/             # 组件
│   │   ├── ui/                 # shadcn/ui 组件
│   │   ├── SiteHeader.tsx      # 网站头部
│   │   ├── SiteFooter.tsx      # 网站底部
│   │   └── Breadcrumbs.tsx     # 面包屑导航
│   ├── lib/                    # 工具库
│   │   ├── site.ts             # 网站配置与游戏数据
│   │   └── utils.ts            # 通用工具函数
│   └── server.ts               # 服务端入口
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 当前游戏列表

| 游戏名称 | Slug | 上线日期 | 状态 | 攻略数量 |
|---------|------|---------|------|---------|
| Directive 8020 | directive-8020 | 2025-05-12 | 已上线 | 8篇 |
| Lorain | lorain | 2025-05-14 | 已上线 | 4篇 |
| Project: Mist | project-mist | 2025-05-19 | 即将上线 | 4篇 |
| Thick As Thieves | thick-as-thieves | 2025-05-20 | 即将上线 | 4篇 |
| Coffee Talk Tokyo | coffee-talk-tokyo | 2025-05-21 | 即将上线 | 4篇 |
| 007 First Light | 007-first-light | 2025-05-27 | 即将上线 | 4篇 |

## Directive 8020 攻略列表（基于 GSC 热门关键词）

| 攻略标题 | Slug | 搜索热度 |
|---------|------|---------|
| Complete Trophy Guide | trophy-guide | 331+ clicks |
| All Endings Guide | all-endings-guide | 121+ clicks |
| Walkthrough | walkthrough | 107+ clicks |
| All Choices & Consequences | all-choices-guide | 60+ clicks |
| All Deaths Guide | all-deaths-guide | 56+ clicks |
| Dolls Collectibles | dolls-collectibles | 30+ clicks |
| How to Save Everyone | save-everyone-guide | 7+ clicks |
| Platinum Walkthrough | platinum-walkthrough | 61+ clicks |

## 添加新游戏

1. 在 `src/lib/site.ts` 的 `games` 数组中添加新游戏配置
2. 在 `src/app/game/[slug]/page.tsx` 的 `gameContent` 对象中添加游戏内容
3. 在 `src/app/game/[slug]/[guide]/page.tsx` 的 `guideContent` 对象中添加攻略内容
4. 在 `src/app/sitemap.ts` 中添加新游戏的 guide 页面
5. 添加游戏图片到 `public/games/[slug]/hero.jpg`

## SEO 配置

- **Sitemap**: 自动生成，包含所有游戏页面和攻略详情页
- **Robots.txt**: 允许所有爬虫，排除 /api/ 和 /private/
- **JSON-LD**: 游戏页使用 VideoGame schema，攻略页使用 HowTo schema
- **Metadata**: 每个页面独立设置 title、description、keywords
- **图片 SEO**: 所有图片使用语义化 alt 描述

## 包管理

**仅使用 pnpm**，禁止 npm 或 yarn。

常用命令：
- 开发：`pnpm dev` 或 `coze dev`
- 构建：`pnpm build` 或 `coze build`
- 启动：`pnpm start` 或 `coze start`

## 开发规范

### 编码规范
- TypeScript strict 模式
- 禁止隐式 any 和 as any
- 优先使用语义化 HTML 标签（main, section, article, h1-h3）
- 每个页面只有一个 h1

### Hydration 问题防范
- 禁止在 JSX 中直接使用 Date.now()、Math.random() 等动态数据
- 使用 'use client' + useEffect + useState 处理客户端动态内容
- 禁止非法 HTML 嵌套（如 p 嵌套 div）

### SEO 最佳实践
- 所有页面必须有 Metadata（title, description, canonical）
- FAQ 使用 h3 + p 结构
- 对比和价格使用真实 table
- 图片必须有 alt 属性

### 图片规范
- 游戏图片存放在 `public/games/[slug]/` 目录
- Hero 图片命名：`hero.jpg`
- 使用 Next.js Image 组件，必须设置 sizes 属性
- alt 文本格式：`[游戏名] - [游戏类型] game [描述]`

## GSC 关键词追踪

当前已验证的高流量关键词（来自 Directive 8020）：
- directive 8020 trophy guide (331 clicks, 15.12% CTR)
- directive 8020 walkthrough (107 clicks, 12.99% CTR)
- directive 8020 endings (80 clicks, 8.91% CTR)
- directive 8020 platinum (61 clicks, 17.18% CTR)
- directive 8020 all choices (24 clicks, 33.33% CTR)
