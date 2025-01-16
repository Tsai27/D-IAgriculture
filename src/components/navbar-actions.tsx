/*
 * @Author: Tsai27
 * @Date: 2025-01-16 09:29:36
 * @Description:导航栏主题、中英文切换（确认版）
 */
"use client"


import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"


export function NavbarActions() {

  return (
    <div className="flex items-center space-x-2">
      <ThemeToggle />
      <LanguageSwitcher />
    </div>
  )
}
