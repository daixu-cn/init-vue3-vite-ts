# 最完美的 vite + vue3 + ts 初始项目结构
# 依赖安装
- `npm install` 安装
- 建议不要使用 `cnpm` 不然部分依赖可能安装出错
# GIT提交
- 项目配置了 husky 所以常规的 `git commit` 命令是无法通过提交的。
- 如果使用 `git commit -m "xxx"` 提交，那么请遵循提交格式：[https://github.com/conventional-changelog/commitlint/#what-is-commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)
- 对代码进行提交也可以使用以下任意指令：
  - npx cz
  - npm run commit

| Type     | 作用                                                               |
|----------|------------------------------------------------------------------|
| feat     | 新增特性 (feature)                                                   |
| fix      | 修复 Bug(bug fix)                                                  |
| docs     | 修改文档 (documentation)                                             |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)        |
| refactor | 代码重构(refactor)                                                   |
| perf     | 改善性能(A code change that improves performance)                    |
| test     | 测试(when adding missing tests)                                    |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                       |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                            |
| revert   | 代码回退                                                             |

#Scss配置
全局配置文件在：`src/assets/scss/global.scss`
- Scss入口 `src\assets\scss\global.scss`
- 全局变量存放在 `src\assets\scss\var.scss`
- 如需修改 `Element-Plus` 的主题，请找到 `src\assets\scss\ElementPlus.scss` 的文件即可直接配置。

# 全局环境变量配置
- 找到以下两个根目录下的文件：
  - 开发环境变量：`.env.development`
  - 生产环境变量：`.env.production`
  - 使用：*import.meta.env.变量名（例如：import.meta.env.VITE_APP_BASE_API）*
- 自定义增加环境变量
  - 先在上述两个文件中分别定义好变量
  - 然后找到 `src/env.d.ts` 文件后， 在 `ImportMetaEnv` 接口中也定义一下你要设置的环境变量。

# 接口调用
- 封装的 `axios` 在 `src/server/http/index.ts` 
- 需要用到的地方引入 `import http from '@/utils/http'`
- 使用举例：http.get(url, params, config)、http.post(url, data, config)

# 全局文件和工具文件
- 全局文件：`src/assets/js/global/`
  - 其中 `data.ts` 存放全局变量，如果需要使用，请引入 `import {变量名} from '@/src/globals/data'`
  - 你自己的全局变量也可以放在这里
- 工具文件：`src/assets/js/utils/`
  - 这边放置的是一些工具方法，如果需要使用，请引入 `import {函数名} from '@/src/utils/api'`
  - 另外本项目引入了 `dayjs` 所以在 `utils` 下还有一个 `time` 的文件夹，这里面已经定义好了两个时间格式化函数