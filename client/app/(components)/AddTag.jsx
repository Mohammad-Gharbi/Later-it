// Tags Page

"use client"

import { useAddNewTagMutation, useGetTagQuery } from "@/redux/slices/apiSlice"

import * as Popover from "@radix-ui/react-popover"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export function AddTag() {
  const router = useRouter()

  const { data: tags, isLoading, isSuccess } = useGetTagQuery()
  const [addNewTag, { addTagLoading, addTagSuccess }] = useAddNewTagMutation()

  const tagName = useRef()

  let listTags

  if (isLoading) {
    listTags = <div className="text-white">Loading</div>
  } else if (isSuccess) {
    listTags = (
      <div className="flex flex-col items-center">
        {tags.map((tag) => (
          <button
            onClick={() => router.push(`/tags/${tag.tagName}?id=${tag.id}`)}
            className=" mt-5 h-fit w-16 rounded-md bg-slate-600 py-1 text-center text-xs font-bold text-white "
          >
            {tag.tagName}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div>
      {listTags}

      <Popover.Root>
        <Popover.Trigger asChild>
          <button className=" mt-5 text-xs font-bold text-white ">
            Add a Tag
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade w-[260px] rounded bg-[#282828] p-5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)]"
            sideOffset={5}
          >
            <div className="flex flex-col gap-2.5">
              <p className="mb-2.5 text-[15px] font-medium leading-[19px] text-slate-300">
                Add New Tag
              </p>
              <fieldset className="flex flex-col items-center gap-5">
                <input
                  className="inline-flex h-10 w-full flex-1 items-center justify-center rounded p-2 px-2.5 text-[13px] leading-none text-black shadow-[0_0_0_1px] shadow-slate-400 outline-none placeholder:text-slate-400 focus:shadow-[0_0_0_2px] focus:shadow-slate-600"
                  id="URL"
                  placeholder="Enter Tag Name"
                  ref={tagName}
                />
                {addTagLoading ? (
                  <button
                    disabled
                    className="h-8 w-16 rounded-md bg-[#7e2eff4f] font-bold text-white transition-all ease-in-out"
                  >
                    Add
                  </button>
                ) : (
                  <button
                    onClick={async () => {
                      if (tagName.current.value) {
                        await addNewTag({
                          tagName: tagName?.current?.value,
                        })
                      }
                    }}
                    className="h-8 w-16 rounded-md bg-[#7e2eff] font-bold text-white transition-all ease-in-out hover:bg-[#7e2eff9b]"
                  >
                    Add
                  </button>
                )}
              </fieldset>
            </div>
            <Popover.Close
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[5px] right-[5px] inline-flex h-[25px] w-[25px] cursor-default items-center justify-center rounded-full outline-none focus:shadow-[0_0_0_2px]"
              aria-label="Close"
            >
              <div className="cursor-pointer text-white">
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
    </div>
  )
}
