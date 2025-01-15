import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slideup"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { 
  BookOpenCheck
} from "lucide-react"


      export default async function News({
        lang
      }: {
        lang: Locale
      }) {
        const dict = await getDictionary(lang)
        const news = [
            {
              name: dict.news.projects1.title,
              description:dict.news.projects1.description,
              image: dict.news.projects1.image,
              link: dict.news.projects1.link,
            },
            {
              name: dict.news.projects2.title,
              description: dict.news.projects2.description,
              image: dict.news.projects2.image,
              link: dict.news.projects2.link,
            },
            {
              name: dict.news.projects3.title,
              description:dict.news.projects3.description,
              image: dict.news.projects3.image,
              link: dict.news.projects3.link,
            },
        ]
        return (
          <section id="news" className="w-full py-12 md:py-24 lg:py-32">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  {dict.news.name}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dict.news.description}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-28 mt-8">
                {news.map((newsItem, idx) => {
                  return (
                    <div key={idx} className="w-full max-w-screen-lg">
                      <SlideUp offset="-300px 0px -300px 0px">
                        <div className="flex flex-col md:flex-row md:space-x-12 animate-slideUpCubiBezier animation-delay-2">
                         
                          {/* 图片部分 */}
                          <div className="md:w-1/2 flex justify-center">
                            <Link href={newsItem.link}>
                              <Image
                                src={newsItem.image}
                                alt=""
                                width={400}
                                height={400}
                                className="rounded-xl shadow-xl hover:opacity-70"
                                layout="responsive"
                              />
                            </Link>
                          </div>
            
                          {/* 文本部分 */}
                          <div className="mt-8 md:mt-0 md:w-1/2">
                            <h1 className="text-2xl font-bold mb-6">{newsItem.name}</h1>
                            <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                              {newsItem.description}
                            </p>
                            <div className="flex flex-row items-center space-x-4">
                              <Link href={newsItem.link} target="_blank">
                                <BookOpenCheck
                                  size={30}
                                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SlideUp>
                    </div>
                  );
                })}
              </div>

          </section>
        )

    }
