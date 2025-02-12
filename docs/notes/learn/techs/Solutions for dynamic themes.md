---
title: Solutions for dynamic themes
createTime: 2025/01/20 21:21:06
permalink: /learn/front/fJJYokDUt0660/
author: Jack
tags:
  - 换肤
  - 主题
  - CSS变量

description: description
---


## 总览

| **方案**                | **适用场景**                                    | **优点**                          | **缺点**                        |
|-------------------------|-----------------------------------------------|-----------------------------------|---------------------------------|
| CSS Variables           | 通用，现代项目                                | 简单、高效、易维护                | 需现代浏览器支持               |
| CSS 预处理器            | 大型复杂项目                                  | 灵活、支持预编译                  | 动态性稍弱                     |
| 动态切换类名            | 小型或简单项目                                | 实现简单、兼容性好                | 样式可能冲突                   |
| 组件库动态换肤          | 使用 Ant Design、Element Plus 等 UI 框架       | 深度集成组件库                    | 需依赖组件库工具               |
| Tailwind CSS 动态主题    | Tailwind CSS 项目                             | 整合好，原生支持                  | 依赖 Tailwind                  |


## CSS Variables（CSS 自定义属性）

### **`原理`**

通过定义全局的 CSS 变量（如颜色、字体大小等），在主题切换时动态修改 CSS 变量的值。

### **`示例`**

```CSS
/* 定义变量 */
:root {
  --primary-color: #007bff;
  --background-color: #ffffff;
  --text-color: #000000;
}

[data-theme="dark"] {
  --primary-color: #1e90ff;
  --background-color: #333333;
  --text-color: #ffffff;
}

/*使用变量*/
body {
  background-color: var(--background-color);
  color: var(--text-color);
}
.button {
  background-color: var(--primary-color);
}
```

```Javascript
//JavaScript中切换主题
function switchTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}
switchTheme('dark'); 
```

## CSS 预处理器

### **`原理`**

使用预处理器变量（如 Sass 中的 $变量）管理主题样式，在构建阶段通过工具生成不同的主题文件。

### **`示例`**
```less
/*theme/light-theme.less*/
@primary-color: #007bff;
@background-color: #ffffff;
@text-color: #000000;

/*theme/dark-theme.less*/
@primary-color: #1e90ff;
@background-color: #333333;
@text-color: #ffffff;

/*main.less*/
@import (reference) "./themes/light-theme.less"; // 默认加载浅色主题
body {
  background-color: @background-color;
  color: @text-color;
}
.button {
  background-color: @primary-color;
  color: @text-color;
}
```

```Javascript
import less from 'less';

// 主题切换函数
async function fetchThemeVariables(theme) {
  const response = await fetch(`/themes/${theme}-theme.less`);
  const themeContent = await response.text();
  return themeContent;
}
function parseLessToVariables(lessContent) {
  const variables = {};
  lessContent.split('\n').forEach((line) => {
    const match = line.match(/^@([\w-]+):\s*(.+);$/);
    if (match) {
      variables[`@${match[1]}`] = match[2];
    }
  });
  return variables;
}
async function switchTheme(theme) {
  try {
    const themeContent = await fetchThemeVariables(theme);
    less.modifyVars(parseLessToVariables(themeContent)); //根据规则更新css样式表
    console.log(`Switched to ${theme} theme`);
  } catch (error) {
    console.error('Error loading theme:', error);
  }
}

// 切换到暗黑主题
switchTheme('dark');
```


## 动态切换类名

### **`原理`**

根据主题切换时，在根元素（如 `<html>` 或 `<body>`）上动态添加类名，从而触发不同的样式规则。

### **`示例`**
```CSS
/* 定义变量 */
body.light {
  --primary-color: #007bff;
  --background-color: #ffffff;
  --text-color: #000000;
}

body.dark {
  --primary-color: #1e90ff;
  --background-color: #333333;
  --text-color: #ffffff;
}

/* 使用变量 */
body {
  background-color: var(--background-color);
  color: var(--text-color);
}
```

```Javascript
//Javascript切换主题
function switchTheme(theme) {
  document.body.className = theme;
}
switchTheme('dark');

```

## 组件库动态换肤(Antd)

### **`原理`**

对于基于组件库（如 Ant Design、Element Plus）的项目，可以通过动态修改组件主题变量或覆盖全局样式实现换肤

### **`示例`**
```Javascript
//配置文件
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A'
          },
          javascriptEnabled: true
        }
      }
    }
  }
};

//修改主题变量
function changeTheme(theme) {
  window.less.modifyVars(theme);
}
changeTheme({
  'primary-color': '#ff4d4f'
});

```

## 使用 Tailwind CSS 的动态主题

### **`原理`**

Tailwind CSS 支持通过 theme.extend 动态扩展主题，结合 darkMode 或 class 实现换肤。

### **`示例`**
```Javascript
//tailwind.config.js中定义配置
module.exports = {
  darkMode: 'class', // 开启暗黑模式
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        background: '#ffffff',
        text: '#000000'
      }
    }
  }
};

//代码中切换主题
function switchTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}
switchTheme('dark');
```

```html
<body class="dark">
  <div class="bg-background text-text"></div>
</body>

```
