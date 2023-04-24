"use client"

import {
  useDeleteArticleMutation,
  useGetTagQuery,
  useRemoveTagArticleMutation,
  useTagArticleMutation,
  useUpdateStatusMutation,
} from "@/redux/slices/apiSlice"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import * as Select from "@radix-ui/react-select"
import classnames from "classnames"
import { forwardRef } from "react"

export function DropDownMenu({
  position,
  articleId,
  articleURL,
  articleStatus,
  articleTag,
}) {
  const { data: tags, isLoadingTags, isSuccess } = useGetTagQuery()
  const [tagArticle] = useTagArticleMutation()

  const [deleteArticle, { isLoading }] = useDeleteArticleMutation()
  const [updateStatus] = useUpdateStatusMutation()
  const [removeTagArticle] = useRemoveTagArticleMutation()

  let listTags

  if (isLoadingTags) {
    listTags = <div className="text-white">Loading</div>
  } else if (isSuccess) {
    listTags = (
      <div className="flex flex-col items-start">
        {tags.map((tag) => (
          <DropdownMenu.Item>
            {articleTag === tag.tagName ? (
              <button
                onClick={async () =>
                  await removeTagArticle({ articleId, tag: tag.tagName })
                }
              >
                Remove From "{tag.tagName}"
              </button>
            ) : (
              <button
                onClick={async () =>
                  await tagArticle({ articleId, tag: tag.tagName })
                }
              >
                Add To "{tag.tagName}"
              </button>
            )}
          </DropdownMenu.Item>
        ))}
      </div>
    )
  }

  return (
    <div className={`${position} right-10  top-0 mt-5`}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="outline-none" asChild>
          <button className="h-5 w-5 text-white ">
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
          <DropdownMenu.Content className="flex h-72 w-48 flex-col items-start justify-between rounded-xl bg-[#282828] p-4 text-base font-normal text-white outline-none">
            <DropdownMenu.Item>
              {articleStatus === "Later" ? (
                <button
                  onClick={async () =>
                    updateStatus({ articleId, status: "Inbox" })
                  }
                >
                  Move To Inbox
                </button>
              ) : (
                <button
                  onClick={async () =>
                    updateStatus({ articleId, status: "Later" })
                  }
                >
                  Read Later
                </button>
              )}
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              {articleStatus === "Archive" ? (
                <button
                  onClick={async () =>
                    updateStatus({ articleId, status: "Inbox" })
                  }
                >
                  Move To Inbox
                </button>
              ) : (
                <button
                  onClick={async () =>
                    updateStatus({ articleId, status: "Archive" })
                  }
                >
                  Archive
                </button>
              )}
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <div className="rect">
                <svg
                  width="169"
                  height="1"
                  viewBox="0 0 169 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.25"
                    y="0.25"
                    width="168.5"
                    height="0.5"
                    rx="0.25"
                    fill="#D9D9D9"
                    stroke="#535353"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
            </DropdownMenu.Item>
            {listTags}
            <DropdownMenu.Item>
              <div className="rect">
                <svg
                  width="169"
                  height="1"
                  viewBox="0 0 169 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.25"
                    y="0.25"
                    width="168.5"
                    height="0.5"
                    rx="0.25"
                    fill="#D9D9D9"
                    stroke="#535353"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <a href={articleURL} target={"_blank"}>
                Open Original
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(articleURL)
                }}
              >
                Copy Source URL
              </button>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <div className="rect">
                <svg
                  width="169"
                  height="1"
                  viewBox="0 0 169 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.25"
                    y="0.25"
                    width="168.5"
                    height="0.5"
                    rx="0.25"
                    fill="#D9D9D9"
                    stroke="#535353"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <button
                onClick={async () => await deleteArticle({ articleId })}
                className="text-[#FF6363]"
              >
                Delete
              </button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}

const SelectItem = forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-[20px] items-center justify-center">
          <div className="text-white">
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
              class="lucide lucide-check"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </Select.ItemIndicator>
      </Select.Item>
    )
  }
)
