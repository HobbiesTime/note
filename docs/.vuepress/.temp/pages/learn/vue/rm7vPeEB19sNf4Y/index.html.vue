<template><div><h2 id="响应式系统优化" tabindex="-1"><a class="header-anchor" href="#响应式系统优化"><span>响应式系统优化</span></a></h2>
<ol>
<li><strong><code v-pre>避免不必要的响应式数据</code></strong></li>
<li><strong><code v-pre>合理使用 computed 和 避免不要的watch</code></strong>   尽量避免watch中不必要操作，初始化尽量避免立即触发watch执行，[watchEffect会立即执行](/learn/vue/27zpUq4W6kPrGTR5dz       /#watch&amp;watchEffect)</li>
<li><strong><code v-pre>响应式对象的选择性访问</code></strong>   当需要从响应式对象中获取特定属性时，尽量手动解构属性而不是传递整个对象。这样可以避免不必要的依赖跟踪</li>
</ol>
<h2 id="组件渲染优化" tabindex="-1"><a class="header-anchor" href="#组件渲染优化"><span>组件渲染优化</span></a></h2>
<ol>
<li><strong><code v-pre>避免不必要的渲染</code></strong>
<ul>
<li>v-show 替代 v-if</li>
<li>使用 key 来优化 v-for 渲染</li>
</ul>
</li>
<li><strong><code v-pre>避免组件的频繁重新渲染</code></strong>
<ul>
<li>v-memo：使用 v-memo 缓存组件或元素的渲染结果，避免在依赖不变的情况下重新渲染。</li>
<li>手动控制重新渲染：通过 watch、computed 或 ref 的 lazy 特性，控制组件是否需要更新，避免多余的重新渲染。</li>
<li>v-once: 如果某个部分的视图只需要渲染一次，或者某些数据不会经常改变，可以使用 v-once 来渲染该部分视图，避免每次更新时都重新渲染。</li>
</ul>
</li>
<li><strong><code v-pre>拆分大组件</code></strong>
对于较大的组件，可以按需加载，避免在初始渲染时加载过多的内容。</li>
<li><strong><code v-pre>&lt;KeepAlive&gt; 和动态组件</code></strong>
在动态加载的页面或组件上，使用<code v-pre>&lt;keep-alive&gt;</code>来缓存组件状态，避免重复渲染。特别适用于切换路由时，缓存某些页面的状态。</li>
</ol>
<h2 id="异步加载和代码分割" tabindex="-1"><a class="header-anchor" href="#异步加载和代码分割"><span>异步加载和代码分割</span></a></h2>
<ol>
<li><strong><code v-pre>路由懒加载</code></strong><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> routes</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    path</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/about</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    component</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> import</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./views/About.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong><code v-pre>组件懒加载</code></strong><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> AsyncComponent</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineAsyncComponent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> import</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./components/AsyncComponent.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">));</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>对于不常用的组件，通过 defineAsyncComponent 来延迟加载组件，只有在需要时才加载组件。</li>
</ol>
<h2 id="状态管理优化" tabindex="-1"><a class="header-anchor" href="#状态管理优化"><span>状态管理优化</span></a></h2>
<ol>
<li><strong><code v-pre>局部状态管理</code></strong>
使用模块化的状态管理，将应用的状态分成多个小的 store，而不是将所有的状态都放在一个大的全局 store 中，这有助于提高性能和可维护性。</li>
<li><strong><code v-pre>避免多次提交 mutation</code></strong>
在 Vuex 或 Pinia 中，避免在渲染过程中进行多次状态更新，尽量合并多个状态修改操作为一个批量提交，减少渲染次数。</li>
</ol>
<h2 id="事件和方法优化" tabindex="-1"><a class="header-anchor" href="#事件和方法优化"><span>事件和方法优化</span></a></h2>
<ol>
<li><strong><code v-pre>事件委托</code></strong>  尽量减少在每个子元素上绑定事件，可以通过事件委托将事件绑定到父元素上，以减少事件监听器的数量。</li>
<li><strong><code v-pre>使用 debounce 或 throttle 优化频繁触发的事件</code></strong></li>
</ol>
<h2 id="图片和资源优化" tabindex="-1"><a class="header-anchor" href="#图片和资源优化"><span>图片和资源优化</span></a></h2>
<ol>
<li><strong><code v-pre>图片懒加载</code></strong></li>
<li><strong><code v-pre>使用 WebP 格式</code></strong></li>
</ol>
<h2 id="缓存和服务端渲染-ssr" tabindex="-1"><a class="header-anchor" href="#缓存和服务端渲染-ssr"><span>缓存和服务端渲染（SSR）</span></a></h2>
<ol>
<li><strong><code v-pre>缓存策略</code></strong>
对于一些不常变化的内容，可以采用客户端缓存或服务器端缓存技术，减少重复的请求，提升响应速度。</li>
<li><strong><code v-pre>服务端渲染（SSR）和静态生成（SSG）</code></strong></li>
</ol>
</div></template>


