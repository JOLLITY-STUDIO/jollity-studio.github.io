# PixBead Mobile

使用 Capacitor 将 PixBead Web 应用打包为移动应用。

## 初始化

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
npx cap init com.pixbead.app PixBead
```

## 构建

```bash
# 构建 Web 资源
npm run build:web

# 同步到移动平台
npx cap sync android
npx cap sync ios

# 打开 IDE
npx cap open android
npx cap open ios
```
