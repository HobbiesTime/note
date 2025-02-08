import{_ as a,c as t,a as i,o as n}from"./app-CkNf9b6d.js";const o={};function s(l,e){return n(),t("div",null,e[0]||(e[0]=[i('<h2 id="event-loop-事件循环" tabindex="-1"><a class="header-anchor" href="#event-loop-事件循环"><span>Event Loop（事件循环）</span></a></h2><p>是 JavaScript 的核心机制之一，用于处理异步操作，使得 JavaScript 可以在单线程中实现非阻塞的行为。它负责协调执行同步任务、异步任务和回调函数。</p><h2 id="单线程运行" tabindex="-1"><a class="header-anchor" href="#单线程运行"><span>单线程运行</span></a></h2><ul><li>JavaScript 是单线程的，这意味着它在任何时候只能执行一个任务。</li><li>所有代码在一个主线程上执行，这个线程被称为 主线程。</li></ul><h2 id="同步与异步" tabindex="-1"><a class="header-anchor" href="#同步与异步"><span>同步与异步</span></a></h2><ul><li>会在主线程上按顺序执行，阻塞后续任务。</li><li>通过事件循环机制，在完成任务后将回调推入队列，并在主线程空闲时执行。</li></ul><h2 id="javascript-执行顺序" tabindex="-1"><a class="header-anchor" href="#javascript-执行顺序"><span>JavaScript 执行顺序</span></a></h2><ul><li><p><strong><code>调用栈（Call Stack）</code></strong></p><p>调用栈是一个栈结构，存储执行中的函数。 每当一个函数被调用，就会被压入栈顶，执行完后出栈。</p></li><li><p><strong><code>消息队列（Task Queue）</code></strong></p><p>消息队列存储异步任务（如 setTimeout 回调、I/O 操作等）。主线程空闲时，Event Loop 会从队列中取出任务执行。</p></li></ul><h2 id="事件循环的执行步骤" tabindex="-1"><a class="header-anchor" href="#事件循环的执行步骤"><span>事件循环的执行步骤</span></a></h2><ul><li>从调用栈执行同步代码，直到调用栈清空。</li><li>检查消息队列，如果有任务，将任务推入调用栈执行。</li><li>重复上述过程，形成循环。</li></ul><h2 id="异步任务的两种类型" tabindex="-1"><a class="header-anchor" href="#异步任务的两种类型"><span>异步任务的两种类型</span></a></h2><ul><li><p><strong><code>宏任务（Macro Task）</code></strong></p><ol><li>包括：setTimeout、setInterval、setImmediate、I/O 操作等</li><li>每次事件循环中只会执行一个宏任务。</li></ol></li><li><p><strong><code>微任务（Micro Task）</code></strong></p><ol><li>包括：Promise.then、MutationObserver。</li><li>微任务的优先级高于宏任务，在每个宏任务执行后会清空所有微任务。</li></ol></li></ul>',12)]))}const c=a(o,[["render",s],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/learn/front/FnqFqivY3p2d2HIzzsng/","title":"Event Loop","lang":"en-US","frontmatter":{"title":"Event Loop","createTime":"2025/01/25 08:07:48","permalink":"/learn/front/FnqFqivY3p2d2HIzzsng/","author":"Jack","tags":["Javascript","Event Loop"],"description":"description"},"headers":[],"readingTime":{"minutes":1.38,"words":414},"git":{"updatedTime":1739022657000,"contributors":[{"name":"美神猎手","username":"美神猎手","email":"meishenlieshou@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/美神猎手?v=4","url":"https://github.com/美神猎手"}],"changelog":[{"hash":"455b23bf94dfc682d2c30226705c1535c2ae966f","date":1739022657000,"email":"meishenlieshou@users.noreply.github.com","author":"美神猎手","message":"Update Prompt Engineering.md","commitUrl":"https://github.com/meishenlieshou/note/commit/455b23bf94dfc682d2c30226705c1535c2ae966f"}]},"filePathRelative":"notes/learn/techs/Event Loop.md","bulletin":false}');export{c as comp,p as data};
