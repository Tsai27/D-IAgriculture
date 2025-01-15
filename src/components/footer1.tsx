/*
 * @Author: Tsai27
 * @Date: 2025-01-09 16:28:11
 * @Description: footer部分加校徽测试版本
 */
import React from 'react'
import Image from 'next/image'

export function Footerr(){

    return(
        <section className="relative w-full dark:bg-dark-5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background/5 to-transparent pointer-events-none" />
                <div className="container relative px-4 md:px-6 py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3 text-center">
                            <h4 className="text-base font-semibold">支持单位</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center mt-3 justify-center transition-transform hover:scale-110 md:col-auto">
                                    <Image src="/images/caas.png" alt="footerr1" width={300} height={250} />
                                </li>
                                <li className="flex items-center mt-3 justify-center transition-transform hover:scale-110 md:col-auto">
                                    <Image src="/images/tokyo.svg" alt="footerr1" width={300} height={250} />
                                </li>
                                <li className="flex items-center mt-3 justify-center transition-transform hover:scale-110 md:col-auto">
                                    <Image src="/images/szdx.png" alt="footerr1" width={300} height={250} />
                                </li>
                                <li className="flex items-center mt-3 justify-center transition-transform hover:scale-110 md:col-auto">
                                    <Image src="/images/nafu1.svg" alt="footerr1" width={300} height={250} />
                                </li>
                                <li className="flex items-center mt-3 justify-center transition-transform hover:scale-110 md:col-auto">
                                    <Image src="/images/hbgeo.png" alt="footerr1" width={300} height={250} />
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3 text-center">
                            <h4 className="text-base font-semibold">合作公司</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center mt-3 justify-center transition-transform hover:scale-110 md:col-auto">
                                    <Image src="/images/gs.png" alt="footerr1" width={300} height={250} />
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </section>
        
    )
}