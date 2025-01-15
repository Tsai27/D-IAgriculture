/*
 * @Author: Tsai27
 * @Date: 2024-12-10 10:39:46
 */
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import type { Locale } from "@/i18n/config"

interface MobileNavProps {
  lang: Locale
  dict: any
}

export function MobileNav({ lang, dict }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">切换菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <div className="flex flex-col space-y-4 mt-4">
        <Link href={`/${lang}/`} className="text-sm font-medium">
            {dict.navs.navbar0.name}
          </Link>
          <Link href={`/${lang}/blog`} className="text-sm font-medium">
            {dict.navs.navbar4.name}
          </Link>
          <Link href={`/${lang}/team`} className="text-sm font-medium">
            {dict.navs.navbar3.name}
          </Link>
          <Link href={`/${lang}/result`} className="text-sm font-medium">
            {dict.navs.navbar2.name}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
