"use client"; // 确保这是客户端组件

import React, { useState, useEffect } from 'react';
import Link from "next/link";    
import Image from 'next/image';
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { NavbarActions } from "./navbar-actions";
import { MobileNav } from "./mobile-nav";

export default function Navbar({
  lang
}: {
  lang: Locale;
}) {
  const [activeSection, setActiveSection] = useState<string>('');  // 当前活跃的锚点
  const [dict, setDict] = useState<any>(null); // 用来存储字典数据

  useEffect(() => {
    const fetchData = async () => {
      const dictData = await getDictionary(lang);
      setDict(dictData);
    };
    fetchData();
  }, [lang]);

  // 导航链接数组
  const nav = dict ? [
    {
      label: dict.navs.navbar0.name,
      page: "#home",
    },
    {
      label: dict.navs.navbar1.name,
      page: "#direction",
    },
    {
      label: dict.navs.navbar2.name,
      page: "#result",
    },
    {
      label: dict.navs.navbar3.name,
      page: "#team",
    },
    {
      label: dict.navs.navbar4.name,
      page: "#news",
    },
    {
      label: dict.navs.navbar5.name,
      page: "#contact",
    },
  ] : [];

  // 通过 IntersectionObserver 监听哪些部分可见，更新活跃部分
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);  // 当某个部分进入视口时，更新活跃部分
          }
        });
      },
      { threshold: 0.5 } // 当至少有 50% 部分进入视口时触发
    );

    // 观察每个 section 元素
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // 处理滚动到特定锚点的逻辑
  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // 平滑滚动
        block: 'start',     // 确保目标部分显示在视口顶部
      });
    }
  };

  if (!dict) return null;  // 防止字典数据为空时渲染错误

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.svg" alt="Logo" width={150} height={50} className="h-6 w-6" />
            <span className="font-bold">{dict.common.brand}</span>
          </Link> 
        </div>
        <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex-1 md:flex-none">
            <div className="hidden items-center space-x-4 md:flex">
              {nav.map((navItem, idx) => {
                return (
                  <div key={idx}>
                    <button
                      onClick={() => handleScrollToSection(navItem.page)}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        activeSection === navItem.page ? 'text-primary font-bold' : ''
                      }`}
                    >
                      {navItem.label}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <NavbarActions   />
          <MobileNav lang={lang} dict={dict} />
        </nav>
      </div>
    </header>
  );
}
