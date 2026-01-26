# JOLLITY STUDIO（卓悦工坊）

这是为 `chinajollity.github.io` 仓库创建的静态官网，站点品牌为 **JOLLITY STUDIO（卓悦工坊）**，包含以下内容：

- `index.html` — 主页
- `about.html` — 关于页面
- `contact.html` — 联系页面（含示例表单）
- `css/styles.css` — 自定义样式（现代科技风格）
- `assets/` — 网站资源（图标、Logo等）
- `robots.txt` — 搜索引擎爬虫配置

本站使用 Bootstrap 5 CDN 提供响应式布局，采用现代化设计风格，适合作为个人主页或项目站点的起点。

本地预览
---------

在仓库根目录下通过简单静态服务器预览（Windows PowerShell）：

```powershell
python -m http.server 8000
# 然后在浏览器打开 http://localhost:8000
```

或者如果安装了 Node.js：

```powershell
npx http-server -p 8000
```

部署到 GitHub Pages
-------------------

1. 将代码推送到 `main` 分支。
2. 打开仓库 Settings → Pages，选择分支为 `main` 且目录为 `/ (root)`，保存即可。

如果使用自定义域，请在仓库根目录添加 `CNAME` 文件并写入你的域名，然后在 Pages 设置中配置域名。

设计特色
---------

- 现代科技风格渐变配色
- 流畅的动画过渡效果
- 响应式设计，适配各种设备
- 优化的搜索引擎配置（robots.txt）
- 品牌化 SVG 图标和 Logo

下一步建议
---------

- 添加社交链接（GitHub、Twitter、LinkedIn等）
- 扩展项目展示区域
- 若需要博客功能，可迁移到 Jekyll/Hugo
- 如需表单功能，考虑集成 Formspree 或 Netlify Forms 
