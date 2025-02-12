<template><div><p>SSR（Server-Side Rendering，服务端渲染）是指将页面内容在服务器端渲染后再发送给客户端的技术。本质上即调用框架（Vue、React等）提供的类似renderToString方法，将组件树渲染为html字符串或字符流，
返回到前端，直接使用。</p>
<h2 id="ssr-的核心流程" tabindex="-1"><a class="header-anchor" href="#ssr-的核心流程"><span>SSR 的核心流程</span></a></h2>
<ol>
<li><strong><code v-pre>服务器渲染</code></strong>：当用户访问网站时，服务器会请求 Vue 组件并渲染它们，将生成的 HTML 内容返回给浏览器。</li>
<li><strong><code v-pre>客户端接管</code></strong>：浏览器接收到服务器渲染的 HTML 后，Vue 会在浏览器端“接管”页面，进行客户端的挂载和交互。这一步通常通过 Hydration 来完成，确保客户端和服务器端的内容一致。</li>
</ol>
<p><strong><code v-pre>Hydration</code></strong> 即：将服务器端渲染的静态 HTML 页面与客户端的 JavaScript 状态和行为进行“重新绑定”的过程。这个过程包括：</p>
<ol>
<li>加载Javascript等静态资源</li>
<li>将组件的事件监听器重新绑定到DOM节点</li>
<li>恢复应用（路由和状态）
<ul>
<li><strong>状态的恢复</strong>，服务端会将最后的状态数据以JSON字符串方式保存在window全局变量上，并注入html。客户端拿到html后读取该变量将其恢复到状态工具或组件里。</li>
<li><strong>路由的恢复</strong>，服务端和客户端同时基于vue-router创建路由，服务端初始化路由时通过 <strong><code v-pre>createMemoryHistory</code></strong> 给history参数赋值。客户端通过 <strong><code v-pre>createWebHistory/createHashHistory</code></strong> 赋值。如此一来服务端的路由操作，在客户端通过app.use挂载了路由后，会自动同步到最后的路由状态。</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> React</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">react</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ReactDOM</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">react-dom</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> App</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./App</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Hydration：将服务器端渲染的 HTML 与 React 组件绑定</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> initialState</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> window</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">__INITIAL_STATE__</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 从服务器传递的初始状态</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ReactDOM</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">hydrate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">App</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> initialState</span><span style="--shiki-light:#999999;--shiki-dark:#666666">={</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">initialState</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> />,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  document</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getElementById</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">root</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在 React 中，这一过程是通过调用 ReactDOM.hydrate() 方法来实现的。</li>
<li>在 Vue.js 中，客户端应用使用 Vue.hydrate() 方法来处理页面元素和 Vue 实例之间的绑定。</li>
</ul>
<p><strong><code v-pre>Hydration 问题与挑战</code></strong></p>
<ul>
<li><strong><code v-pre>性能</code></strong>：Hydration 的过程可能会增加客户端的加载时间，尤其是对于大型应用来说。过多的 JavaScript 代码可能导致延迟，影响首屏渲染时间。</li>
<li><strong><code v-pre>不匹配问题</code></strong>：如果服务器渲染的 HTML 与客户端 React 组件的渲染不一致，Hydration 可能失败，导致页面闪烁或错误。通常是由于组件的状态不同步、环境差异或数据不一致等问题。</li>
<li><strong><code v-pre>开发复杂性</code></strong>：Hydration 需要保证服务器和客户端的渲染一致，可能需要额外的配置和开发精细化管理，尤其是在复杂的应用场景下。</li>
</ul>
<h2 id="服务器端渲染条件" tabindex="-1"><a class="header-anchor" href="#服务器端渲染条件"><span>服务器端渲染条件</span></a></h2>
<ol>
<li><strong><code v-pre>需要一台运行支持 SSR 的服务器</code></strong>: 可以是物理服务器、云服务器或虚拟主机。能够运行后端代码的运行时环境（如 Node.js、PHP、Python、Ruby 等）。</li>
<li><strong><code v-pre>运行时环境</code></strong>:
<ul>
<li>Node.js：如果使用现代 JavaScript 框架（如 Next.js 或 Nuxt.js）进行 SSR，需要安装 Node.js。</li>
<li>Python：如使用 Django + 模板引擎，需支持 Python 环境。</li>
<li>PHP：如使用 Laravel 或传统的 PHP 模板渲染。</li>
<li>Java：如使用 Spring Boot 或 JSP。</li>
</ul>
</li>
</ol>
<h2 id="vue-3-的-ssr" tabindex="-1"><a class="header-anchor" href="#vue-3-的-ssr"><span>Vue 3 的 SSR</span></a></h2>
<p>Vue 3 提供了一些 API 来帮助实现服务端渲染。关键步骤如下</p>
<ol>
<li><strong><code v-pre>创建一个 Vue 服务器端应用</code></strong></li>
<li><strong><code v-pre>渲染 Vue 应用为 HTML</code></strong></li>
<li><strong><code v-pre>处理客户端挂载</code></strong>
具体可参考</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//1. 安装@vue/server-renderer模块</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//2. 创建SSR应用，并返回</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> renderToString</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@vue/server-renderer</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> createSSRApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> App</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./App.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> app</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> createSSRApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">App</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 服务端生成的 HTML 字符串，并准返回</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">renderToString</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666">((</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">html</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">html</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">});</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//或者流式返回</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> stream</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> renderToNodeStream</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">stream</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pipe</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">process</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">stdout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 将流输出到标准输出或 HTTP 响应</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端渲染通常需要两个入口文件。一个用于服务端生成 HTML，一个用于客户端 Hydration。</p>
<div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//server.js</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> createSSRApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> async</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> render</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">  const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> app</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> createSSRApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ({</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> message</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Hello from SSR!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }),</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> `</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">&#x3C;div>{{ message }}&#x3C;/div></span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">`</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  });</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 将 app 转为 HTML 字符串</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">  const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> appContent</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> await</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> renderToString</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 注入预取的数据</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> `</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">&#x3C;html></span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    &#x3C;body></span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">      &#x3C;div id="app"></span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">appContent</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">&#x3C;/div></span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">      &#x3C;script>window.__INITIAL_STATE__ = </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">JSON</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">stringify</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> message</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Hello from SSR!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> })</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">&#x3C;/script></span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    &#x3C;/body></span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  &#x3C;/html></span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">`</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//client.js</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> createSSRApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> app</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> createSSRApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> window</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">__INITIAL_STATE__</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> `</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">&#x3C;div>{{ message }}&#x3C;/div></span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">`</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">});</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mount</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">#app</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-nuxt-3-实现-ssr" tabindex="-1"><a class="header-anchor" href="#使用-nuxt-3-实现-ssr"><span>使用 Nuxt 3 实现 SSR</span></a></h2>
<p>Nuxt 是 Vue 生态中专为 SSR 提供的框架，提供了开箱即用的 SSR 功能。Nuxt 会自动处理页面渲染、路由管理、静态资源优化等工作，开发者可以专注于业务逻辑。</p>
<p>请<RouteLink to="/learn/vue/LvymtQUA/">参考</RouteLink></p>
<h2 id="nuxt-相关问题" tabindex="-1"><a class="header-anchor" href="#nuxt-相关问题"><span>Nuxt 相关问题</span></a></h2>
<ol>
<li>
<p><strong><code v-pre>Nuxt.js 与 Vue.js 的区别</code></strong>   Nuxt.js 是基于 Vue.js 构建的框架，提供 SSR、静态站点生成等功能.</p>
</li>
<li>
<p><strong><code v-pre>Nuxt.js 支持哪些渲染模式</code></strong></p>
<ul>
<li>universal（SSR）：服务端渲染</li>
<li>spa（单页应用）：完全在客户端渲染</li>
<li>static（静态生成）：生成纯静态页面，适合 SEO 和快速加载</li>
</ul>
</li>
<li>
<p><strong><code v-pre>如何自定义 Nuxt.js 的默认布局</code></strong>    创建layouts/default.vue 文件，定义默认布局</p>
</li>
<li>
<p><strong><code v-pre>Nuxt.js 是如何生成路由的？</code></strong>    根据 pages 目录的文件结构自动生成路由</p>
</li>
<li>
<p><strong><code v-pre>如何在 Nuxt.js 中定义动态路由</code></strong>  在 pages 目录中使用方括号定义动态参数</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>pages/</span></span>
<span class="line"><span>└── user/</span></span>
<span class="line"><span>   └── [id].vue   -> '/user/:id'</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li id="nuxt_middle_ware">
<p><strong><code v-pre>如何实现路由中间件？</code></strong>    在 middleware 目录下定义中间件，然后在页面或全局使用</p>
<div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// middleware/auth.js</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ({</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> store</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> redirect</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> })</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">   if</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">!</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">store</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">state</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">authenticated</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">      return</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> redirect</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/login</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">   }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// nuxt.config.js</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">   router</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      middleware</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">auth</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">   }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>在 Nuxt.js 中，<strong>中间件是一个函数</strong>。所有中间件文件保存在 middleware/ 目录下，每个中间件是一个导出的函数。</p>
<p>它在页面或路由切换之前执行，用于处理特定逻辑，比如验证用户身份、重定向、检查权限等</p>
<ul>
<li><strong><code v-pre>局部中间件</code></strong>，在组件里通过 <strong><code v-pre>definePageMeta</code></strong> 指定</li>
<li><strong><code v-pre>全局中间件</code></strong>，在nuxt.config.ts里指定</li>
</ul>
<p>中间件里能访问的参数和方法：</p>
<ul>
<li>to：目标路由对象，表示用户即将访问的路由。</li>
<li>from：来源路由对象，表示用户之前访问的路由。</li>
<li>navigateTo()：用于重定向用户到其他页面。</li>
<li>abortNavigation()：终止当前导航。</li>
</ul>
</div>
</li>
<li>
<p><strong><code v-pre>在 Nuxt.js 中如何获取异步数据</code></strong>    setup模式直接编译异步函数接口</p>
</li>
</ol>
<h2 id="ssr-的性能优化" tabindex="-1"><a class="header-anchor" href="#ssr-的性能优化"><span>SSR 的性能优化</span></a></h2>
<ol>
<li>缓存 HTML 内容</li>
<li>对于一些不需要动态更新的页面，可以使用预渲染（Prerendering），预先在构建时生成 HTML 文件，避免每次都通过服务器渲染</li>
<li>异步组件加载：在 SSR 中，尽量使用异步组件加载，这样可以按需加载组件，减少初始页面的 JavaScript 体积。</li>
<li>懒加载路由：通过 Vue Router 的懒加载机制，按需加载路由和页面，减少初始页面加载的内容。</li>
<li>Tree-shaking 和代码分割：通过 Webpack 或 Vite 的代码分割和 tree-shaking，去除无用代码，减少 JavaScript 的体积，提高加载速度。</li>
<li>减少客户端的 JavaScript 负担：虽然 SSR 已经提供了服务器端渲染的 HTML，但在客户端的“混合”过程中，Vue 会需要对 HTML 进行绑定。如果应用的 JavaScript 太大，混合过程可能会变慢。</li>
<li>SSR 与 CSR 的组合。 SSR 用于首屏加载，确保快速显示页面内容。CSR 用于后续导航和动态内容，避免每次用户交互都重新渲染页面，提高用户体验。</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>CSR 是指浏览器下载一个空的 HTML 页面（通常是一个包含了最基本结构的 HTML 文件），然后客户端的 JavaScript 代码接管页面渲染，动态地生成页面的内容。页面内容是通过 JavaScript 在浏览器中生成的，通常通过 Ajax 或 Fetch 请求从服务器获取数据</p>
</div>
</div></template>


