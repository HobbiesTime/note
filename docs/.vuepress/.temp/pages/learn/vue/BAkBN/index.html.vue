<template><div><h2 id="组件通信常见方式" tabindex="-1"><a class="header-anchor" href="#组件通信常见方式"><span>组件通信常见方式</span></a></h2>
<h3 id="父子组件-props-和-emit" tabindex="-1"><a class="header-anchor" href="#父子组件-props-和-emit"><span>父子组件：props 和 emit</span></a></h3>
<h3 id="兄弟组件-事件总线" tabindex="-1"><a class="header-anchor" href="#兄弟组件-事件总线"><span>兄弟组件：事件总线</span></a></h3>
<p>事件总线，即消息的订阅发布模式概念</p>
<h3 id="跨层级组件-provide-和-inject" tabindex="-1"><a class="header-anchor" href="#跨层级组件-provide-和-inject"><span>跨层级组件：provide 和 inject</span></a></h3>
<p>参考<a href="#provice-inject">示例</a></p>
<h3 id="状态容器" tabindex="-1"><a class="header-anchor" href="#状态容器"><span>状态容器</span></a></h3>
<h3 id="全局状态管理-vuex、pinia" tabindex="-1"><a class="header-anchor" href="#全局状态管理-vuex、pinia"><span>全局状态管理：Vuex、Pinia</span></a></h3>
<p>更多Pinia介绍，参考<a href="#pinia-part">这里</a></p>
<h2 id="lifecycle" tabindex="-1"><a class="header-anchor" href="#lifecycle"><span>选项式 API（Options API）生命周期钩子</span></a></h2>
<p><strong>beforeCreate</strong>  实例创建之前，数据和事件等还没有初始化，这个阶段不能访问到 data 和 props</p>
<p><strong>created</strong> 组件实例已创建，数据和事件已设置</p>
<p><strong>beforeMount</strong>  组件将要挂载到 DOM 上，但还没有完成渲染。此时 template 已被解析</p>
<p><strong>mounted</strong> 组件挂载完成，DOM 已经生成。此时可以执行与 DOM 交互的操作</p>
<p><strong>beforeUpdate</strong> 组件的数据已发生变化，但视图还没有更新</p>
<p><strong>updated</strong> 组件的数据已变化，视图已更新</p>
<p><strong>activated</strong> 组件被激活（例如使用 keep-alive 包裹的组件）。这个钩子仅适用于通过 keep-alive 缓存的组件</p>
<p><strong>deactivated</strong> 组件被停用（keep-alive 中的缓存组件会触发此钩子）。用于处理缓存组件的清理</p>
<p><strong>beforeUnmount</strong> 组件实例将要销毁，但 DOM 还未移除</p>
<p><strong>unmounted</strong> 组件实例已销毁，DOM 被移除。用于执行清理操作</p>
<p><strong>errorCaptured</strong> 捕获子组件的错误并处理。这个钩子会在子组件发生错误时被触发，可以捕获并处理错误，防止它们传播到父组件。</p>
<h2 id="组合式api生命周期钩子" tabindex="-1"><a class="header-anchor" href="#组合式api生命周期钩子"><span>组合式API生命周期钩子</span></a></h2>
<ul>
<li>在 setup 函数中使用生命周期钩子，而这些钩子是通过 on 前缀来调用的。钩子函数和选项式API基本一致。</li>
<li>created 钩子 和 beforeCreate 钩子 不再存在于 Vue 3 的组合式 API 中。相应的逻辑可以放入 setup 函数中来处理。</li>
</ul>
</div></template>


