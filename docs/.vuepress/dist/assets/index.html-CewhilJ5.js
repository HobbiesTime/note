import{_ as i,c as a,a as n,o as t}from"./app-CBuaBQLw.js";const e={};function h(l,s){return t(),a("div",null,s[0]||(s[0]=[n(`<h2 id="what-is-react-query-or-swr" tabindex="-1"><a class="header-anchor" href="#what-is-react-query-or-swr"><span>What is React Query or SWR</span></a></h2><p>Both React Query and SWR are libraries designed to handle data fetching and state management for server-side data in React applications. They aim to simplify and enhance the process of fetching, caching, and updating remote data, often replacing traditional approaches like useEffect and local state management.</p><p>React Query is a data-fetching library with powerful tools for managing server-side state. It provides declarative APIs for fetching, caching, synchronizing, and updating data in React applications.</p><h2 id="key-features-of-react-query" tabindex="-1"><a class="header-anchor" href="#key-features-of-react-query"><span>Key Features of React Query</span></a></h2><h3 id="data-caching" tabindex="-1"><a class="header-anchor" href="#data-caching"><span>Data Caching</span></a></h3><p>Automatically caches responses and serves cached data while re-fetching in the background.</p><h3 id="stale-while-revalidate" tabindex="-1"><a class="header-anchor" href="#stale-while-revalidate"><span>Stale-While-Revalidate</span></a></h3><p>Ensures the UI always shows the freshest possible data.</p><h3 id="automatic-refetching" tabindex="-1"><a class="header-anchor" href="#automatic-refetching"><span>Automatic Refetching</span></a></h3><p>Automatically refetches data when components mount or network conditions change.</p><h3 id="mutations" tabindex="-1"><a class="header-anchor" href="#mutations"><span>Mutations</span></a></h3><p>Simplifies handling updates to server-side data with tools for POST/PUT/DELETE operations.</p><h3 id="pagination-infinite-loading" tabindex="-1"><a class="header-anchor" href="#pagination-infinite-loading"><span>Pagination &amp; Infinite Loading</span></a></h3><p>Handles paginated data and infinite scrolling seamlessly.</p><h3 id="devtools-integration" tabindex="-1"><a class="header-anchor" href="#devtools-integration"><span>DevTools Integration</span></a></h3><p>Includes a helpful debugging tool to visualize query states.</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> useQuery</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">react-query</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> axios</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">axios</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> fetchUsers</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> async</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  const</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> await</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> axios</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/api/users</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Users</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  const</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> error</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> isLoading</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useQuery</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">users</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> fetchUsers</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">isLoading</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Loading...</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">error</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Error: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">error</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">message</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ul</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">map</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">((</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">user</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">li</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">={</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">user</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}&gt;{</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">user</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">li</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      ))}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ul</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  );</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="what-is-swr" tabindex="-1"><a class="header-anchor" href="#what-is-swr"><span>What is SWR</span></a></h2><p>SWR (Stale-While-Revalidate) is another library for fetching and managing remote data. It is developed by the team at Vercel and inspired by HTTP caching mechanisms. Like React Query, SWR aims to simplify server-side state management but with a lightweight API and focus on simplicity.</p><h2 id="key-features-of-swr" tabindex="-1"><a class="header-anchor" href="#key-features-of-swr"><span>Key Features of SWR</span></a></h2><h3 id="stale-while-revalidate-1" tabindex="-1"><a class="header-anchor" href="#stale-while-revalidate-1"><span>Stale-While-Revalidate</span></a></h3><p>Optimizes data fetching by serving cached data while revalidating in the background.</p><h3 id="focus-online-revalidation" tabindex="-1"><a class="header-anchor" href="#focus-online-revalidation"><span>Focus/Online Revalidation</span></a></h3><p>Automatically refetches data when the window regains focus or the user comes back online.</p><h3 id="automatic-caching" tabindex="-1"><a class="header-anchor" href="#automatic-caching"><span>Automatic Caching</span></a></h3><p>Caches and reuses fetched data across components.</p><h3 id="data-mutation" tabindex="-1"><a class="header-anchor" href="#data-mutation"><span>Data Mutation</span></a></h3><p>Supports updating local data instantly and syncing it with the server later.</p><h3 id="minimal-api" tabindex="-1"><a class="header-anchor" href="#minimal-api"><span>Minimal API</span></a></h3><p>Extremely simple to use with fewer concepts to learn.</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> useSWR</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">swr</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> axios</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">axios</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> fetcher</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> axios</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">get</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">((</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">res</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> res</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Users</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  const</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> error</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> isLoading</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useSWR</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/api/users</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> fetcher</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">isLoading</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Loading...</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">error</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Error: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">error</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">message</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ul</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">map</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">((</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">user</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">li</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">={</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">user</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}&gt;{</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">user</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">li</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      ))}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ul</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  );</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="similarities-between-react-query-and-swr" tabindex="-1"><a class="header-anchor" href="#similarities-between-react-query-and-swr"><span>Similarities Between React Query and SWR</span></a></h2><p>Both libraries are excellent choices for handling server-side state and share the following features:</p><ul><li><strong>Data Caching</strong>: Both cache fetched data to minimize network requests.</li><li><strong>Stale-While-Revalidate</strong>: Show cached data instantly while refetching fresh data in the background.</li><li><strong>Focus/Online Revalidation</strong>: Automatically refetch data when the app regains focus or the user reconnects to the internet.</li><li><strong>Error Handling</strong>: Provide built-in mechanisms to handle fetch errors.</li><li><strong>Developer Experience</strong>: Offer excellent developer tools (React Query has its own DevTools, while SWR integrates seamlessly with browser dev tools).</li></ul><h2 id="differences-between-react-query-and-swr" tabindex="-1"><a class="header-anchor" href="#differences-between-react-query-and-swr"><span>Differences Between React Query and SWR</span></a></h2><table><thead><tr><th>Feature</th><th><strong>React Query</strong></th><th><strong>SWR</strong></th></tr></thead><tbody><tr><td><strong>Complexity</strong></td><td>Offers more advanced features (mutations, pagination).</td><td>Simpler and more lightweight.</td></tr><tr><td><strong>Focus</strong></td><td>Comprehensive server-side state management.</td><td>Lightweight data fetching with caching.</td></tr><tr><td><strong>Mutations</strong></td><td>Built-in tools for POST/PUT/DELETE.</td><td>Requires manual updates to cache after mutation.</td></tr><tr><td><strong>Pagination/Infinite Scroll</strong></td><td>Built-in support for paginated/infinite loading.</td><td>Requires custom implementation for pagination.</td></tr><tr><td><strong>DevTools</strong></td><td>Provides React Query DevTools for debugging.</td><td>No dedicated DevTools, integrates with browser dev tools.</td></tr><tr><td><strong>API Flexibility</strong></td><td>Can be customized heavily to match complex needs.</td><td>Minimal and opinionated API.</td></tr></tbody></table>`,36)]))}const k=i(e,[["render",h],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/learn/react/zp3FpVXCi7BK7id/","title":"7.React Query and SWR","lang":"en-US","frontmatter":{"title":"7.React Query and SWR","createTime":"2025/02/13 13:32:06","permalink":"/learn/react/zp3FpVXCi7BK7id/","author":"Jack","tags":["React","Query","SWR"],"description":"description","head":[["meta",{"property":"og:url","content":"https://duduainy.top/learn/react/zp3FpVXCi7BK7id/"}],["meta",{"property":"og:site_name","content":"Seasoned Jack"}],["meta",{"property":"og:title","content":"7.React Query and SWR"}],["meta",{"property":"og:description","content":"description"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-13T12:58:31.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:tag","content":"Query"}],["meta",{"property":"article:tag","content":"SWR"}],["meta",{"property":"article:modified_time","content":"2025-02-13T12:58:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7.React Query and SWR\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-13T12:58:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.94,"words":581},"git":{"updatedTime":1739451511000,"contributors":[{"name":"meishenlieshou","username":"meishenlieshou","email":"meishenlieshou@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/meishenlieshou?v=4","url":"https://github.com/meishenlieshou"}],"changelog":[{"hash":"7c3e99590f571bda6991a4a6501cc2ca565ad23b","date":1739451511000,"email":"meishenlieshou@gmail.com","author":"meishenlieshou","message":"commit","commitUrl":"https://github.com/meishenlieshou/note/commit/7c3e99590f571bda6991a4a6501cc2ca565ad23b"}]},"filePathRelative":"notes/learn/react/7.React Query and SWR.md","bulletin":false}');export{k as comp,r as data};
