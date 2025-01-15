/*
 * @Author: Tsai27
 * @Date: 2024-12-10 10:39:46
 */
import Link from "next/link"
import Image from "next/image"
import { Sprout } from "lucide-react"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"


export default async function Footer({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  const footerLinks = {
    [dict.footer.support]: [
      { name: dict.footer.links.znsz, imgSrc: '/images/caas.png'},
      { name: dict.footer.links.znsz, imgSrc: '/images/hbgeo.png' },
      { name: dict.footer.links.znsz, imgSrc: '/images/tokyo.svg' },
      { name: dict.footer.links.znsz, imgSrc: '/images/nafu1.svg' },
      { name: dict.footer.links.znsz, imgSrc: '/images/szdx.png' },
      { name: dict.footer.links.znsz, imgSrc: '/images/gs.png'}
    ],
  }

  return (
    <footer className="relative w-full bg-background/40 backdrop-blur-sm dark:bg-dark-5">
      <div className="container relative  ">
        <div className="grid grid-cols-1 gap-8 border-t">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3 text-center">
              <h4 className="text-2xl font-semibold md:text-3xl py-8 md:py-10 lg:py-15 dark:text-custom-white">{category}</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {links.map((link) => (
                  <div key={link.name} className="flex items-center justify-center w-1/4">
                    <Image
                      src={link.imgSrc}
                      alt={link.name}
                      width={200}  // Adjust width
                      height={100} // Adjust height
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      
        
        <div className="flex flex-col items-center justify-center">
            <div className="text-sm text-muted-foreground">
              <p className="dark:text-custom-white">{dict.footer.copyright}</p>
            </div>

        </div>
      </div>
    </footer>
  )
}
