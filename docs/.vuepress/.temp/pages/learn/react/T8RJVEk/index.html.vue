<template><div><h2 id="what-is-react-fiber" tabindex="-1"><a class="header-anchor" href="#what-is-react-fiber"><span>What is React Fiber?</span></a></h2>
<p>React Fiber is the reconciliation engine introduced in React 16, designed to improve the way React updates the Virtual DOM and renders components.</p>
<p>Before React Fiber, React used a synchronous reconciliation algorithm that blocked rendering updates until all work was completed. This led to performance issues, especially for large applications. React Fiber solves this by making rendering asynchronous, interruptible, and more efficient.</p>
<p><strong>Key Features of React Fiber</strong></p>
<ol>
<li><mark>Incremental Rendering (Time-Slicing)</mark>    React Fiber can pause and resume rendering, breaking work into smaller chunks, making the UI more responsive.</li>
<li><mark>Concurrency (Concurrent Mode)</mark>    It allows React to work on multiple tasks simultaneously, prioritizing updates dynamically. High-priority updates (like user input) can be processed before lower-priority updates (like data fetching).</li>
<li><mark>Error Boundaries</mark>  Introduced a better error-handling mechanism using error boundaries, preventing entire apps from crashing due to component failures.</li>
<li><mark>Suspense</mark>  Improved support for React Portals and the Suspense API (for handling async rendering).</li>
</ol>
<p><strong>How React Fiber Works</strong></p>
<p>React Fiber splits rendering into two phases</p>
<ol>
<li><mark>Render Phase</mark></li>
</ol>
<p>React determines what changes need to be made to the UI. This phase can be interrupted if there are higher-priority tasks.</p>
<ol start="2">
<li><mark>Commit Phase</mark></li>
</ol>
<p>Make the final changes  apply to the DOM. This phase is synchronous and cannot be interrupted.</p>
<h2 id="what-are-the-lifecycle-methods-in-react-how-to-simulate-these-lifecycle-methods-in-functional-components" tabindex="-1"><a class="header-anchor" href="#what-are-the-lifecycle-methods-in-react-how-to-simulate-these-lifecycle-methods-in-functional-components"><span>What are the lifecycle methods in React? How to simulate these lifecycle methods in functional components?</span></a></h2>
<p><strong>Step for mount</strong></p>
<ul>
<li><mark>constructor()</mark></li>
<li><mark>static getDerivedStateFromProps(props, state)</mark></li>
<li><mark>render()</mark></li>
<li><mark>componentDidMount()</mark></li>
</ul>
<p><strong>Step for update</strong></p>
<ul>
<li><mark>static getDerivedStateFromProps(props, state)</mark></li>
<li><mark>shouldComponentUpdate(nextProps, nextState)</mark></li>
<li><mark>render()</mark></li>
<li><mark>getSnapshotBeforeUpdate(prevProps, prevState)</mark></li>
<li><mark>componentDidUpdate(prevProps, prevState, snapshot?)</mark></li>
</ul>
<p><strong>Step for unmount</strong></p>
<ul>
<li><mark>componentWillUnmount()</mark></li>
</ul>
<p><strong>Step for error</strong></p>
<ul>
<li><mark>static getDerivedStateFromError(error)</mark></li>
</ul>
<p>This method catches errors from child components and updates state to trigger a fallback UI. It does not log errors; for that, use <strong><code v-pre>componentDidCatch</code></strong>.</p>
<ul>
<li><mark>componentDidCatch(error, info)</mark></li>
</ul>
<p>In function component,  lifecycle behaviors can be simulated using React Hooks, primarily <strong><code v-pre>useEffect</code></strong>.</p>
<h2 id="what-is-react-s-synthetic-event-how-does-it-differ-from-native-events" tabindex="-1"><a class="header-anchor" href="#what-is-react-s-synthetic-event-how-does-it-differ-from-native-events"><span>What is React's Synthetic Event? How does it differ from native events?</span></a></h2>
<p>A Synthetic Event in React is a wrapper around native browser events, providing a consistent and cross-browser event system. React creates these events to ensure compatibility across different browsers and improve performance.</p>
<p>Since React recycles Synthetic Events, if you need to use the event object asynchronously (e.g., in a setTimeout), call event.persist().</p>
<div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> MyComponent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">  const</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> handleClick</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">persist</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // Prevents event pooling</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    setTimeout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">      console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // Still accessible</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1000</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">button</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> onClick</span><span style="--shiki-light:#999999;--shiki-dark:#666666">={</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">handleClick</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Click Me</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="what-are-the-characteristics-of-react-state-updates" tabindex="-1"><a class="header-anchor" href="#what-are-the-characteristics-of-react-state-updates"><span>What are the characteristics of React state updates?</span></a></h2>
<p>React state updates have several key characteristics that affect how components render and behave. Understanding these characteristics helps optimize performance and avoid common pitfalls.</p>
<ol>
<li><strong><code v-pre>State Updates are Asynchronous</code></strong></li>
</ol>
<p>React batches state updates for performance reasons, meaning that setState (in class components) and the state updater function from useState (in functional components) do not update the state immediately.</p>
<p>To ensure you're working with <strong>the latest state</strong>, use the functional updater.</p>
<div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//Function Component</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">setCount</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">prevCount</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> prevCount</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//Class component</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">setState</span><span style="--shiki-light:#999999;--shiki-dark:#666666">((</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">prevState</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ({</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> count</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> prevState</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">count</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }));</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong><code v-pre>State Updates are Merged (Class Components Only)</code></strong></li>
<li><strong><code v-pre>State Updates May Be Batching</code></strong></li>
<li><strong><code v-pre>State Updates Trigger Re-renders</code></strong></li>
<li><strong><code v-pre>State Should be Immutable</code></strong></li>
</ol>
<h2 id="what-are-the-best-practices-for-custom-hooks-how-to-avoid-logic-complexity" tabindex="-1"><a class="header-anchor" href="#what-are-the-best-practices-for-custom-hooks-how-to-avoid-logic-complexity"><span>What are the best practices for custom Hooks? How to avoid logic complexity?</span></a></h2>
<p>Custom Hooks in React allow you to reuse stateful logic across multiple components. However, poorly structured Hooks can lead to complex, hard-to-maintain code. Following best practices can help maintain clarity and avoid excessive complexity.</p>
<ol>
<li>Name Custom Hooks with use Prefix.</li>
<li>Keep Hooks Focused on a Single Responsibility.</li>
<li>Use useCallback and useMemo to Optimize Performance.</li>
<li>Handle Side Effects Properly (useEffect Cleanup)</li>
<li>Make Hooks Configurable with Parameters</li>
<li>Break down large Hooks into smaller Hooks</li>
<li>Prefer returning objects { data, isLoading, error } instead of multiple values.</li>
<li>Limit the number of dependencies in useEffect</li>
</ol>
<h2 id="what-is-the-principle-of-react-context-api-how-to-avoid-performance-issues-with-context" tabindex="-1"><a class="header-anchor" href="#what-is-the-principle-of-react-context-api-how-to-avoid-performance-issues-with-context"><span>What is the principle of React Context API? How to avoid performance issues with Context?</span></a></h2>
<p>The React Context API is a built-in feature that allows components to share state without prop drilling. It provides a way to pass data globally through a component tree.</p>
<p>React Context consists of three main parts:</p>
<p>1️⃣ React.createContext() → Creates a Context object.</p>
<p>2️⃣ Provider (Context.Provider) → Wraps components and provides values.</p>
<p>3️⃣ Consumer (Context.Consumer or useContext) → Accesses the provided values.</p>
<p>Best Practices to Optimize Context Performance</p>
<ol>
<li>Use Separate Contexts for Different Values</li>
<li>Use useMemo to Prevent Unnecessary Re-Renders. Wrap the context value in useMemo to avoid recreating objects unnecessarily.</li>
<li>For complex state logic, use useReducer instead of useState to prevent unnecessary updates.</li>
<li>Use Context Selectors with Libraries(e.g., Zustand, Recoil)</li>
</ol>
</div></template>


