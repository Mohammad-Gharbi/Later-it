"use client"

import { ArticlePreview } from "../(components)/ArticlePreview"
import { useGetArticlesQuery } from "../../redux/slices/apiSlice"
import { useToast } from "@chakra-ui/react"

export default function Later() {
  const toast = useToast()

  const {
    data: articles,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetArticlesQuery()

  let content

  if (isLoading) {
    toast({
      title: "Loading...",
      status: "info",
      isClosable: true,
    })
  } else if (isSuccess) {
    content = articles
      ?.filter((article) => article.status == "Later")
      .map((article) => <ArticlePreview article={article} />)
  } else if (isError) {
    content = <div>{error.toString()}</div>
    toast({
      title: "Reload Page Please.",
      status: "error",
      isClosable: true,
    })
  }

  return (
    <div className="itemes-center flex h-screen w-full flex-col gap-5">
      {content}
    </div>
  )
}
