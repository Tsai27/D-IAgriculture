/*
 * @Author: Tsai27
 * @Date: 2024-12-10 10:39:46
 * @Description: 团队成员子页面（确认版）
 */

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";

export default async function PricingPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const { team } = dict;

  const professors = Object.values(team.professors);
  const researchers = Object.values(team.researchers);
  const students = Object.values(team.students);

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {team.name}
        </h1>
      </div>
    

       {/* Professors Section */}
          <div className="mt-12">
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
              {professors.map((member) => (
                <Card key={member.name} className="flex flex-col md:flex-row gap-6 p-4 rounded-lg shadow-lg">
                {/* Left side: Image */}
                <div className="flex-shrink-0 w-full md:w-44 flex justify-center items-center">
                  <img
                    src={member.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              
                {/* Right side: Information */}
                <div className="flex flex-col justify-center ml-4">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">{member.name}</CardTitle>
                    <p className="text-xl text-muted-foreground mt-2">{member.description}</p>
                  </CardHeader>
                </div>
              </Card>
              
              
              ))}
            </div>
            <hr className="my-8 border-t border-gray-300" /> {/* Horizontal line */}
          </div>

      {/* Researchers Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-6">{dict.team.title.researchers}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4">
          {researchers.map((member) => (
            <Card key={member.name} className="flex flex-col gap-6 p-4 border rounded-lg shadow-lg">
              {/* Top side: Image */}
              <div className="flex-shrink-0 w-32 h-32 mx-auto flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>

              {/* Bottom side: Information */}
              <div className="flex flex-col justify-center text-center">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{member.area}</p>
                  <p className="text-sm text-muted-foreground mt-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mt-2">{member.description}</p>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
          <hr className="my-8 border-t border-gray-300" /> {/* Horizontal line */}
        </div>

        {/* Students Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-6">{dict.team.title.students}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4">
            {students.map((member) => (
              <Card key={member.name} className="flex flex-col gap-6 p-4 border rounded-lg shadow-lg">
                {/* Top side: Image */}
                <div className="flex-shrink-0 w-42 h-42 mx-auto">
                  <img
                    src={member.image}
                    alt=""
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>

                {/* Bottom side: Information */}
                <div className="flex flex-col justify-center text-center">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">年级：{member.grade}</p>
                    <p className="text-sm text-muted-foreground mt-2">研究方向：{member.area}</p>
                    <p className="text-sm text-muted-foreground mt-2">邮箱：{member.email}</p>
                  </CardHeader>
                </div>
              </Card>
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
    title: dict.team.name,
    description: dict.team.description,
    alternates: {
      canonical: `${url}/${lang}/team`,
      languages: {
        "en-US": `${url}/en-US/team`,
        "zh-CN": `${url}/zh-CN/team`,
      },
    },
    openGraph: {
      title: dict.team.name,
      description: dict.team.description,
      url: `${url}/${lang}/team`,
    },
  };
}