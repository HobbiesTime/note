export const blogPostData = [{"path":"/thoughts/5Eoi74YwusIhrE51u6id/","title":"Good relationships with superiors","categoryList":[{"id":"eea645","sort":10000,"name":"thoughts"}],"tags":["thoughts","relationships"],"createTime":"2025/02/06 22:36:18","lang":"en-US","excerpt":""},{"path":"/read/Jo1uDAd76bLlvYid/","title":"《Effective TypeScript》","categoryList":[{"id":"0fb9cf","sort":10001,"name":"reads"}],"tags":["typescript","English book"],"createTime":"2025/02/02 08:40:05","lang":"en-US","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
