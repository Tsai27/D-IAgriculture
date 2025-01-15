import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";
export default async function PricingPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const { result } = dict;
  const lws = Object.values(result.types.lws);
  const rzs = Object.values(result.types.rzs);
  const zls = Object.values(result.types.zls);
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {result.title}
        </h1>
      </div>

      {/*  lws section */}
      <div className="mt-12 flex flex-col items-center">
  <h2 className="text-2xl font-semibold mb-6">{result.name.lws}</h2>
  <div className="w-full max-w-4xl">
    {lws.map((item, index) => (
      <div key={index} className="flex flex-row items-center py-3 border-b">
      {/* Item A */}
      <div className="flex-grow font-medium text-center sm:text-left">{item.a}</div>
    
      {/* Buttons */}
      <div className="flex justify-center sm:justify-end gap-2 mt-2 sm:mt-0">
      <button className="px-3 py-1 text-sm font-medium text-gray-400 border border-gray-400 rounded hover:bg-black hover:text-white transition-colors">
          DOI
      </button>
      <button className="px-3 py-1 text-sm font-medium text-gray-400 border border-gray-400 rounded hover:bg-black hover:text-white transition-colors">
          PDF
      </button>
      </div>
    </div>
    ))}
  </div>
</div>


      {/*  rzs section */}
      <div className="mt-12 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6">{result.name.rzs}</h2>
        <div className="w-full max-w-4xl">
          {rzs.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row py-3 border-b">
              <div className="w-full sm:w-1/2 font-medium text-center sm:text-left">{item.a}</div>
              <div className="w-full sm:w-1/2 text-gray-600 text-center sm:text-right">{item.b}</div>
            </div>
          ))}
        </div>
      </div>

      {/*  zls section */}
      <div className="mt-12 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6">{result.name.zls}</h2>
        <div className="w-full max-w-4xl">
          {zls.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row py-3 border-b">
              <div className="w-full sm:w-1/2 font-medium text-center sm:text-left">{item.a}</div>
              <div className="w-full sm:w-1/2 text-gray-600 text-center sm:text-right">{item.b}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(lang);
  const url = process.env.NEXT_PUBLIC_APP_URL || "https://distributer.top";
  return {
    title: dict.result.title,
    description: dict.result.description,
    alternates: {
      canonical: `${url}/${lang}/result`,
      languages: {
        "en-US": `${url}/en-US/result`,
        "zh-CN": `${url}/zh-CN/result`,
      },
    },
    openGraph: {
      title: dict.result.title,
      description: dict.result.description,
      url: `${url}/${lang}/result`,
    },
  };
}