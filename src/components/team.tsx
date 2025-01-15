/*
 * @Author: Tsai27
 * @Date: 2024-12-20 11:00:53
 * @Description:首页研究团队（确认版）
 */
"use client"
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button";
import Link from "next/link" 
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

export default function Team({
  lang,
}: {
  lang: Locale
}) {
  const [dict, setDict] = useState<any>(null); // 初始化 dict 的状态

  useEffect(() => {
    // 使用 async 函数在 useEffect 中获取数据
    const fetchData = async () => {
      const data = await getDictionary(lang);
      setDict(data); // 设置获取到的数据
    };

    fetchData(); // 调用异步函数获取数据
  }, [lang]); // lang 发生变化时重新请求数据

  // 如果 dict 数据还未加载完成，则显示加载中
  if (!dict) {
    return <div>Loading...</div>;
  }

  return (
    <section id="team" className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold">
              {dict.team.name}
            </h2>
            <div className="h-1 w-20 bg-blue-600 mt-2"></div>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {dict.team.description}
          </p>
          <Link href={`/${lang}/team`}>           {/* 链接至team子页面 */}
            <Button className="mt-6 bg-custom-blue hover:bg-custom-blue1" size="lg">
              {dict.team.button}
            </Button>
          </Link>
          
        </div>
        {/* Image */}
        <div className="grid grid-cols-2 gap-4 relative">
            <div className="col-span-2">
              <div className="relative overflow-hidden rounded-lg h-64">
                <img
                  src="/images/text7.jpg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover hover:animate-image-scale"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-48">
              <img
                src="/images/team.png"
                alt="Team meeting"
                className="w-full h-full object-cover hover:animate-image-scale"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-48">
              <img
                src="/images/team1.jpg"
                alt="Team member working"
                className="w-full h-full object-cover hover:animate-image-scale"
              />
            </div>
          </div>
      </div>
    </section>
  );
}
