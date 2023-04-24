"use client"

import { useEffect, useRef, useState } from "react"
import { ArticlePreview } from "../(components)/ArticlePreview"
import { useGetArticlesQuery } from "../../redux/slices/apiSlice"
import * as Toast from "@radix-ui/react-toast"

export default function Archive() {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  const {
    data: articles,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetArticlesQuery()

  let content

  useEffect(() => {
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }, [isLoading, isError])

  if (isLoading) {
    content = <div className="text-white">Loading</div>
  } else if (isSuccess) {
    content = articles
      ?.filter((article) => article.status == "Archive")
      .map((article) => <ArticlePreview article={article} />)
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <div className="itemes-center flex h-screen w-full flex-col gap-5">
      {content}
      <Toast.Provider swipeDirection="down">
        <Toast.Root
          asChild
          className="data-[state=open]:animate-slideIn data-[state=closed]:animate-hide  data-[swipe=end]:animate-swipeOut absolute z-10 grid w-48 grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-lg bg-[#7e2eff] p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] transition-all ease-in-out [grid-template-areas:_'title_action'_'description_action'] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className="fixed bottom-[10rem] right-0 mb-[5px] animate-pulse text-center text-lg text-[15px] font-bold text-white [grid-area:_title]">
            Loading
          </Toast.Title>
        </Toast.Root>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </div>
  )
}
