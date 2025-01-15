/*
 * @Author: Tsai27
 * @Date: 2024-12-10 10:39:46
 */
import React from "react"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

export default async function Hero({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  return (
    <section id="home" className="w-full h-screen flex items-center relative">
      {/* 视频背景 */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" 
      >
        <source src="/images/24-1.mp4" type="video/mp4" />
      </video>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-xl text-4xl font-bold text-center md:text-5xl md:text-left">
            {dict.home.hero.title}
          </h1>
          <p className="text-center md:text-left max-w-[700px] text-blue-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dict.home.hero.description2}
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="">{dict.home.hero.learnMore}</Button>
            <Button size="lg" variant="outline">{dict.home.hero.watchDemo}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
