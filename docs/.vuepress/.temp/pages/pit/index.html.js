import comp from "C:/Users/Administrator/Desktop/workspace/note/docs/.vuepress/.temp/pages/pit/index.html.vue"
const data = JSON.parse("{\"path\":\"/pit/\",\"title\":\"README\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"README\",\"createTime\":\"2025/01/08 22:57:20\",\"permalink\":\"/pit/\",\"author\":\"Jack\",\"categories\":[\"Pit\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"notes/pit/README.md\",\"bulletin\":false}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
