/*
 * @Author: Tsai27
 * @Date: 2025-01-10 15:17:29
 * @Description:首页Hero部分图片轮播（确认版）
 */

"use client";
import { useEffect, useState } from "react";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

const Hero = ({ lang }: { lang: Locale }) => {
  const [dict, setDict] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ];

  // 加载字典数据
  useEffect(() => {
    const loadDictionary = async () => {
      const loadedDict = await getDictionary(lang); // 获取字典数据
      setDict(loadedDict);
    };
    loadDictionary();
  }, [lang]); // 监听语言变化

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // 切换时间3.5s

    return () => clearInterval(interval); // 清除定时器
  }, [images.length]);

  if (!dict) {
    return <div>Loading...</div>; // 等待字典加载
  }

  return (
    <section id="home" className="w-full h-[600px] flex items-center justify-center relative">
  {/* 图像 */}
  <div className="absolute w-full h-full">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Hero image ${index}`}
        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}
  </div>

  
    
    <div className="container px-4 md:px-6 relative z-10 text-center">
      <div className="flex flex-col items-center space-y-12 md:w-1/2 mx-auto bg-black bg-opacity-50 p-3 rounded-lg">
        {/* 文字部分 */}
    
        <h1 className="max-w-xl text-4xl font-bold md:text-5xl text-left text-white">{dict.home.hero.title}</h1>
        <h2 className="max-w-xl text-2xl font-bold md:text-3xl text-left text-white">{dict.home.hero.description1}</h2>
      


      </div>
    </div>


</section>

  );
};

export default Hero;

