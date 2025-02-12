<template><div><h2 id="关于redis" tabindex="-1"><a class="header-anchor" href="#关于redis"><span>关于Redis</span></a></h2>
<p>Redis 是一个开源的、内存中的数据存储系统，常被用作缓存、消息队列、数据库和任务调度工具。</p>
<p>它的全名是 Remote Dictionary Server，虽然 Redis 可以持久化数据到磁盘，但它主要是一个内存数据库，所有的操作都发生在内存中，具有极高的性能。</p>
<h2 id="特征" tabindex="-1"><a class="header-anchor" href="#特征"><span>特征</span></a></h2>
<ul>
<li>高性能</li>
<li>可持久化</li>
<li>支持事务</li>
<li>支持主从复制（Replication）和分布式部署</li>
<li>支持发布/订阅模式，可以通过频道来广播消息，适用于实时通知系统等</li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>数据库的 事务（Transaction）是一个操作序列，这些操作要么完全执行，要么完全不执行。换句话说，事务是一个数据库操作的集合，它们被视为一个单一的“单位”，要么全部成功，要么全部失败，不会出现只部分成功的情况。事务的目的是保证数据的一致性、完整性和可靠性。</p>
</div>
<h2 id="基于-javascript-操作-redis-的node-redis" tabindex="-1"><a class="header-anchor" href="#基于-javascript-操作-redis-的node-redis"><span>基于 JavaScript 操作 Redis 的node-redis</span></a></h2>
<p>node-redis 是一个非常流行的 Redis 客户端库，专门为 Node.js 开发者设计，它允许与 Redis 数据库进行高效的交互。通过 node-redis，你可以在 Node.js 环境中轻松地执行 Redis 命令，并与 Redis 的多种数据结构（如字符串、哈希、列表、集合等）进行交互。</p>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h2>
<ol>
<li>安装node-redis</li>
</ol>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> redis</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>使用</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> redis</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> require</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">redis</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 创建一个默认的客户端连接</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> client</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> redis</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">createClient</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  //默认情况下，Redis 运行在 localhost:6379 上</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 连接成功后的回调</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">client</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">on</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">connect</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Connected to Redis</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //后续的操作，都是基于client对象调用</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">});</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持各类-redis-命令" tabindex="-1"><a class="header-anchor" href="#支持各类-redis-命令"><span>支持各类 Redis 命令</span></a></h2>
<p>字符操作、哈希操作、集合、有序集合、发布/订阅。所有操作相关方法，均可通过client对象引用到并调用</p>
</div></template>


