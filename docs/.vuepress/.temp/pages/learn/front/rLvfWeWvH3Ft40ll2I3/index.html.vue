<template><div><h2 id="关于less" tabindex="-1"><a class="header-anchor" href="#关于less"><span>关于Less</span></a></h2>
<p>LESS 是一种扩展了 CSS 的预处理器语言，它在最终生成 CSS 文件之前，会经过编译的步骤，从而允许你使用更高级的语言特性。最终生成的 CSS 文件可以在浏览器中直接使用。</p>
<h2 id="在项目中使用" tabindex="-1"><a class="header-anchor" href="#在项目中使用"><span>在项目中使用</span></a></h2>
<p>Webpack/Vite项目中使用less，需要引入less包，对less文件进行处理。</p>
<h2 id="less-的特点" tabindex="-1"><a class="header-anchor" href="#less-的特点"><span>LESS 的特点</span></a></h2>
<ul>
<li>
<p><strong><code v-pre>变量</code></strong>：在less文件里通过@前缀符定义变量，css规则里引用。</p>
</li>
<li>
<p><strong><code v-pre>嵌套规则</code></strong>：可以在样式规则中嵌套其他规则，使得 CSS 更加结构化和清晰。</p>
</li>
<li>
<p><strong><code v-pre>混合（Mixins）</code></strong>：可以定义样式规则并在多个地方复用，类似函数调用的概念。</p>
</li>
</ul>
<div class="language-less line-numbers-mode" data-ext="less" data-title="less"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//按需传参混合-----------</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">rounded-corners</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(@</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">radius</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  -webkit-border-radius</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">radius</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  -moz-border-radius</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">radius</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  border-radius</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">radius</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">box</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">rounded-corners</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//命名混合-----------</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">primary</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> white</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">007BFF</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">secondary</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> black</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">6c757d</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">primary</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//带逻辑的混合-----------</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(@</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> when</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (@</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">width</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ></span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> and</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (@</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">height</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ></span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">image</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 50</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 触发条件，应用样式</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">empty</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">-10</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 条件不满足，不输出样式</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong><code v-pre>运算</code></strong>：支持在变量里、或者css规则里进行数学运算，如加、减、乘、除等。</p>
</li>
<li>
<p><strong><code v-pre>导入（Import）</code></strong>：支持 @import 导入其他 LESS 文件，使得代码更加模块化。</p>
</li>
<li>
<p><strong><code v-pre>条件判断</code></strong>：支持 if-else 判断，使得 CSS 可以动态调整。</p>
</li>
<li>
<p><strong><code v-pre>函数</code></strong>：可以创建自定义函数，进一步增强样式的灵活性和可重用性。</p>
<p>包括颜色、数学运算、字符串处理、类型检查、用于逻辑判断的if()</p>
</li>
<li>
<p><strong><code v-pre>自定义函数</code></strong></p>
<p>在vite或者webpack配置less的参数里，通过plugins引入封装了自定义函数的less插件，同时开启javascriptEnabled。less插件里定义自定义函数的格式为</p>
<div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> MyLessPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    install</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">lessInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> pluginManager</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      //新增double函数</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">      lessInstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">functions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">functionRegistry</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">double</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        //...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      //其它函数</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  };</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="常用的选择器" tabindex="-1"><a class="header-anchor" href="#常用的选择器"><span>常用的选择器</span></a></h2>
<table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>嵌套选择器</td>
<td>定义层级结构</td>
<td><code v-pre>.parent { .child { } }</code></td>
</tr>
<tr>
<td>父选择器 (<code v-pre>&amp;</code>)</td>
<td>引用当前选择器</td>
<td><code v-pre>&amp;:hover { }</code></td>
</tr>
<tr>
<td>属性选择器</td>
<td>根据属性匹配元素</td>
<td><code v-pre>[type=&quot;text&quot;] { }</code></td>
</tr>
<tr>
<td>子选择器 (<code v-pre>&gt;</code>)</td>
<td>选择直接子元素</td>
<td><code v-pre>.parent &gt; .child { }</code></td>
</tr>
<tr>
<td>通配符选择器 (<code v-pre>*</code>)</td>
<td>选择所有子元素</td>
<td><code v-pre>.parent * { }</code></td>
</tr>
<tr>
<td>动态选择器</td>
<td>使用变量动态生成选择器</td>
<td><code v-pre>.@{name} { }</code></td>
</tr>
<tr>
<td>兄弟选择器</td>
<td>匹配相邻或通用兄弟元素</td>
<td><code v-pre>p + p, p ~ p { }</code></td>
</tr>
<tr>
<td>媒体查询嵌套</td>
<td>在选择器中嵌套媒体查询</td>
<td><code v-pre>@media (max-width: 600px)</code></td>
</tr>
</tbody>
</table>
</div></template>


