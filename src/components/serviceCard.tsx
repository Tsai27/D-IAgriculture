/*
 * @Author: Tsai27
 * @Date: 2024-12-25 10:24:44
 * @Description:研究方向的卡片组件（确认版）
 */
import { fadeIn } from './utils/motion'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

interface SeviceCardProps {
  index: number
  title: string
  icon: React.ReactNode
  image:string
}

export const ServiceCard = ({ index, title, icon, image }: SeviceCardProps) => (
  <Tilt className="w-full">
    <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)}>
      <div className="group flex flex-col items-center justify-center gap-2 rounded-[20px] border-[1px] border-purple-50 bg-white px-5 py-5 shadow-card hover:bg-blue-200 sm:gap-5 sm:px-5 sm:py-10 w-[271px] h-[251px] relative">

        {/* 图标和标题部分 */}
        <div className="flex items-center gap-2">
          <div className="icon bg-blue-400 rounded-full p-1 text-white">
            {icon}
          </div>
          <span className="text-center text-base font-bold text-custom-blue">
            {title}
          </span>
        </div>

        {/* 当卡片被悬停时显示图像 */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-[20px] "
          />
        </div>

      </div>
    </motion.div>
  </Tilt>
);


