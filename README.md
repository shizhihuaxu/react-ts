# 搭建流程

## 重写配置的方案对比

1. eject：不可逆操作，弹出配置后，你将无法跟随官方的脚步去升级项目的 react-script 版本。

2. 通过 CRA 官方支持的 `--scripts-version` 参数，创建项目时使用自己重写过的 react-scripts 包。

3. react-app-rewired（社区维护）+ custom-cra：

4. craco（推荐）：

   - 安装依赖

     ```
     npm install @craco/craco -D
     ```

   - 创建配置文件 `craco.config.js`

     ```
     module.exports = {}
     ```

   - 调整 package.json 中 scripts 选项中的命令，除 eject 那一项外，react-scripts 改为 craco

     

## 代码风格

1. 使用脚手架初始化项目

   ```bash
   npx create-react-app [your app name] --template typescript
   ```

   

2. 删除无用文件，`public` 文件夹下只保留 `index.html` 和 `favicon.ico` 文件即可，删除 `index.html` 文件中的无用引入和注释。

3. 项目文件结构组织如下

   ```
   project
   	/.vscode
   			seetings.json
   	/node_modules
   	/public
   			index.html
   			favicon.ico
   	/src
   			/components
   			/containers
   					/App
   							index.scss
   							index.tsx
   			/assets 静态资源
   			/styles 通用样式文件
   					
   			/scripts
   					/constants
   					/utils
   			/services http 和 socket 接口
   					/http
   							/api-methods
   							constants.ts
   							axios.ts
   							index.ts
   					/websocket
   						constants.ts
   						socket.ts
   			index.scss
   			index.tsx
   			react-app-env.d.ts
   			setupTests.ts
   	.gitignore
   	package.json
   	package-lock.json
   	README.md
   	tsconfig.json
   		
   ```
   
   命名规则

   - 组件文件夹名称均使用大驼峰式命名，组件文件夹由组件内容 `index.tsx` 和组件样式 `index.scss` 两部分组成；
   - 
   
5. 在 commit 时自动格式化代码

   ```
   npm install --save-dev husky
   ```

   Husky:  npm 脚本中使用 githook 

   Lint-staged:  对添加进暂存区的文件运行脚本文件

   在 package.json 文件中添加以下代码

   ```json
   "scripts": {
       "lint": "eslint . --fix"
   },
   "husky": {
       "hooks": {
           "pre-commit": "npm run lint"
       }
   },
   ```
   
6. 设置 dev 环境为 https

   ```
   windows cmd
   set HTTPS=true&&npm start
   
   macos
   HTTPS=true npm start
   
   or
   {
     "start": "HTTPS=true react-scripts start"
   }
   ```

7. 使用 scss，并自动在每个文件注入 通用变量文件

   (以下划线开头的文件表示不需要编译成 css 文件)

   ```
   // 仅安装此依赖重新运行项目，即可使用 scss 
   npm install node-sass -D
   ```

   - 引入全局文件

     ```bash
     npm install craco-sass-resources-loader --save-dev
     
     // craco.config.js 中
     plugins: [
       {
           plugin: sassResourcesLoader,
           options: {
               resources: [
               	resolve('src/styles/_variables.scss'), 		
                 resolve('src/styles/_mixins.scss')
               ]
           }
       }
     ]
     ```

     

   - 启用 css modules

     将对应的 scss 文件命名为 xxx.module.scss

8. 添加环境变量配置

   .env.development

   .env.production

   

   NODE_ENV

   REACT_APP_

9. 配置路径别名，注意必须要在两个文件中同时配置才会生效，注意两个文件中配置的写法

   - 在 `craco.config.js`里新增如下配置

     ```js
     webpack: {
         // 路径别名
         alias: {
             '@': resolve('src'),
             '@components': resolve('src/components'),
             '@containers': resolve('src/containers'),
             '@services': resolve('src/services'),
             '@scripts': resolve('src/scripts'),
             '@assets': resolve('src/assets')
         }
     }
     ```

     

   - 根目录新建一个 tsconfig.extend.json 文件，**注意不是在生成的默认tsconfig.json里改**，run start 的时候会被清掉配置

     ```json
     // tsconfig.extend.json
     {
         "compilerOptions": {
             "baseUrl": "src",
             "paths": {
                 "@/*": ["*"],
                 "@containers/*": ["containers/*"],
                 "@components/*": ["components/*"],
                 "@scripts/*": ["scripts/*"],
                 "@services/*": ["services/*"],
                 "@assets/*": ["assets/*"]
             }
         }
     }
     
     // tsconfig.json 中增加
     "extends": "./tsconfig.extend.json"
     ```

   - 重新 run start 生效，使用示例如下：

     ```js
     import App from '@containers/shared/App'
     ```

