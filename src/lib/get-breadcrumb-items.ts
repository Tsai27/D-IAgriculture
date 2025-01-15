/*
 * @Author: Tsai27
 * @Date: 2024-12-10 10:39:46
 */
import type { Locale } from "@/i18n/config"

export function getBreadcrumbItems(pathname: string, dict: any) {
  const paths = pathname.split('/').filter(Boolean)
  const items = []
  
  // 移除语言部分
  const lang = paths.shift() as Locale
  
  for (const path of paths) {
    switch(path) {
      case 'blog':
        // 只有当不是最后一个路径时才添加链接
        if (paths.length > 1) {
          items.push({
            label: dict.navs.navbar4.name,
            href: `/${lang}/blog`
          })
        } else {
          items.push({
            label: dict.navs.navbar4.name
          })
        }
        break
      case 'team':
        items.push({
          label: dict.navs.navbar3.name,
          href: `/${lang}/team`
        })
        break
      case 'result':
        items.push({
          label: dict.navs.navbar2.name,
          href: `/${lang}/result`
        })
        break
      default:
        // 处理博客文章等动态路由
        if (paths[paths.length - 2] === 'blog') {
          const post = dict.blog.posts.find((p: any) => p.slug === path)
          items.push({
            label: post ? post.title : path
          })
        }
    }
  }
  
  return items
}
