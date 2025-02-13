import{_ as a,c as t,a as n,o}from"./app-CBuaBQLw.js";const i={};function s(r,e){return o(),t("div",null,e[0]||(e[0]=[n('<h2 id="what-is-reactjs-and-what-are-its-key-features" tabindex="-1"><a class="header-anchor" href="#what-is-reactjs-and-what-are-its-key-features"><span>What is ReactJS, and what are its key features?</span></a></h2><p>ReactJS is an open-source JavaScript library developed by Facebook. It is used for building user interfaces in web applications.</p><p>Key features include a virtual DOM for efficient updates, component-based architecture for reusability, JSX for declarative syntax, and unidirectional data flow</p><h2 id="what-is-jsx-and-why-is-it-used-in-react" tabindex="-1"><a class="header-anchor" href="#what-is-jsx-and-why-is-it-used-in-react"><span>What is JSX, and why is it used in React?</span></a></h2><p>JSX (JavaScript XML) is an extension to JavaScript that allows you to write HTML-like code within JavaScript. It provides a more readable and concise way to describe the structure of UI components. React uses JSX to define the structure of components, making it easier to visualize and understand the UI hierarchy.</p><h2 id="explain-the-concept-of-props-in-react" tabindex="-1"><a class="header-anchor" href="#explain-the-concept-of-props-in-react"><span>Explain the concept of “props” in React.</span></a></h2><p>Props (short for properties) are a mechanism for passing data from a parent component to a child component. They are read-only and provide a way to configure and customize child components based on their parent’s data. Props are an essential part of creating reusable and dynamic components.</p><h2 id="what-is-state-in-react-and-how-is-it-different-from-props" tabindex="-1"><a class="header-anchor" href="#what-is-state-in-react-and-how-is-it-different-from-props"><span>What is state in React, and how is it different from props?</span></a></h2><p>State is a mechanism for managing and storing dynamic data within a component. Unlike props, which are passed from parent to child and are read-only, state is local to a component and can be updated using the setState method. State enables components to re-render when data changes, updating the UI dynamically.</p><h2 id="what-are-react-hooks-and-how-do-they-differ-from-class-components" tabindex="-1"><a class="header-anchor" href="#what-are-react-hooks-and-how-do-they-differ-from-class-components"><span>What are React hooks, and how do they differ from class components?</span></a></h2><p>React hooks are functions that allow you to use state and other React features in functional components. They provide an alternative to class components by enabling the use of state and lifecycle features without writing a class. Hooks, such as useState and useEffect, streamline component logic and make it more concise.</p><h2 id="explain-the-concept-of-the-virtual-dom-and-its-advantages" tabindex="-1"><a class="header-anchor" href="#explain-the-concept-of-the-virtual-dom-and-its-advantages"><span>Explain the concept of the virtual DOM and its advantages.</span></a></h2><p>The virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to perform efficient updates by comparing the virtual DOM with the previous version and calculating the minimum number of changes needed to reflect the new state. This minimizes direct manipulation of the actual DOM, leading to improved performance and responsiveness.</p><p>Virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the actual DOM by a library such as ReactDOM.</p><p>The virtual DOM is an object that represents the real DOM in the memory. Since DOM updates are an integral part of any web app but are the costliest operation in the world of frontend, the virtual DOM is utilized to check for parts of the app that need to be updated &amp; update only those parts, thus significantly boosting performance.</p><h2 id="what-is-the-purpose-of-the-key-prop-in-react-lists" tabindex="-1"><a class="header-anchor" href="#what-is-the-purpose-of-the-key-prop-in-react-lists"><span>What is the purpose of the “key” prop in React lists?</span></a></h2><p>The “key” prop is used to uniquely identify elements in a list of components. It helps React efficiently update and reorder components by providing a stable identity for each item. Using keys correctly improves the performance of rendering and updating lists.</p><p>Key helps React identify which items have changed, are added, or are removed, enabling it to reuse already existing DOM elements, thus providing a performance boost.</p><h2 id="how-does-redux-work-and-when-would-you-use-it" tabindex="-1"><a class="header-anchor" href="#how-does-redux-work-and-when-would-you-use-it"><span>How does Redux work, and when would you use it?</span></a></h2><p>Redux is a state management library for managing the global state of an application. It uses a single source of truth and enforces a unidirectional data flow. React Redux is suitable for large-scale applications with complex state management needs, where multiple components need access to shared data.</p><h2 id="what-is-the-significance-of-the-shouldcomponentupdate-method" tabindex="-1"><a class="header-anchor" href="#what-is-the-significance-of-the-shouldcomponentupdate-method"><span>What is the significance of the “shouldComponentUpdate” method?</span></a></h2><p>The shouldComponentUpdate method is used to optimize performance by determining whether a component should re-render. It is called before a component updates and receives the next props and state. By returning false in certain conditions, you can prevent unnecessary re-renders and improve performance.</p><h2 id="how-do-you-handle-forms-in-react-and-what-is-controlled-vs-uncontrolled-components" tabindex="-1"><a class="header-anchor" href="#how-do-you-handle-forms-in-react-and-what-is-controlled-vs-uncontrolled-components"><span>How do you handle forms in React, and what is controlled vs. uncontrolled components?</span></a></h2><p>Forms in React can be controlled or uncontrolled. Controlled components have their state controlled by React and are updated via the setState method. Uncontrolled components manage their state using the DOM directly. Controlled components provide a more predictable and maintainable way to handle form inputs.</p><h2 id="why-do-we-need-to-transpile-react-code" tabindex="-1"><a class="header-anchor" href="#why-do-we-need-to-transpile-react-code"><span>Why do we need to transpile React code?</span></a></h2><p>React code is written in JSX, but no browser can execute JSX directly as they are built to read-only regular JavaScript. Thus we require to use tools like Babel to transpile JSX to JavaScript so that the browser can execute it.</p><h2 id="what-is-the-significance-of-refs-in-react" tabindex="-1"><a class="header-anchor" href="#what-is-the-significance-of-refs-in-react"><span>What is the significance of refs in React?</span></a></h2><p>Refs are variables that allow you to persist data between renders, just like state variables, but unlike state variables, updating refs does NOT cause the component to re-render.</p><p>Refs are usually used to, but not restricted to, store reference to DOM elements.</p><h2 id="what-are-the-most-common-approaches-for-styling-a-react-application" tabindex="-1"><a class="header-anchor" href="#what-are-the-most-common-approaches-for-styling-a-react-application"><span>What are the most common approaches for styling a React application?</span></a></h2><ol><li>CSS Classes</li><li>Inline CSS</li><li>Pre-processors (Sass, Stylus, and Less)</li><li>CSS-in-JS Modules (Styled Components, Emotion, and Styled-jsx)</li></ol><h2 id="what-are-some-of-the-performance-optimization-strategies-for-react" tabindex="-1"><a class="header-anchor" href="#what-are-some-of-the-performance-optimization-strategies-for-react"><span>What are some of the performance optimization strategies for React?</span></a></h2><ol><li>Avoid Unnecessary Re-renders: Use React.memo, useMemo, useCallback, and PureComponent.</li><li>Optimize State Management: Lift state wisely, use local state when possible, and batch updates.</li><li>Virtualization for Large Lists: Use react-window or react-virtualized.</li><li>Code-Splitting &amp; Lazy Loading: Use React.lazy, Suspense, and dynamic imports.</li><li>Optimize Asset Loading: Compress images, use lazy loading, and tree-shake dependencies.</li><li>Optimize Network Requests: Use caching (React Query, SWR), debounce expensive API calls.</li></ol><h2 id="what-is-prop-drilling-and-how-to-avoid-it" tabindex="-1"><a class="header-anchor" href="#what-is-prop-drilling-and-how-to-avoid-it"><span>What is prop drilling and how to avoid it?</span></a></h2><p>Sometimes while developing React applications, there is a need to pass data from a component that is higher in the hierarchy to a component that is deeply nested. To pass data between such components, we pass props from a source component and keep passing the prop to the next component in the hierarchy till we reach the deeply nested component.</p><p>The disadvantage of using prop drilling is that the components that should otherwise be not aware of the data have access to the data, moreover, the code becomes harder to maintain.</p><p>Prop drilling can be avoided using the Context API or some form of State Management library.</p><h2 id="what-is-the-strictmode-component-and-why-would-you-use-it" tabindex="-1"><a class="header-anchor" href="#what-is-the-strictmode-component-and-why-would-you-use-it"><span>What is the StrictMode component and why would you use it?</span></a></h2><p>It is a component included with React to provide additional visibility of potential issues in components. Suppose the application is running in development mode. In that case, any issues are logged to the development console, but these warnings are not shown if the application is running in production mode.</p><p>Developers use to find problems such as deprecated lifecycle methods and legacy patterns, to ensure that all React components follow current best practices.</p><p>It can be applied at any level of an application component hierarchy, which allows it to be adopted incrementally within a codebase.</p><h2 id="what-are-synthetic-events-in-react" tabindex="-1"><a class="header-anchor" href="#what-are-synthetic-events-in-react"><span>What are synthetic events in React?</span></a></h2><p>Synthetic events combine the response of different browser&#39;s native events into one API, ensuring that the events are consistent across different browsers. The application is consistent regardless of the browser it is running in.</p><h2 id="why-is-it-not-advisable-to-update-state-directly-but-use-the-setstate-call" tabindex="-1"><a class="header-anchor" href="#why-is-it-not-advisable-to-update-state-directly-but-use-the-setstate-call"><span>Why is it not advisable to update state directly, but use the setState call?</span></a></h2><p>The conventional way to update state is to use the setState call. Without using it, the user would still be able to modify the state, but it would not update the DOM to reflect the new state.</p><h2 id="what-are-portals-in-react" tabindex="-1"><a class="header-anchor" href="#what-are-portals-in-react"><span>What are portals in React?</span></a></h2><p>Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.</p><h2 id="what-is-a-component-in-react" tabindex="-1"><a class="header-anchor" href="#what-is-a-component-in-react"><span>What is a component in React?</span></a></h2><p>In React, a component is a modular, reusable piece of code that defines a part of a user interface. Components can be thought of as building blocks for larger applications. They are typically composed of HTML-like markup (in the form of JSX) and JavaScript logic that defines their behavior.</p><h2 id="what-is-the-difference-between-a-functional-and-class-component" tabindex="-1"><a class="header-anchor" href="#what-is-the-difference-between-a-functional-and-class-component"><span>What is the difference between a functional and class component?</span></a></h2><p>In React, there are two main types of components: functional components and class components.</p><p>Functional components are defined as JavaScript functions that return some JSX code. They are simple, lightweight, and typically used for simple UI components that don’t require any state or lifecycle methods. They can be easily reused and composed to create more complex components.</p><p>Class components, on the other hand, are defined as ES6 classes that extend the React.Component class. They have more features than functional components, including the ability to manage state and lifecycle methods. They are typically used for more complex UI components that require more logic and interaction.</p><h2 id="how-do-you-pass-data-from-a-parent-component-to-a-child-component-in-react" tabindex="-1"><a class="header-anchor" href="#how-do-you-pass-data-from-a-parent-component-to-a-child-component-in-react"><span>How do you pass data from a parent component to a child component in React?</span></a></h2><p>In React, data can be passed from a parent component to a child component using props.</p><h2 id="what-is-the-useeffect-hook-in-react-and-when-would-you-use-it" tabindex="-1"><a class="header-anchor" href="#what-is-the-useeffect-hook-in-react-and-when-would-you-use-it"><span>What is the ‘useEffect’ hook in React and when would you use it?</span></a></h2><p>The useEffect hook is used in React to perform side effects such as fetching data, updating the document title, or adding event listeners. It allows you to run a function after rendering a component, and optionally specify dependencies that should trigger a re-run of the function.</p><h2 id="what-is-the-usestate-hook-in-react-and-when-would-you-use-it" tabindex="-1"><a class="header-anchor" href="#what-is-the-usestate-hook-in-react-and-when-would-you-use-it"><span>What is the ‘useState’ hook in React and when would you use it?</span></a></h2><p>The useState hook is used in React to add state to functional components. It allows you to declare state variables and update them using the useState function.</p><h2 id="what-are-higher-order-components-hoc-and-when-would-you-use-them-in-react" tabindex="-1"><a class="header-anchor" href="#what-are-higher-order-components-hoc-and-when-would-you-use-them-in-react"><span>What are ‘Higher-Order Components’ (HOC) and when would you use them in React?</span></a></h2><p>Higher-Order Components (HOC) are functions that take a component and return a new component with additional functionality. HOCs allow you to reuse code and logic across different components in your application. You can use HOCs to add functionality such as authentication, data fetching, or error handling to your components.</p><p>For example, you could create an HOC that adds authentication to a component by checking if the user is logged in before rendering the component. This allows you to reuse this authentication logic across multiple components in your application.</p><h2 id="what-is-render-prop-and-when-would-you-use-it-in-react" tabindex="-1"><a class="header-anchor" href="#what-is-render-prop-and-when-would-you-use-it-in-react"><span>What is ‘Render Prop’ and when would you use it in React?</span></a></h2><p>Render Prop is a pattern in React where a component takes a function as a prop and calls it to render its content. The function takes the component’s state and returns the JSX to render. This allows you to share state and logic between components without using Higher-Order Components.</p><p>Render Prop can be used to create reusable components that can be customized with different content or functionality. For example, you could create a component that renders a dropdown menu and takes a function to render the menu items. This allows you to reuse the dropdown component with different menu items in different parts of your application.</p><h2 id="what-is-the-significance-of-react-fragments" tabindex="-1"><a class="header-anchor" href="#what-is-the-significance-of-react-fragments"><span>What is the significance of React Fragments?</span></a></h2><p>React Fragments allow you to group multiple elements without adding unnecessary nodes to the DOM. It’s useful when you don’t want to introduce an additional parent div.</p><h2 id="what-is-the-significance-of-pure-component-in-react" tabindex="-1"><a class="header-anchor" href="#what-is-the-significance-of-pure-component-in-react"><span>What is the significance of Pure Component in React?</span></a></h2><p>Pure Component is a base class for class components that implements a shouldComponentUpdate method with a shallow prop and state comparison. It helps in preventing unnecessary renders for performance optimization.</p><h2 id="what-are-react-hooks-rules" tabindex="-1"><a class="header-anchor" href="#what-are-react-hooks-rules"><span>What are React Hooks rules?</span></a></h2><p>Hooks in React must be called at the top level (not inside loops or conditions), and they must be called from React functional components or custom Hooks.</p><h2 id="what-is-the-significance-of-the-dangerouslysetinnerhtml-attribute-in-react" tabindex="-1"><a class="header-anchor" href="#what-is-the-significance-of-the-dangerouslysetinnerhtml-attribute-in-react"><span>What is the significance of the dangerouslySetInnerHTML attribute in React?</span></a></h2><p>dangerouslySetInnerHTML is used to inject HTML content into a React component. It should be used with caution, as improper use can expose the application to Cross-Site Scripting (XSS) attacks.</p><h2 id="what-is-the-purpose-of-the-usecontext-hook-in-react" tabindex="-1"><a class="header-anchor" href="#what-is-the-purpose-of-the-usecontext-hook-in-react"><span>What is the purpose of the useContext Hook in React?</span></a></h2><p>useContext is a Hook in React used for consuming the value of a context. It provides a way to access the values of a context directly within a functional component.</p><h2 id="explain-the-concept-of-code-splitting-in-react" tabindex="-1"><a class="header-anchor" href="#explain-the-concept-of-code-splitting-in-react"><span>Explain the concept of code-splitting in React.</span></a></h2><p>Code-splitting is a technique in React that involves breaking the code into smaller chunks and loading them on demand. This helps in optimizing the initial loading time of the application.</p><h2 id="what-is-the-role-of-the-displayname-property-in-react" tabindex="-1"><a class="header-anchor" href="#what-is-the-role-of-the-displayname-property-in-react"><span>What is the role of the displayName property in React?</span></a></h2><p>The displayName property is used to set a display name for a React component, making it easier to debug and profile the component hierarchy.</p><h2 id="explain-the-concept-of-lazy-loading-in-react" tabindex="-1"><a class="header-anchor" href="#explain-the-concept-of-lazy-loading-in-react"><span>Explain the concept of lazy loading in React.</span></a></h2><p>Lazy loading is a technique where components or resources are loaded only when they are actually needed. React provides the React.lazy function for lazy loading components.</p><h2 id="what-is-the-purpose-of-the-react-purecomponent-class-in-react" tabindex="-1"><a class="header-anchor" href="#what-is-the-purpose-of-the-react-purecomponent-class-in-react"><span>What is the purpose of the React.PureComponent class in React?</span></a></h2><p>React.PureComponent is similar to React.Component but implements shouldComponentUpdate with a shallow prop and state comparison, optimizing performance by preventing unnecessary renders.</p><h2 id="how-does-react-handle-error-boundaries-and-what-is-their-purpose" tabindex="-1"><a class="header-anchor" href="#how-does-react-handle-error-boundaries-and-what-is-their-purpose"><span>How does React handle error boundaries, and what is their purpose?</span></a></h2><p>Error boundaries in React catch JavaScript errors anywhere in their component tree and log those errors, preventing the entire application from crashing. They are used for better error handling and logging.</p><h2 id="how-to-pass-data-from-child-to-parent-in-react" tabindex="-1"><a class="header-anchor" href="#how-to-pass-data-from-child-to-parent-in-react"><span>How to pass data from child to parent in react?</span></a></h2><p>To pass data from a child component to a parent component in React, you typically use callback functions.</p><h2 id="design-patterns-in-react" tabindex="-1"><a class="header-anchor" href="#design-patterns-in-react"><span>Design Patterns in React?</span></a></h2><ol><li>Higher-Order Components</li><li>Render Props Pattern</li><li>Custom Hooks (Hooks Pattern)</li><li>Context API for State Sharing</li></ol><h2 id="what-is-the-use-of-reactdomserver" tabindex="-1"><a class="header-anchor" href="#what-is-the-use-of-reactdomserver"><span>What is the use of ReactDOMServer?</span></a></h2><p>ReactDOMServer is a module in React that enables server-side rendering (SSR).</p><h2 id="what-is-the-difference-between-rendering-and-mounting" tabindex="-1"><a class="header-anchor" href="#what-is-the-difference-between-rendering-and-mounting"><span>What is the difference between Rendering and Mounting?</span></a></h2><p>Rendering refers to the process of generating the user interface (UI) based on the component&#39;s state and props. It happens when a component is converted into DOM elements.</p><p>Mounting is a specific phase in the React component lifecycle when a component is inserted into the DOM for the first time. It is part of the initial rendering process.</p><h2 id="what-is-react-reconciliation" tabindex="-1"><a class="header-anchor" href="#what-is-react-reconciliation"><span>What is React reconciliation?</span></a></h2><p>React reconciliation is the process by which React updates the user interface when the state of a component changes.</p><h2 id="what-do-you-understand-from-react-fiber" tabindex="-1"><a class="header-anchor" href="#what-do-you-understand-from-react-fiber"><span>What do you understand from React Fiber?</span></a></h2><p>React Fiber is the reconciliation engine for React, introduced in React 16 to improve the rendering performance and capabilities of React applications.</p><h2 id="what-is-babel" tabindex="-1"><a class="header-anchor" href="#what-is-babel"><span>What is babel?</span></a></h2><p>Babel is a JavaScript compiler that allows you to write modern JavaScript (ES6+ or JSX) and converts it into a version of JavaScript that can run in older browsers or environments.</p><h2 id="what-is-the-use-of-webpack" tabindex="-1"><a class="header-anchor" href="#what-is-the-use-of-webpack"><span>What is the use of Webpack?</span></a></h2><p>Webpack is a module bundler that takes your code and its dependencies (JavaScript, CSS, images, etc.) and bundles them into a single or few output files that can be efficiently served to the browser.</p><h2 id="explain-memory-leak-in-react" tabindex="-1"><a class="header-anchor" href="#explain-memory-leak-in-react"><span>Explain Memory Leak in React?</span></a></h2><p>A memory leak in React occurs when components or resources that are no longer needed are not properly cleaned up, resulting in increased memory usage over time</p><h2 id="what-is-react-suspense-boundary" tabindex="-1"><a class="header-anchor" href="#what-is-react-suspense-boundary"><span>What is React Suspense Boundary?</span></a></h2><p>React Suspense is a feature that manages loading states for components that fetch data asynchronously or are loaded dynamically. It allows you to show a fallback UI (like a loading spinner) while waiting for the content to load.</p><h2 id="what-is-the-difference-between-react-vs-angular" tabindex="-1"><a class="header-anchor" href="#what-is-the-difference-between-react-vs-angular"><span>What is the difference between React VS Angular?</span></a></h2><p><strong>React</strong></p><ul><li>Developed by Facebook.</li><li>Uses JSX (JavaScript XML) for templating.</li><li>Features unidirectional data flow, which means data flows in one direction (from parent to child).</li><li>Utilizes a Virtual DOM to optimize rendering perforggjmance, making updates faster.</li><li>Often uses Flux or Redux for state management, allowing for a predictable state container.</li></ul><p><strong>Angluar</strong></p><ul><li>Developed by Google.</li><li>Uses standard HTML and JavaScript/TypeScript for templating.</li><li>Supports bidirectional data binding, meaning changes in the UI automatically update the model and vice versa.</li><li>Works with the real DOM, which can be slower in certain scenarios due to direct manipulation of the actual DOM.</li><li>Follows the MVC (Model-View-Controller) architecture, providing a structured approach to building applications.</li></ul>',111)]))}const h=a(i,[["render",s],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/learn/react/iwKQgRHX8HJU0rg/","title":"Questions for the React Interview","lang":"en-US","frontmatter":{"title":"Questions for the React Interview","createTime":"2025/02/06 19:44:20","permalink":"/learn/react/iwKQgRHX8HJU0rg/","author":"Jack","tags":["React","Interview"],"description":"What is ReactJS, and what are its key features? ReactJS is an open-source JavaScript library developed by Facebook. It is used for building user interfaces in web applications. ...","head":[["meta",{"property":"og:url","content":"https://duduainy.top/learn/react/iwKQgRHX8HJU0rg/"}],["meta",{"property":"og:site_name","content":"Seasoned Jack"}],["meta",{"property":"og:title","content":"Questions for the React Interview"}],["meta",{"property":"og:description","content":"What is ReactJS, and what are its key features? ReactJS is an open-source JavaScript library developed by Facebook. It is used for building user interfaces in web applications. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-13T12:58:31.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:tag","content":"Interview"}],["meta",{"property":"article:modified_time","content":"2025-02-13T12:58:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Questions for the React Interview\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-13T12:58:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\"}]}"]]},"headers":[],"readingTime":{"minutes":8.77,"words":2631},"git":{"updatedTime":1739451511000,"contributors":[{"name":"meishenlieshou","username":"meishenlieshou","email":"meishenlieshou@gmail.com","commits":2,"avatar":"https://avatars.githubusercontent.com/meishenlieshou?v=4","url":"https://github.com/meishenlieshou"}],"changelog":[{"hash":"3e0e2c654100977ef9ee5b4ee9d18ab6d02a0ba2","date":1738852475000,"email":"meishenlieshou@gmail.com","author":"meishenlieshou","message":"note","commitUrl":"https://github.com/meishenlieshou/note/commit/3e0e2c654100977ef9ee5b4ee9d18ab6d02a0ba2"},{"hash":"7c3e99590f571bda6991a4a6501cc2ca565ad23b","date":1739451511000,"email":"meishenlieshou@gmail.com","author":"meishenlieshou","message":"commit","commitUrl":"https://github.com/meishenlieshou/note/commit/7c3e99590f571bda6991a4a6501cc2ca565ad23b"}]},"autoDesc":true,"filePathRelative":"notes/learn/react/5.Questions for the React Interview.md","bulletin":false}');export{h as comp,p as data};