10. 自定义 eslint 配置和 stylelint ，commitlint 配置

    - eslint 

      去除 package.json 中 eslintConfig 选项的配置
      
      可以在 craco.config.js 的 eslint 配置项中配置
      
    - 安装依赖

      ```
      // mac
      npm install --save-dev @commitlint/{config-conventional,cli}
      
      // win
      npm install --save-dev @commitlint/config-conventional @commitlint/cli
      ```

      

    - 在根目录下添加配置文件 `commitlint.config.js`

      ```
      module.exports = {
          extends: ['@commitlint/config-conventional']
      }
      ```

    - 在 `package.json` 的 `husky hooks` 中增加

      ```
      "husky": {
          "hooks": {
          // 校验commit时添加的描述信息是否符合配置的commit规范
            "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
          }
        },
      ```

    - 使用 commitizen，使用 git cz 代替 git commit 命令

      ```
      npm install commitizen -g
      
      commitizen init cz-conventional-changelog --save-dev --save-exact
      ```

11.  命名规范

    > 1. css class 命名，小驼峰
    > 2. 

12.  npmrc 固定版本

## 集成库和插件

1.  antd

   ```
   npm install antd --save-dev
   ```

   - 在 `src/index.tsx` 中引入 antd 的样式文件

     ```
     import 'antd/dist/antd.css'
     ```

     

2.  动态生成 class 名称； css modules 方式使用类名，无法配置多个类名的问题，使用 [classnames](https://github.com/JedWatson/classnames)

   ```scss
   // ------------- 多个类名 ------------
   // 非模块化写法
   import './index.scss'
   className = 'error test abc-cdf'
   
   // css modules 方式使用
   import styles from './index.module.scss'
   className = { `${styles.error} ${styles.test} ${styles['abc-cdf']}` } 
   ```

   - classnames

     ```bash
     npm install classnames @types/classnames -D
     ```

     使用示例

     ```react
     import classnames from 'classnames'
     
     <div className=classnames({
         'error': true,
         'test': false
       	'abc-cdf': true
         )>
     </div>
     
     // 与 css modules 配合使用
     <div  className={classnames({
           [styles.error]: true,
           [styles.test]: false
           [styles['abc-cdf']]: true
       })}
      </div>
       
     // result
     <div class='error abc-cdf'></div>
     ```

     

   - 当入口文件 index.scss 和组件的 class 同名时，居然最终使用的是入口文件的，除非入口文件中不存在此类名？？？

3.  路由懒加载（与 react.lazy 、suspense对比）, v6 版本

   ```bash
   npm install -D @loadable/component @types/loadable__component 
   npm install -D react-router-dom @types/react-router-dom
   ```

   使用

   ```js
   export const lazyLoadComponent = (loader: () => Promise<any>) => loadable(loader, { fallback: <PageLoading /> })
   
   const testCom = lazyLoadComponent(() => import('@containers/views/test'))
   
   <Route key={item.id} path={item.path} element={ <testCom />} /> // 注意 element 为组件，不再是组件名称
   ```

   

4.  使用离线 `iconfont` 

   - 首先将导出的字体图标相关的文件放入 `/assets/iconfont/` 文件夹中

   - 方法一：入口文件中同时引入 js、css，使用 class 
   
     ```jsx
     // src/index.tsx
     import './assets/iconfonts/iconfont.css'
     import './assets/iconfonts/iconfont.js'
     
     // components
     <div className='bl-icon-menu-chart'></div>
     ```
   
     
   
   - 方法二：在入口文件中引入 css，自定义 antd 图标组件
   
   ```
   npm install -D @ant-design/icons
   ```
   
   ```tsx
   // 1、src/index.tsx
   import './assets/iconfonts/iconfont.css'
   
   // 2、在 components 文件夹中新建组件 components/IconFont/index.tsx
   
   import { createFromIconfontCN } from '@ant-design/icons'
   
   const IconFont = createFromIconfontCN({
     	// 也可在这里省略配置，在入口文件中引入 js
       scriptUrl: require('@assets/iconfonts/iconfont.js'), 
     	// 组件的额外通用属性
     	extraCommonProps: {
           style: {
               fontSize: '16px',
               cursor: 'pointer'
           }
       }
   })
   
   export default IconFont
   
   
   // 3、在组件中引入使用
   import IconFont from '@components/IconFont'
   
   <IconFont type='bl-icon-menu-log' />
   ```

5. 使用 axios ，[类型声明参照](https://github.com/axios/axios/blob/master/test/typescript/axios.ts)

   ```
   
   ```

   
