<template><div><h2 id="指令和插件" tabindex="-1"><a class="header-anchor" href="#指令和插件"><span>指令和插件</span></a></h2>
<ul>
<li>指令操作DOM或者模板交互</li>
<li>插件扩展框架功能、抽象复用逻辑</li>
<li>pinia插件（一个函数，pinia实例.use注册）</li>
</ul>
<h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板"><span>模板</span></a></h2>
<ul>
<li>定义组件布局，替代有JSX、h函数</li>
</ul>
<h2 id="懒加载" tabindex="-1"><a class="header-anchor" href="#懒加载"><span>懒加载</span></a></h2>
<ul>
<li>路由懒加载、组件懒加载、动态依赖懒加载、import.meta.glob会自动触发构建时的代码分割</li>
<li>也可以通过编译工具链里的SplitChunks等配置，手动控制代码分割。比如最大代码块，最小代码快，哪些代码块一起打包分割等。</li>
<li>import.meta.glob为vite功能，支持扫面指定路径，并生成动态导入对象，方便代码中批量动态导入</li>
<li>图片懒加载借助第三方插件、或者自定义指令</li>
</ul>
<h2 id="ssr-in-vue3" tabindex="-1"><a class="header-anchor" href="#ssr-in-vue3"><span>SSR in Vue3</span></a></h2>
<ul>
<li>原生支持</li>
<li>Nuxt.js框架</li>
</ul>
<h2 id="虚拟dom" tabindex="-1"><a class="header-anchor" href="#虚拟dom"><span>虚拟DOM</span></a></h2>
<ul>
<li>一个递归的Javascript对象</li>
</ul>
<h2 id="concurrent-mode" tabindex="-1"><a class="header-anchor" href="#concurrent-mode"><span>Concurrent mode</span></a></h2>
<ul>
<li>新版本的一组新功能和渲染机制，支持任务优先级、切分、中断、恢复。在最新版本里已细分为<mark>自动批处理</mark>、<mark>startTransition</mark>、<mark>useDeferredValue</mark>等特性</li>
</ul>
<h2 id="节流防抖" tabindex="-1"><a class="header-anchor" href="#节流防抖"><span>节流防抖</span></a></h2>
<ul>
<li>节流，确保在一定时间间隔内，函数最多只会被执行一次</li>
<li>防抖，将多次高频触发的事件合并为一次的技术。只有当事件触发停止后的一段时间内，函数才会被执行。</li>
</ul>
<h2 id="purecomponent" tabindex="-1"><a class="header-anchor" href="#purecomponent"><span>PureComponent</span></a></h2>
<ul>
<li>类组件分支，内部自动实现了浅比较判断是否重新渲染，起到优化性能目的</li>
</ul>
<h2 id="suspense和lazy-loading" tabindex="-1"><a class="header-anchor" href="#suspense和lazy-loading"><span>Suspense和Lazy Loading</span></a></h2>
<ul>
<li>React.Lazy只加载React组件或路由（页面组件）、且需配合Suspense使用</li>
<li>普通动态import无此限制。二者都会自动触发代码分割</li>
</ul>
<h2 id="传输压缩" tabindex="-1"><a class="header-anchor" href="#传输压缩"><span>传输压缩</span></a></h2>
<ul>
<li>GZip、deflate、Brotli</li>
<li>htt2/3 头部压缩</li>
</ul>
<h2 id="多路复用" tabindex="-1"><a class="header-anchor" href="#多路复用"><span>多路复用</span></a></h2>
<ul>
<li>nginx 配置https证书、listen命令后追加ssl http2;</li>
<li>http3基于quic协议的多路复用，更高效。追加listen 443 quic reuseport;</li>
</ul>
</div></template>


