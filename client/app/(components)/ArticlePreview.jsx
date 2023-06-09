"use client"

import { useRouter } from "next/navigation"
import { DropDownMenu } from "./DropDownMenu"

export function ArticlePreview({ article }) {
  const router = useRouter()

  return (
    <div className="relative h-32 w-full">
      <DropDownMenu
        position={"absolute"}
        articleId={article.id}
        articleURL={article.url}
        articleStatus={article.status}
        articleTag={article.tag}
      />
      <div
        onClick={() => router.push(`/article/${article.id}`)}
        className="flex h-32 w-full cursor-pointer flex-row items-center rounded-3xl bg-[#282828] p-4 transition-all ease-in-out hover:bg-[#414141]"
      >
        <div className="mr-10 h-24 w-32 rounded-xl bg-black">
          <img
            className="h-24 w-32 rounded-xl object-cover"
            src={article.lead_image_url}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="text-3xl font-bold text-white">{article.title}</div>
          </div>
          <div className="text-sm font-medium text-[#C0C0C0] ">
            {article.excerpt}
          </div>
          <div className="flex w-full flex-row items-center justify-between text-sm font-medium text-[#8B8B8B]">
            <div>
              {`${article.domain} • ${article.author} • ${Math.round(
                article.word_count / 200
              )}mins `}
            </div>
            {article.tags?.map((tag) => (
              <button className=" h-fit w-16 rounded-md bg-slate-600 py-1 text-center text-xs font-bold text-white ">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
