# 开发指南

本指南介绍如何参与 JOLLITY STUDIO 网站开发。

## 本地开发

### 环境要求
- Python 3.x 或 Node.js 14+

### 启动服务器

使用 Python:
```powershell
cd d:/studio/github/jollity-studio.github.io
python -m http.server 8000
```

使用 Node.js:
```powershell
cd d:/studio/github/jollity-studio.github.io
npx http-server -p 8000
```

访问 http://localhost:8000

## 项目结构

```
jollity-studio.github.io/
├── index.html          # 主页
├── about.html          # 关于页面
├── contact.html        # 联系页面
├── css/
│   └── styles.css     # 自定义样式
├── assets/
│   ├── favicon.svg     # 网站图标
│   ├── logo.svg       # 品牌 Logo
│   └── main.js        # 主要脚本
├── docs/              # 文档目录
├── robots.txt         # 搜索引擎配置
└── README.md         # 项目说明
```

## 样式规范

### CSS 变量
```css
:root {
  --cj-primary: #0d6efd;        /* 主色调 */
  --cj-accent: #6610f2;        /* 强调色 */
  --cj-gradient: linear-gradient(...); /* 渐变色 */
  --cj-shadow: ...;            /* 阴影 */
  --cj-glow: ...;              /* 发光效果 */
}
```

### 设计原则
- 现代科技风格
- 渐变色彩
- 流畅动画
- 响应式设计
- 可访问性优先

## Git 工作流

1. 创建新分支
```bash
git checkout -b feature/your-feature
```

2. 提交更改
```bash
git add .
git commit -m "feat: 添加新功能"
```

3. 推送并创建 PR
```bash
git push origin feature/your-feature
```

## 部署

推送到 `main` 分支后，GitHub Pages 会自动部署。

自定义域名设置：
1. 在仓库根目录添加 `CNAME` 文件
2. 在 GitHub Pages 设置中配置域名

## 变更记录

所有变更请记录在 [CHANGELOG.md](./CHANGELOG.md) 中。
