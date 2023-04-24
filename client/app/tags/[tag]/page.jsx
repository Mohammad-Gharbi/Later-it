"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ArticlePreview } from "../../(components)/ArticlePreview"
import {
  useDeleteTagMutation,
  useGetArticlesQuery,
} from "../../../redux/slices/apiSlice"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import * as Toast from "@radix-ui/react-toast"
import "react-toastify/dist/ReactToastify.css"

export default function Tag({ params }) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)
  const query = useSearchParams()
  const tagId = query.get("id")

  const router = useRouter()

  const {
    data: articles,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetArticlesQuery()

  const [deleteTag, { isLoadingDelete, isSuccessDelete, isErrorDelete }] =
    useDeleteTagMutation()

  useEffect(() => {
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }, [isLoading, isError, isLoadingDelete])

  let content

  if (isLoading) {
  } else if (isSuccess) {
    content = articles
      ?.filter((article) => article.tag == params.tag)
      .map((article) => <ArticlePreview article={article} />)
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <div className=" itemes-center relative flex h-screen w-full flex-col gap-5">
      <div className="absolute top-0 right-0">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="outline-none" asChild>
            <button className="h-5 w-5 text-white outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-more-horizontal"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="flex h-fit w-48 flex-col items-start justify-between rounded-xl bg-[#282828] p-4 text-base font-normal text-white outline-none">
              <DropdownMenu.Item>
                <button
                  onClick={async () => {
                    await deleteTag({ tagId })
                    router.push("/inbox")
                  }}
                  className="text-[#FF6363]"
                >
                  Delete This Tag
                </button>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
      {content}

      <Toast.Provider swipeDirection="down">
        <Toast.Root
          asChild
          className="data-[state=open]:animate-slideIn data-[state=closed]:animate-hide  data-[swipe=end]:animate-swipeOut absolute z-10 grid w-48 grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-lg bg-[#7e2eff] p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] transition-all ease-in-out [grid-template-areas:_'title_action'_'description_action'] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className=" fixed bottom-[10rem] right-0 mb-[5px] animate-pulse text-center text-lg text-[15px] font-bold text-white [grid-area:_title]">
            Loading
          </Toast.Title>
        </Toast.Root>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </div>
  )
}
