"use client"

import { useAddArticleMutation } from "@/redux/slices/apiSlice"
import * as Popover from "@radix-ui/react-popover"
import { useRef } from "react"

export default function AddArticle() {
  const articleURL = useRef()
  const [addArticle] = useAddArticleMutation()

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="mb-5">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 6.04163V22.9583"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.04167 14.5H22.9583"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded p-5 w-[260px] bg-[#282828] shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <div className="flex flex-col gap-2.5">
            <p className="text-white text-[15px] leading-[19px] font-medium mb-2.5">
              Add New Article
            </p>
            <fieldset className="flex flex-col gap-5 items-center">
              <input
                className="w-full h-10 inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-black placeholder:text-slate-400 shadow-[0_0_0_1px] shadow-slate-400 focus:shadow-[0_0_0_2px] focus:shadow-slate-600 outline-none"
                id="URL"
                placeholder="Enter Article URL"
                ref={articleURL}
              />
              <button
                onClick={async () => {
                  if (articleURL.current.value) {
                    await addArticle({
                      articleURL: articleURL?.current?.value,
                    })
                  }
                }}
                className="w-16 h-8 text-white font-bold rounded-md bg-[#8e8e8e]"
              >
                Add
              </button>
            </fieldset>
          </div>
          <Popover.Close
            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
            aria-label="Close"
          >
            <div className="text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x"
              >
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
            </div>
          </Popover.Close>
          <Popover.Arrow className="fill-[#282828]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
