/*
 * @Author: Tsai27
 * @Date: 2024-12-25 16:12:01
 */
'use-client'
// import { useEffect, useRef } from 'react'

import Image from 'next/image'

interface Tag {
  name: string
  color: string
}

interface ProjectCardProps {
  name: string
  description: string

  image: any // FIX: change to correct type

}

export const ProjectCard = ({
  name,
  description,
  image,
}: ProjectCardProps) => {
  return (
    <div className="hover:border-1 w-full rounded-2xl border-[1px] border-green-300 bg-green-1500 p-5 hover:border-red-700 hover:bg-transparent sm:w-[22.5rem]">
      <div className="relative h-[14.375rem] w-full">
        <Image
          height={500}
          width={500}
          src={image}
          alt=""
          className="h-full w-full rounded-2xl object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h2 className="text-[1.5rem] font-bold ">{name}</h2>
        </div>
        <p className="mt-2 text-[0.875rem] ">{description}</p>
      </div>


    </div>
  )
}
