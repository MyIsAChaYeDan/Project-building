# new-project

> hchy-project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<!-- 目录结构 -->
scr
    components
        common[公共组件]
        student[学生组件]
        teacher[教师组件]
        HelloWorld.vue [示例组件]
        layout.vue[学生教师父组件]
    router
        index.js[路由]
        request.js[axios配置]
        url.js[请求地址]
    static[静态资源]
        css
            common.css[公共css]
        img
    vuex
        store.js[vuex主状态分支]
        common.js[公共状态]
    library.js[过滤器,公共js方法]
        
