/*
 * @Author: Tsai27
 * @Date: 2024-12-30 14:27:07
 * @Description:新闻部分含分页（确认版） -- 配套卡片newscard.tsx
 */
"use client"; // 将该组件标记为客户端组件
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import NewsCard from "./newscard";

export default function News({ lang }: { lang: Locale }) {
  // 初始化 dict 为一个空对象，避免 null 引发的错误
  const [dict, setDict] = useState<any>({});
  const [loading, setLoading] = useState(true);

  // 在客户端异步加载字典数据
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDictionary(lang);
      setDict(data);
      setLoading(false);
    };

    fetchData();
  }, [lang]);

  // 直接将新闻数据定义在这里
  const news = [
    {
      name: dict?.news?.projects1?.title || 'Default Title',
      description: dict?.news?.projects1?.description || 'Default Description',
      image: dict?.news?.projects1?.image || 'Default Image URL',
      link: dict?.news?.projects1?.link || 'Default Link',
    },
    {
        name: dict?.news?.projects2?.title || 'Default Title',
        description: dict?.news?.projects2?.description || 'Default Description',
        image: dict?.news?.projects2?.image || 'Default Image URL',
        link: dict?.news?.projects2?.link || 'Default Link',
      },
      {
        name: dict?.news?.projects3?.title || 'Default Title',
        description: dict?.news?.projects3?.description || 'Default Description',
        image: dict?.news?.projects3?.image || 'Default Image URL',
        link: dict?.news?.projects3?.link || 'Default Link',
      },
      {
        name: dict?.news?.projects4?.title || 'Default Title',
        description: dict?.news?.projects4?.description || 'Default Description',
        image: dict?.news?.projects3?.image || 'Default Image URL',
        link: dict?.news?.projects4?.link || 'Default Link',
      },
      {
        name: dict?.news?.projects5?.title || 'Default Title',
        description: dict?.news?.projects5?.description || 'Default Description',
        image: dict?.news?.projects3?.image || 'Default Image URL',
        link: dict?.news?.projects4?.link || 'Default Link',
      },
      {
        name: dict?.news?.projects4?.title || 'Default Title',
        description: dict?.news?.projects4?.description || 'Default Description',
        image: dict?.news?.projects3?.image || 'Default Image URL',
        link: dict?.news?.projects4?.link || 'Default Link',
      },
      {
        name: dict?.news?.projects4?.title || 'Default Title',
        description: dict?.news?.projects4?.description || 'Default Description',
        image: dict?.news?.projects3?.image || 'Default Image URL',
        link: dict?.news?.projects4?.link || 'Default Link',
      },
      {
        name: dict?.news?.projects4?.title || 'Default Title',
        description: dict?.news?.projects4?.description || 'Default Description',
        image: dict?.news?.projects3?.image || 'Default Image URL',
        link: dict?.news?.projects4?.link || 'Default Link',
      }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [newsPerPage] = useState(6);

  // Paginate function to return the current news slice based on the page
  const paginate = () => {
    const startIndex = currentPage * newsPerPage;
    const endIndex = startIndex + newsPerPage;
    return news.slice(startIndex, endIndex);
  };

  // 如果数据正在加载，显示加载中状态
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="news" className="container mx-auto py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {dict.news.name}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {dict.news.description}
            </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {paginate().map((newsItem,idx) => (
          <NewsCard
            key={idx}
            title={newsItem.name}
            description={newsItem.description}
            image={newsItem.image}
            link={newsItem.link}
          />
        ))}
      </div>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={Math.ceil(news.length / newsPerPage)}
        onPageChange={(data) => setCurrentPage(data.selected)}
        containerClassName={"pagination"}
        previousLinkClassName={"previous_page"}
        nextLinkClassName={"next_page"}
        disabledClassName={"pagination_disabled"}
        activeClassName={"pagination_active"}
        className="mx-auto justify-center flex flex-row gap-4 mb-8 mt-8"
      />
    </section>
  );
}
