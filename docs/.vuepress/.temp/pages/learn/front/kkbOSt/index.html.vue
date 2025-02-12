<template><div><h2 id="node-js-and-npm-the-early-days" tabindex="-1"><a class="header-anchor" href="#node-js-and-npm-the-early-days"><span>Node.js and NPM: The Early Days</span></a></h2>
<h3 id="what-is-node-js" tabindex="-1"><a class="header-anchor" href="#what-is-node-js"><span>What is Node.js?</span></a></h3>
<ol>
<li>Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. It allows developers to run JavaScript on the server-side, making it possible to use JavaScript for both client-side and server-side development.</li>
<li>It was created by Ryan Dahl in <strong>2009</strong> and quickly became popular due to its non-blocking, event-driven architecture which makes it highly efficient for I/O-bound tasks.</li>
</ol>
<h3 id="npm-node-package-manager" tabindex="-1"><a class="header-anchor" href="#npm-node-package-manager"><span>NPM (Node Package Manager)</span></a></h3>
<ol>
<li>NPM was created in 2010 by Isaac Schlueter as the default package manager for Node.js.</li>
<li>It is used to install, share, and manage dependencies (libraries and tools) for Node.js projects.</li>
<li>NPM was designed to simplify the process of managing the vast array of libraries and tools available to Node.js developers. As of today, it's the largest package registry in the world.</li>
</ol>
<p>Command:</p>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # Installs dependencies based on package.json and package-lock.json.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">packag</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # Installs a specific package and adds it to package.json.</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-npm-works" tabindex="-1"><a class="header-anchor" href="#how-npm-works"><span>How NPM Works</span></a></h3>
<ol>
<li>Package.json: This file is the heart of any Node.js project. It holds metadata about your project and its dependencies, including package versions, scripts, and configurations. More details abount package.json, please <RouteLink to="/learn/front/RfcrlizvtcxlfN/">click here</RouteLink></li>
<li>npm install: The most common command for installing packages from the NPM registry. It will install packages listed in package.json or specified in the command.</li>
<li>npm install &lt;package_name&gt;: Installs a specific package and adds it to the node_modules folder.</li>
</ol>
<h2 id="other-tools-and-package-managers-for-node-js" tabindex="-1"><a class="header-anchor" href="#other-tools-and-package-managers-for-node-js"><span>Other Tools and Package Managers for Node.js</span></a></h2>
<p>While NPM is the default package manager for Node.js, over time, several other package management tools have emerged to address specific needs, like performance improvements or ease of use.</p>
<h3 id="yarn-facebook-s-alternative" tabindex="-1"><a class="header-anchor" href="#yarn-facebook-s-alternative"><span>Yarn (Facebook’s Alternative)</span></a></h3>
<ol>
<li>Yarn was introduced by Facebook in 2016 as an alternative to NPM.</li>
<li><strong>Offline caching</strong>: Yarn caches packages so that you can install them later without an internet connection.</li>
<li><strong>Faster installations</strong>: Due to parallel downloads and caching, Yarn tends to be faster than NPM (especially in the earlier days).</li>
<li><strong>Deterministic installs</strong>: Yarn uses a yarn.lock file to ensure that installs are consistent across different machines and environments, addressing issues with dependency versions.</li>
<li><strong>Workspaces</strong>: Yarn supports monorepos and allows multiple packages within a single repository to be managed together. This is a huge help for large projects or organizations.</li>
</ol>
<p>Commands:</p>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  #  Installs dependencies listed in the package.json</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">packag</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> ## Installs a specific package and saves it in package.json</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pnpm-performance-node-package-manager" tabindex="-1"><a class="header-anchor" href="#pnpm-performance-node-package-manager"><span>PNPM (Performance Node Package Manager)</span></a></h3>
<p>PNPM is a relatively new package manager introduced as a performance-focused alternative to NPM and Yarn.</p>
<p>It offers several optimizations, most notably its approach to node_modules.</p>
<ol>
<li><strong>Efficient disk usage</strong>: PNPM uses a content-addressable store to keep a single copy of each package version, even if multiple projects use the same version. This saves a significant amount of disk space.</li>
<li><strong>Faster installations</strong>: By leveraging the content-addressable store, PNPM speeds up installations by avoiding redundant downloads.</li>
</ol>
<p>Commands:</p>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # Installs dependencies similarly to NPM and Yarn but uses different strategies to optimize the process.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">packag</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # Installs a specific package and updates the package.json file.</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm-5-and-later-modernization-of-npm" tabindex="-1"><a class="header-anchor" href="#npm-5-and-later-modernization-of-npm"><span>NPM 5 and Later (Modernization of NPM)</span></a></h3>
<p>NPM 5 (released in 2017) brought several much-needed features to improve its performance, including:</p>
<ol>
<li><strong>Lockfile support (package-lock.json)</strong>: This ensures deterministic dependency resolution, similar to Yarn’s yarn.lock. It helps avoid version conflicts between development environments.</li>
<li><strong>Faster install times</strong>: NPM’s caching mechanism was improved, making installations faster.</li>
<li><strong>Automatic package installation</strong>: npm install now automatically installs dependencies listed in package.json.</li>
</ol>
<h3 id="npx" tabindex="-1"><a class="header-anchor" href="#npx"><span>npx</span></a></h3>
<p>npx is a package runner that comes with Node.js (since version 5.2.0 of npm). It allows you to run Node.js executables from npm packages without globally installing them.</p>
<p>Use npx when you want to run a package once or avoid installing it globally. Use npm when you need to install dependencies for repeated use.</p>
<h2 id="evolution-of-npm-and-package-management" tabindex="-1"><a class="header-anchor" href="#evolution-of-npm-and-package-management"><span>Evolution of NPM and Package Management</span></a></h2>
<ul>
<li><strong>NPM 1-4</strong>: Early versions were fairly basic, with issues like poor performance and lack of a lock file to guarantee consistent installs. NPM 1-4 had issues with dependency versioning and package duplication, which caused some frustration among developers.</li>
<li><strong>NPM 5 (2017)</strong>: Major improvements were introduced, including the introduction of package-lock.json, faster installs, and improved performance. This began to address many of the pain points developers had with NPM in the earlier versions.</li>
<li><strong>NPM 6</strong>:  NPM6 introduced support for automatic peer dependency installation, improved error handling, and additional commands like npm audit to check for vulnerabilities in dependencies.</li>
<li><strong>NPM 7</strong>: NPM7 added features like workspaces (for monorepos), automatic package-lock updates, and better handling of peer dependencies.</li>
<li><strong>NPM 8 and 9 (2021-2022)</strong>: These newer versions continue to refine and enhance performance, add better error messaging, and introduce new features like npm exec for running binaries.</li>
</ul>
<h2 id="evolution-of-yarn" tabindex="-1"><a class="header-anchor" href="#evolution-of-yarn"><span>Evolution of Yarn</span></a></h2>
<h3 id="yarn-2-berry-–-a-major-overhaul-2020" tabindex="-1"><a class="header-anchor" href="#yarn-2-berry-–-a-major-overhaul-2020"><span>Yarn 2 (Berry) – A Major Overhaul (2020)</span></a></h3>
<p>In 2020, Yarn 2 (Berry) was released, which marked a major shift in Yarn’s direction and functionality. Some of the key changes with Yarn 2 include:</p>
<ol>
<li><strong>Plug'n'Play (PnP)</strong>: One of the most notable features of Yarn 2 was the introduction of Plug'n'Play, a new way of resolving dependencies that didn’t rely on a node_modules folder. Instead, Yarn uses a virtual file system to resolve dependencies, which improved install times and reduced disk usage.</li>
<li><strong>Zero-Install</strong>: With Plug’n’Play, Yarn 2 made it possible to avoid having to run yarn install entirely in certain cases. This is useful for reducing CI/CD pipeline times.</li>
<li><strong>Better Monorepo Support</strong>: Yarn 2 expanded on workspaces, improving monorepo management.</li>
<li><strong>Easier plugin system</strong>: The new version of Yarn introduced a flexible plugin system, allowing the community and developers to add custom functionality easily.</li>
</ol>
<h3 id="future-of-yarn" tabindex="-1"><a class="header-anchor" href="#future-of-yarn"><span>Future of Yarn</span></a></h3>
<p>Yarn's development continues to evolve, with newer versions (like Yarn 3) continuing to improve performance, maintain compatibility with npm’s ecosystem, and expand functionality. The distinction between npm and Yarn is less pronounced than it used to be, but Yarn remains popular for developers who need features like workspaces, deterministic installs, and monorepo support.</p>
<h2 id="the-node-js-package-ecosystem" tabindex="-1"><a class="header-anchor" href="#the-node-js-package-ecosystem"><span>The Node.js Package Ecosystem</span></a></h2>
<p>The Node.js ecosystem is constantly evolving, and package management tools are a big part of that evolution.</p>
<ul>
<li><strong>Better performance</strong>: Faster installs, better caching, and more efficient disk usage are always a focus for package managers.</li>
<li><strong>Security</strong>: Package managers are increasingly focused on security audits (e.g., npm audit) to identify vulnerabilities in dependencies.</li>
<li><strong>Monorepos and Workspaces</strong>: As organizations build larger and more complex applications, the need for managing multiple packages in a single repository has driven the development of workspace features in NPM, Yarn, and PNPM.</li>
</ul>
<h2 id="problems-in-npm" tabindex="-1"><a class="header-anchor" href="#problems-in-npm"><span>Problems in npm</span></a></h2>
<h3 id="what-are-peer-dependencies" tabindex="-1"><a class="header-anchor" href="#what-are-peer-dependencies"><span>What Are Peer Dependencies?</span></a></h3>
<p>Peer dependencies in npm are packages that a module expects the consumer (your project) to provide. They are commonly used in plugins, libraries, or frameworks that require a specific version of another package to function properly.</p>
<p>Imagine you are developing a React component library that requires React, but you don’t want to install React inside your library because the consuming project should already have it.</p>
<h3 id="how-to-resolve-peer-dependency-issues" tabindex="-1"><a class="header-anchor" href="#how-to-resolve-peer-dependency-issues"><span>how to resolve peer dependency issues</span></a></h3>
<ol>
<li><strong>The --legacy-peer-deps Flag</strong></li>
</ol>
<p>The --legacy-peer-deps flag tells npm to ignore peer dependency conflicts and install the dependencies as they were handled in older npm versions (prior to npm 7). This approach doesn’t strictly enforce peer dependency resolutions, which can help avoid installation failures while preserving the overall integrity of the dependency tree.</p>
<p>Use it when</p>
<ul>
<li>You are working with older packages that have not updated their peer dependency requirements.</li>
<li>You want to avoid breaking changes while maintaining some level of dependency integrity.</li>
<li>You’re installing a specific package, and peer dependency warnings are blocking the installation.</li>
</ul>
<ol start="2">
<li><strong>The --force Flag</strong></li>
</ol>
<p>The --force flag in npm does exactly what it sounds like: it forces npm to install the package, overriding any conflicts, including peer dependency and version mismatches. While this might seem like a quick fix, it comes with significant risks.</p>
<p>Use it when</p>
<ul>
<li>You have no other option, and you understand the risks.</li>
<li>You’re working in a temporary environment, such as debugging or testing.</li>
<li>You plan to immediately address the root cause of the dependency conflict.</li>
</ul>
</div></template>


