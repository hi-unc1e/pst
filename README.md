
# pst
Pentesting Standard Tool

渗透标准工具
- cheatsheets.zip, https://github.com/Fechin/reference
    - 精简成渗透中常用的命令，参考：https://www.hacking8.com/cheatsheet


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
运行以下命令以构建Vue项目：

```
npm run build
```

# 子模块
本项目使用了不同的子模块，在clone时，需要一并clone子模块，否则会出现空目录。

- clone 子模块
```
git clone --recursive <repo>

```

- 更新子模块
```
git submodule update
```