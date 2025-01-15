/*
 * @Author: Tsai27
 * @Date: 2024-12-23 15:52:55
 * @Description:研究方向section（确认版） -- 配套卡片：serviceCard.tsx
 */
'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { fadeIn, staggerContainer, textVariant } from './utils/motion'
import { ServiceCard } from './serviceCard'
import { 
  CloudCog, 
  Layers, 
  DatabaseBackup, 
  MonitorCog,
} from "lucide-react"

export default function About({
  lang
}: {
  lang: Locale
}) {
  const [dict, setDict] = useState<any>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const dictData = await getDictionary(lang)
      setDict(dictData)
    }
    fetchData()

    // 检查 sessionStorage 中是否存在动画已完成的标记
    const animationCompleted = sessionStorage.getItem('aboutAnimationCompleted')
    if (animationCompleted) {
      setHasAnimated(true) // 如果已经有标记，则跳过动画
    } else {
      setHasAnimated(false) // 如果没有标记，则显示动画
    }
  }, [lang])

  useEffect(() => {
    // 如果动画显示过了，就将标记设置到 sessionStorage 中
    if (!hasAnimated && dict) {
      sessionStorage.setItem('aboutAnimationCompleted', 'true')
    }
  }, [hasAnimated, dict])

  // 在使用 dict.features 之前先检查 dict 是否存在，并且 features 是否存在
  if (!dict || !dict.features) {
    return <div>Loading...</div>
  }

  const features = [
    {
      id: 1,
      title: dict.features.tabs.title,
      description: dict.features.tabs.description,
      icon: <CloudCog className="h-8 w-8" />,
      image:'/images/about1.jpg'
    },
    {
      id: 2,
      title: dict.features.bookmarks.title,
      description: dict.features.bookmarks.description,
      icon: <Layers className="h-8 w-8" />,
      image:'/images/about2.jpg'
    },
    {
      id: 3,
      title: dict.features.share.title,
      description: dict.features.share.description,
      icon: <DatabaseBackup className="h-8 w-8" />,  
      image:'/images/about3.jpg'
    },
    {
      id: 4,
      title: dict.features.security.title,
      description: dict.features.security.description,
      icon: <MonitorCog className="h-8 w-8" />,
      image:'/images/about4.jpg'
    },
  ]

  return (
    <motion.section
      id="direction"
      variants={staggerContainer()}
      initial="hidden"
      whileInView={hasAnimated ? "show" : "hidden"}  // 动画只会显示一次
      viewport={{ once: true, amount: 0.25 }}
      className="w-full  bg-gray-2 dark:bg-dark-2 z-0 mx-auto px-6 py-10 sm:px-16 sm:py-16 bg-fixed bg-cover bg-center"
    >
    <div className = "flex flex-col items-center justify-center space-y-4 text-center">
      <motion.div variants={textVariant()}>
        <h2 className="text-xl font-bold tracking-tighter md:text-4xl text-center">
          {dict.features.title}
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 flex max-w-4xl flex-col gap-2 text-base leading-7 "
      >
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{dict.home.hero.description2}</p>
        
      </motion.div>
    </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
        {features.map((feature) => (
          <ServiceCard key={feature.title} index={feature.id} {...feature} />
        ))}
      </div>
    </motion.section>
  )
}
