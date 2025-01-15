/*
 * @Author: Tsai27
 * @Date: 2024-12-10 10:39:46
 * @Description:研究成果（确认版）
 */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { 
  SquareArrowOutUpRight
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

export default async function Result({
    lang
  }: {
    lang: Locale
  }) {
    const dict = await getDictionary(lang)

  return (
    <section id="result" className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
        {dict.faq.title}
      </h2>
      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        {dict.faq.description}
      </p>
    </div>

    <div className="mx-auto max-w-3xl mt-8">
      <Tabs defaultValue="lws" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="lws">{dict.faq.tabs.lw}</TabsTrigger>
          <TabsTrigger value="rzs">{dict.faq.tabs.rz}</TabsTrigger>
          <TabsTrigger value="zls">{dict.faq.tabs.zl}</TabsTrigger>
        </TabsList>
        {Object.entries(dict.faq.questions).map(([category, questions]) => (
          <TabsContent key={category} value={category}>
            <Accordion type="single" collapsible className="w-full">
              {questions.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-xl">
                    {item.a}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-500">{item.b}</p>
                    <div className="flex items-center space-x-2">
                      <SquareArrowOutUpRight className="h-4 w-4" />
                      <Link href={item.a} className="text-gray-800">doi</Link>
                      <Link href={item.a} className="text-gray-800">Link</Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>
    </div>

    {/* Add Button Below the FAQ Section */}
    <div className="mt-12 text-right">
        <Link href={`/${lang}/result`}>           {/* 链接至result子页面 */}
          <Button className="mt-6 bg-custom-blue hover:bg-custom-blue1" size="lg">
            {dict.faq.button}
          </Button>
        </Link>
    </div>
  </div>
</section>

  )
}
