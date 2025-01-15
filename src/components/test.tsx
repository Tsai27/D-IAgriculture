'use client'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from './utils/motion'
import { ProjectCard } from './ProjectCard'
import { Navigation, Pagination, Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { useEffect, useState } from 'react'

export const Test = () => {
  let initialSize
  if (typeof window !== 'undefined') {
    initialSize = window.matchMedia('(max-width: 768px)').matches ? 1 : 3
  }

  const [isMobile, setIsMobile] = useState(initialSize)

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        setIsMobile(1)
      } else {
        setIsMobile(3)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const projects = [
    {
      id: 1,
      name: '有故事有颜值！这群新农人又出圈了！',
      image: '/images/640.jpg',
      description: '今年3月为了给小伙伴营造互相帮助、追求自我成长、实现自我价值的工作环境，办公室制定了一套价值观行为考核表，帮助小伙伴们记录在困难中成长、在成长中突破自我的高光时刻。r',
    },
    {
      id: 2,
      name: 'Upload AI',
      image: '/images/641.jpg',
      description:
        'Chat com inteligencia artificial baseado em videos enviados e transcritos pela open ai',
      tags: [
        { name: 'node-js', color: 'blue-text-gradient' },
        { name: 'react', color: 'green-text-gradient' },
        { name: 'tailwindcss', color: 'pink-text-gradient' },
      ],
      link: 'https://github.com/gabislera/Upload-ai',
    },
    {
      id: 3,
      name: 'Cofee Delivery',
      image: '/images/642.jpg',
      description: 'Delivery de cafés com controle de quantidades e carrinho.',
      tags: [
        { name: 'node-js', color: 'blue-text-gradient' },
        { name: 'react', color: 'green-text-gradient' },
        { name: 'styled-components', color: 'pink-text-gradient' },
      ],
      link: 'https://github.com/gabislera/Cofee-Delivery',
    },
    {
      id: 4,
      name: 'Food explorer',
      image: '/images/643.jpg',
      description:
        'Aplicação para restaurante onde o admin pode adicionar ou editar pratos.',
      tags: [
        { name: 'node-js', color: 'blue-text-gradient' },
        { name: 'react', color: 'green-text-gradient' },
        { name: 'tailwindcss', color: 'pink-text-gradient' },
      ],
      link: 'https://github.com/gabislera/Food-explorer-fullstack',
    },
    {
      id: 5,
      name: 'Rocketnotes',
      image: '/images/644.jpg',
      description:
        'Dashboard para criação de notas e links úteis agrupados por tags.',
      tags: [
        { name: 'node-js', color: 'blue-text-gradient' },
        { name: 'typescript', color: 'green-text-gradient' },
        { name: 'styled-components', color: 'pink-text-gradient' },
      ],
      link: 'https://github.com/gabislera/Rocketnotes',
    }
  ]

  return (
    <motion.section
      id="projects"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto max-w-7xl px-6 py-24 sm:px-16 sm:py-32"
    >
      <motion.div variants={textVariant()}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                新闻动态
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                学术交流、科研进展、课外活动等
                </p>
              </div>

      </motion.div>

      <motion.div variants={fadeIn('', '', 0.1, 1)}>
        <div className="mt-20 flex flex-wrap gap-7 ">
          <Swiper
            slidesPerView={isMobile}
            grid={{ rows: 1 }}
            spaceBetween={30}
            pagination={{ dynamicBullets: true }}
            loop={true}
            navigation={true} // 启用前后切换按钮
            modules={[Navigation, Pagination, Grid]} // 使用模块
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </motion.section>
  )
}
