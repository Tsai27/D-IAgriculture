/*
 * @Author: Tsai27
 * @Date: 2024-12-17 10:32:41
 * @Description: 团队成员部分（初步首页版 - 暂不使用）
 */

import React from "react"
import Image from "next/image"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

// TeamMember 组件，用来渲染每个团队成员的信息
const TeamMember = ({ name, position, description, image }: any) => (
      <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4 ">
        <div className="group relative mb-8  shadow-testimonial ">
          {/* 头像 */}
          <div className="relative z-10 mx-auto mb-5 h-[266px] w-[266px] flex justify-center items-center">
            <Image
              src={image}
              alt="team image"
              width={266}
              height={266}
              className="rounded-xl"
            />
            {/* 12/18添加图片弹出层及效果 */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex justify-center p-4">
                <div className="flex flex-col justify-end text-center text-white w-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="text-sm">{description}</p>
                </div>
            </div> 
          </div>

            {/* 文字介绍 */}
            <div className="text-center">
                <h3 className="text-2xl font-bold mb-5">{name}</h3>
                <p className="text-xl leading-5 mb-4 text-neutral-600 dark:text-neutral-400">
                {position}
                </p>
                <p className="text-xl leading-5 mb-4 text-neutral-600 dark:text-neutral-400">
                {description}
                </p>
            </div>
        </div>
      </div>
)

export default async function Team({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang)

  // 将团队成员的内容提取为数组，便于动态渲染
  const team = [
    dict.team.professors.member1,
    dict.team.professors.member2,
    dict.team.professors.member3
  ]

  return (
    <section id="team" className="w-full bg-gray-2 dark:bg-dark-2 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            {dict.team.name}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dict.team.description}
          </p>
        </div>

        {/* 团队成员排列矩阵 */}
        <div className="-mx-4 flex flex-wrap justify-center mt-8">
          {team.map((teamItem, idx) => (
            <TeamMember
              key={idx}
              name={teamItem.name}
              position={teamItem.position}
              description={teamItem.description}
              image={teamItem.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
