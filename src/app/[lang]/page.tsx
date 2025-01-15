/*
 * @Author: Tsai27
 * @Date: 2024-12-10 10:39:46
 */
import React from 'react'
import Result from "@/components/result"
import Team from "@/components/team"
import News from "@/components/news"
import Map from "@/components/map"
import About from "@/components/about"
import Hero from "@/components/hero"
//import Team1 from "@/components/team1"
import { ScrollToTop } from "@/components/scroll-to-top"
import { getDictionary } from '@/i18n/get-dictionary'
import type { Locale } from '@/i18n/config'
import { 
  MapPin,
  PhoneCall,
  MailCheck  
} from "lucide-react"



export default async function Home({
  params: { lang }
  }: {
    params: { lang: Locale }
  }) {
    const dict = await getDictionary(lang)
  

  return (
    <main  className="flex flex-col items-center w-full">
      
      <Hero lang={lang}/>
      <About lang={lang} />
      <Result lang={lang} />
      <Team lang={lang} />
      <News lang={lang}  />
      <ScrollToTop />
      
<section id="contact" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 左侧文字部分 */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            {dict.home.cta.title}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dict.home.cta.description1}
            <br />
            {dict.home.cta.description2}
          </p>
          <ul className=" pl-6 space-y-2 text-gray-700 md:text-lg">
              <li>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" /> {/* 位置 */}
                  <span>{dict.footer.info.location}</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <PhoneCall className="h-4 w-4 text-gray-500" /> {/* 电话 */}
                  <span>{dict.footer.info.phone}</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <MailCheck className="h-4 w-4 text-gray-500" /> {/* 邮件 */}
                  <span>{dict.footer.info.email}</span>
                </div>
              </li>
          </ul>
          
        </div>

        {/* 右侧地图部分 */}
        <Map></Map>



      </div>
    </div>
</section>


    </main>
  )
}
