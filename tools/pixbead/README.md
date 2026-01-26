# PixBead

PixBead scaffold — web + desktop + mobile packaging helper.

## 运行（开发）
- 本地 Web: `npm run start:web` 然后访问 `http://localhost:8080`
- Electron: 设置 `PIXBEAD_DEV=1`（在 Windows PowerShell：`$env:PIXBEAD_DEV=\"1\"; npm run start:electron`）以在浏览器模式加载本地 Web，或直接 `npm run start:electron` 让 Electron 加载内置 `src/index.html`。

## 打包（概述）
- Web: 使用你喜欢的打包器（Vite/Rollup/Webpack）构建 `dist/` 并部署静态文件到托管服务。仅发布构建产物以保持源码闭源。
- 桌面: 使用 `electron-builder` 或 `electron-packager` 打包二进制，发布到 GitHub Releases（只上传可执行文件 / 安装包，不公开源码）。
- 移动: 使用 Capacitor 将 Web 应用封装为原生应用，签名后上传到相应应用商店或私有分发渠道。

## 隐私与闭源分发建议
- 仓库可为私有，或仅将 `dist/` 二进制/静态文件发布到 Releases / 私有服务器。
- 保留源码在私有仓库或本地，不将源码包含在二进制发行包中。
