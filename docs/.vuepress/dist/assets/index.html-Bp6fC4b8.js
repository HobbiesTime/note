import{_ as a,c as i,a as t,o}from"./app-CBuaBQLw.js";const l={};function s(n,e){return o(),i("div",null,e[0]||(e[0]=[t('<p>Vite 是一个现代化的前端构建工具。</p><h2 id="优势" tabindex="-1"><a class="header-anchor" href="#优势"><span>优势</span></a></h2><ul><li><strong><code>快速启动</code></strong>：</li></ul><p>基于 <mark>ESM</mark> 来加速开发服务器的启动速度。<mark>不需要构建整个项目</mark>，而是通过<mark>按需加载和转译</mark>来实现即时预览。（基于esbuild）</p><ul><li><strong><code>热替换(HMR)</code></strong>：</li></ul><p>Vite 的 HMR 非常快速，因为它<mark>只替换改变的模块</mark>，而不是重新打包整个项目。</p><ul><li><strong><code>构建优化</code></strong>：</li></ul><p>Vite 内置了对现代浏览器的优化，并且在生产构建时使用了 Rollup，这使得<mark>构建的速度</mark>和<mark>输出体积</mark>都得到优化。</p><h2 id="vite-与-webpack-的区别是什么" tabindex="-1"><a class="header-anchor" href="#vite-与-webpack-的区别是什么"><span>Vite 与 Webpack 的区别是什么</span></a></h2><ul><li><strong><code>启动速度</code></strong></li></ul><p>Vite 通过原生 ESM 实现了快速启动，而 Webpack 需要构建整个项目才能启动开发服务器，因此 Vite 启动速度远快于 Webpack。</p><ul><li><strong><code>构建方式</code></strong></li></ul><ol><li>Vite 在开发模式下不需要构建整个项目，而是通过按需加载和转换每个模块来进行开发。</li><li>Webpack 在开发过程中通常会构建整个项目，尽管可以通过配置优化，但速度相对较慢。</li></ol><ul><li><strong><code>构建优化</code></strong></li></ul><ol><li>Vite 在生产模式下使用 Rollup 来进行打包，Rollup 对于 Tree Shaking 和代码拆分非常高效，构建结果通常比 Webpack 更小。</li><li>Webpack 对于大型项目的构建优化可能需要更多的配置和插件支持。</li></ol><ul><li><strong><code>支持的功能</code></strong>：</li></ul><p>Vite 开箱即用支持 TypeScript、JSX、SASS 等，并且插件机制非常灵活，易于扩展。</p><ul><li><strong><code>HMR 性能</code></strong>：</li></ul><p>Vite 的 HMR 比 Webpack 快，尤其是在处理大型项目时，Webpack 的 HMR 性能会逐渐下降。</p><h2 id="如何配置-vite-来支持多页面应用" tabindex="-1"><a class="header-anchor" href="#如何配置-vite-来支持多页面应用"><span>如何配置 Vite 来支持多页面应用</span></a></h2><p>Vite 默认是为单页面应用（SPA）优化的，但通过一些配置，Vite 也能够很好地支持多页面应用。Vite 的多页面应用配置主要是通过 <mark>build.rollupOptions.input</mark> 来实现的.</p><h2 id="vite-如何实现快速热更新" tabindex="-1"><a class="header-anchor" href="#vite-如何实现快速热更新"><span>Vite 如何实现快速热更新？</span></a></h2><p>Vite 利用原生 ES 模块和增量编译技术，只编译和更新修改过的模块，避免了传统工具需要重新构建整个应用的性能瓶颈。</p><h2 id="vite-与-webpack-哪个更适合生产环境" tabindex="-1"><a class="header-anchor" href="#vite-与-webpack-哪个更适合生产环境"><span>Vite 与 Webpack 哪个更适合生产环境？</span></a></h2><p>Webpack 在生产构建上有更多的插件和配置选项，但 Vite 在构建速度和开发体验上更优秀。如果需要非常复杂的构建配置，Webpack 可能会更适合。否则，Vite 是更快速和现代的选择。</p><h2 id="vite-如何处理依赖" tabindex="-1"><a class="header-anchor" href="#vite-如何处理依赖"><span>Vite 如何处理依赖？</span></a></h2><p>Vite 使用了浏览器原生的模块系统，在开发过程中直接请求 ES 模块，同时对依赖（如第三方库）进行预构建，以提高性能。</p><h2 id="vite-如何优化生产环境构建" tabindex="-1"><a class="header-anchor" href="#vite-如何优化生产环境构建"><span>Vite 如何优化生产环境构建？</span></a></h2><p>Vite 在生产环境中使用 Rollup 进行优化，包括代码分割、树摇、懒加载等特性，从而生成高效、优化过的生产代码。</p><h2 id="none-esm" tabindex="-1"><a class="header-anchor" href="#none-esm"><span>Vite 如何处理非ESM模块的兼容？</span></a></h2><p>开发模式，Vite会尝试<mark>自动将CommonJS模块转换为ESM</mark>；复杂模块可以结合<mark>optimizeDeps</mark>配置；或者直接引入<mark>vite-plugin-commonjs</mark>插件进行处理。</p><p>构建模式，需要引入插件<mark>vite-plugin-commonjs</mark>进行处理。</p><p>对于动态引入的非ESM模块，可以借助<mark>vite-plugin-dynamic-import-polyfill</mark>进行处理</p><h2 id="rollup" tabindex="-1"><a class="header-anchor" href="#rollup"><span>Rollup</span></a></h2><p>Rollup 是一个现代的 JavaScript 打包工具，特别适用于库和框架的打包，因其对 ES6 模块的原生支持以及高度的构建优化（如树摇、代码分割）而受到广泛欢迎.</p><h3 id="rollup-如何处理-es6-模块和-commonjs-模块之间的兼容性" tabindex="-1"><a class="header-anchor" href="#rollup-如何处理-es6-模块和-commonjs-模块之间的兼容性"><span>Rollup 如何处理 ES6 模块和 CommonJS 模块之间的兼容性</span></a></h3><p>Rollup 提供了 @rollup/plugin-commonjs 插件，它能够将 CommonJS 模块转为 ES6 模块，从而让 Rollup 能够进行优化.</p><h3 id="什么是树摇-tree-shaking-rollup-如何实现它" tabindex="-1"><a class="header-anchor" href="#什么是树摇-tree-shaking-rollup-如何实现它"><span>什么是树摇（tree shaking）？Rollup 如何实现它</span></a></h3><p>树摇（Tree Shaking）是一种<mark>基于ESM</mark>进行代码静态分析的方式，去除<mark>未引用的代码</mark>（即死代码）的方法。</p><p>Rollup 在打包时，能够分析 ES6 模块的 import 和 export，并在生成最终的 bundle 时移除不被使用的模块或代码段，从而减少最终输出文件的体积。为了实现树摇，模块必须使用 ES6 的静态语法（import 和 export），而不是 CommonJS 的 require 和 module.exports。</p><h3 id="rollup-和-webpack-有哪些主要区别" tabindex="-1"><a class="header-anchor" href="#rollup-和-webpack-有哪些主要区别"><span>Rollup 和 Webpack 有哪些主要区别</span></a></h3><ol><li>Rollup 专注于打包</li><li>Rollup 原生支持 ES6 模块，Webpack 默认支持 CommonJS 和 AMD</li><li>Rollup 对树摇的优化更为高效，能够产生更加精简的代码</li><li>Rollup 通常生成一个单一的输出文件. 而 Webpack 可以生成多个输出文件和复杂的代码分割策略。</li></ol><h3 id="rollup-如何进行代码分割" tabindex="-1"><a class="header-anchor" href="#rollup-如何进行代码分割"><span>Rollup 如何进行代码分割？</span></a></h3><p>通过设置 output.manualChunks 或 output.chunkFileNames，可以将代码分割成多个较小的包，按需加载。Rollup 会在生成的输出文件中包含所有必要的模块，并尽可能将共享模块提取到单独的 chunk 中。 Rollup 提供的manualChunks 选项，让你手动指定拆分策略</p><h2 id="esbuild" tabindex="-1"><a class="header-anchor" href="#esbuild"><span>esbuild</span></a></h2><p>esbuild 是一个现代的 JavaScript 和 TypeScript 打包工具，旨在极大地提高构建速度。它使用 Go 编写，设计时考虑了高性能，尤其是在处理大型项目时，它比传统的 JavaScript 构建工具（如 Webpack 和 Rollup）快得多。esbuild 支持 ES6 模块、TypeScript 编译、代码拆分和压缩等功能。</p><h3 id="性能优势" tabindex="-1"><a class="header-anchor" href="#性能优势"><span>性能优势</span></a></h3><ol><li>多线程并发</li><li>算法优势</li><li>内存效率高</li><li>配置简答</li></ol>',48)]))}const r=a(l,[["render",s],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/learn/vite/L6uVy/","title":"Vite","lang":"en-US","frontmatter":{"title":"Vite","createTime":"2025/01/18 07:21:14","permalink":"/learn/vite/L6uVy/","author":"Jack","tags":["Vite","前端工程化"],"description":"Vite 是一个现代化的前端构建工具。 优势 快速启动： 基于 ESM 来加速开发服务器的启动速度。不需要构建整个项目，而是通过按需加载和转译来实现即时预览。（基于esbuild） 热替换(HMR)： Vite 的 HMR 非常快速，因为它只替换改变的模块，而不是重新打包整个项目。 构建优化： Vite 内置了对现代浏览器的优化，并且在生产构建时使用了...","head":[["meta",{"property":"og:url","content":"https://duduainy.top/learn/vite/L6uVy/"}],["meta",{"property":"og:site_name","content":"Seasoned Jack"}],["meta",{"property":"og:title","content":"Vite"}],["meta",{"property":"og:description","content":"Vite 是一个现代化的前端构建工具。 优势 快速启动： 基于 ESM 来加速开发服务器的启动速度。不需要构建整个项目，而是通过按需加载和转译来实现即时预览。（基于esbuild） 热替换(HMR)： Vite 的 HMR 非常快速，因为它只替换改变的模块，而不是重新打包整个项目。 构建优化： Vite 内置了对现代浏览器的优化，并且在生产构建时使用了..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-02T02:54:23.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"Vite"}],["meta",{"property":"article:tag","content":"前端工程化"}],["meta",{"property":"article:modified_time","content":"2025-02-02T02:54:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vite\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-02T02:54:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\"}]}"]]},"headers":[],"readingTime":{"minutes":4.58,"words":1374},"git":{"updatedTime":1738464863000,"contributors":[{"name":"meishenlieshou","username":"meishenlieshou","email":"meishenlieshou@gmail.com","commits":6,"avatar":"https://avatars.githubusercontent.com/meishenlieshou?v=4","url":"https://github.com/meishenlieshou"}],"changelog":[{"hash":"769de3005ec130a8eb12872153f4ae46914f5379","date":1737195346000,"email":"meishenlieshou@gmail.com","author":"meishenlieshou","message":"提交","commitUrl":"https://github.com/meishenlieshou/note/commit/769de3005ec130a8eb12872153f4ae46914f5379"},{"hash":"cbadb444786cf8f693f9336265e4299509d38d2f","date":1737200148000,"email":"meishenlieshou@gmail.com","author":"meishenlieshou","message":"更新提交","commitUrl":"https://github.com/meishenlieshou/note/commit/cbadb444786cf8f693f9336265e4299509d38d2f"},{"hash":"225ab7164955800e5219973d84f4596336c2544e","date":1737417530000,"email":"meishenlieshou@gmail.com","author":"meishenlieshou","message":"笔记提交","commitUrl":"https://github.com/meishenlieshou/note/commit/225ab7164955800e5219973d84f4596336c2544e"},{"hash":"a72e26a3c4d7fdeadb710dfd5771b34ff4cc944b","date":1737420414000,"email":"meishenlieshou@gmail.com","author":"meishenlieshou","message":"笔记更新","commitUrl":"https://github.com/meishenlieshou/note/commit/a72e26a3c4d7fdeadb710dfd5771b34ff4cc944b"},{"hash":"ad21a3093205b021ecafccde6975c9358c09d597","date":1738411730000,"email":"meishenlieshou@gmail.com","author":"meishenlieshou","message":"修改调整","commitUrl":"https://github.com/meishenlieshou/note/commit/ad21a3093205b021ecafccde6975c9358c09d597"},{"hash":"d1e4eccc331618ab9feb2b4252a4e031a80ed07d","date":1738464863000,"email":"meishenlieshou@gmail.com","author":"meishenlieshou","message":"提交","commitUrl":"https://github.com/meishenlieshou/note/commit/d1e4eccc331618ab9feb2b4252a4e031a80ed07d"}]},"autoDesc":true,"filePathRelative":"notes/learn/vue/Vite.md","bulletin":false}');export{r as comp,c as data};
