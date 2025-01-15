/*
 * @Author: Tsai27
 * @Date: 2025-01-02 16:34:52
 * @Description:重写模板
 */
import React from 'react'
import Image from 'next/image'

export function Link(){

    return(
        <section className = "w-full flex py-8 md:py-18 lg:py-28 bg-gray-1 dark:bg-dark-2 items-center justify-center bg-fixed bg-cover bg-center">
            <div className = "grid max-w-sm grid-cols-6 gap-4 mx-auto md:max-w-4xl md:grid-cols-6 place-content-center">
                <a className = "flex items-center justify-center col-span-2 py-2 transition-transform hover:scale-110 md:col-auto" >
                    <Image
                        src='/images/hbgeo.svg'
                        alt="logo"
                        width={130}
                        height={80}
                        className="rounded-xl shadow-xl hover:opacity-70"
                        layout="responsive"
                        />
                </a>
                <a className = "flex items-center justify-center col-span-2 py-2 transition-transform hover:scale-110 md:col-auto" >
                    <Image
                        src='/images/naf.svg'
                        alt="logo"
                        width={130}
                        height={80}
                        className="rounded-xl shadow-xl hover:opacity-70"
                        layout="responsive"
                        />
                </a>
                <a className = "flex items-center justify-center col-span-2 py-2 transition-transform hover:scale-110 md:col-auto" >
                    <Image
                        src='/images/sz1.svg'
                        alt="logo"
                        width={130}
                        height={80}
                        className="rounded-xl shadow-xl hover:opacity-70"
                        layout="responsive"
                        />
                </a>
                <a className = "flex items-center justify-center col-span-2 py-2 transition-transform hover:scale-110 md:col-auto" >
                    <Image
                        src='/images/logo.svg'
                        alt="logo"
                        width={130}
                        height={80}
                        className="rounded-xl shadow-xl hover:opacity-70"
                        layout="responsive"
                        />
                </a>
                <a className = "flex items-center justify-center col-span-2 py-2 transition-transform hover:scale-110 md:col-auto" >
                    <Image
                        src='/images/tokyo.svg'
                        alt="logo"
                        width={170}
                        height={170}
                        className="rounded-xl shadow-xl hover:opacity-70"
                        layout="responsive"
                        />
                </a>
                




                
            </div>
            </section>
    )
}