# 搭建一个TypeScript测试环境
`目的是写ts测试代码，了解ts的各种语法，基于本地浏览器环境，用webpack打包。`

使用：
1. npm install
2. npm test启动webpack-dev-server服务
3. 浏览器中输入localhost: 8080, 并且可以文件变动自动刷新
另：npm run build 编译bundle到dist/

简单说明：
* 我们写的源代码是typescript，然后通过webpack把ts传成js再打包成bundle单文件，最后是可以运行在浏览器中的es5标准代码。
* 要使用ts需要安装两个npm包：ts-loader、typescript，缺一不可。
* 在项目的根目录创建tsconfig.json，在ts编译为js的过程中会读该文件的配置信息。该文件必须有，不过内容可以为空`{}`，此刻所有的配置都按照默认设置来。
* tsconfig中有非常丰富的配置项，不过该案例是用webpack接管了大部分的打包过程，比如入口文件的设置、目的路径的设置、sourcemap等都直接在webpack中，所以该项目中tsconfig只保留了ts的编译选项(compilerOptions)，[compilerOptions详细列表见](https://www.tslang.cn/docs/handbook/compiler-options.html)


***

> [tsconfig官方配置文档]  https://www.tslang.cn/docs/handbook/tsconfig-json.html

> [ts写node代码] https://segmentfault.com/a/1190000007574276

> [ts官网:模块]  https://tslang.cn/docs/handbook/modules.html
