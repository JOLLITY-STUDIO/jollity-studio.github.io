# chinajollity.github.io

这是为 `chinajollity.github.io` 仓库创建的简单静态官网骨架，包含以下内容：

- `index.html` — 主页
- `about.html` — 关于页面
- `contact.html` — 联系页面（含示例表单）
- `css/styles.css` — 自定义样式
- `assets/favicon.svg` — 网站图标

本站使用 Bootstrap CDN 提供响应式布局，适合作为个人主页或项目站点的起点。

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

1. 将代码推送到 `main` 分支（或你想用作 Pages 的分支）。
2. 打开仓库 Settings → Pages，选择分支为 `main` 且目录为 `/ (root)`，保存即可。

如果使用自定义域，请在仓库根目录添加 `CNAME` 文件并写入你的域名，然后在 Pages 设置中配置域名。

下一步建议
---------

- 添加社交链接或 RSS 整合。
- 若需要博客功能，可迁移到 Jekyll/Hugo 或使用 GitHub Actions 自动构建。
- 如需表单功能，考虑集成 Formspree、Netlify Forms 或添加简单的后端接口。
"# chinajollity.github.io" 
