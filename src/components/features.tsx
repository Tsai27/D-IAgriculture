/*
 * @Author: Tsai27
 * @Date: 2024-12-10 10:39:46
 */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SlideUp from "./slideup"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { 
  CloudCog, 
  Layers, 
  DatabaseBackup, 
  MonitorCog,
} from "lucide-react"

export default async function Features({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  const features = [
    {
      icon: <CloudCog className="h-9 w-9" />,
      title: dict.features.tabs.title,
      description: dict.features.tabs.description
    },
    {
      icon: <Layers className="h-9 w-9" />,
      title: dict.features.bookmarks.title,
      description: dict.features.bookmarks.description
    },
    {
      icon: <DatabaseBackup className="h-9 w-9" />,
      title: dict.features.share.title,
      description: dict.features.share.description
    },
    {
      icon: <MonitorCog className="h-9 w-9" />,
      title: dict.features.security.title,
      description: dict.features.security.description
    }
  ]

  return (
    <section 
      id="direction" 
      className="w-full flex  py-8 md:py-18 lg:py-28 items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/673bb123b7f69a80c91acefe/673cea72e7eb600ebadee8b0_Footer-Image2comp.avif)' }} // 设置背景图像路径
    >
      <div className="container px-4 md:px-6">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="flex flex-col text-center items-center justify-center space-y-4 ">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {dict.features.title}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dict.features.description1}
            </p>
          </div>
        </SlideUp>

        <SlideUp offset="-300px 0px -300px 0px">
          <div className="flex-1 flex flex-col mx-auto  max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8 ">   {/*grid布局 */}
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col hover:shadow-xl transition-shadow duration-300 dark:hover:shadow-lg dark:hover:shadow-gray-700">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-center ">{feature.icon}</div>
                  <CardTitle>
                    <div className=" text-center ">
                      {feature.title}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SlideUp>
      </div>
    </section>
  )
}
