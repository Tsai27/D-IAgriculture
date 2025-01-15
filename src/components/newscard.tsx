/*
 * @Author: Tsai27
 * @Date: 2024-12-30 14:49:07
 */
import React from "react";

// 定义组件的 props 类型
interface NewsCardProps {
  title: string;
  description: string;
  image: string;
}

const NewsCard = ({ title, description, image }: NewsCardProps) => {
  const desc = description.length > 100 ? description.substr(0, 100) : description; // 防止 description 为空或长度过短
  return (
    <div className="bg-slate-100 dark:bg-dark-2 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out">
      <img
        src={image || "image not defined"}
        alt={title}
        className="h-56 w-full object-cover rounded-t-lg shadow-md italic text-sm"
      />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold">{title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6">{desc}...</p>
          </section>
          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic ">
            <p>Author -</p>
            <p>Published at</p>
          </footer>
        </div>

      </div>
    </div>
  );
};

export default NewsCard;
