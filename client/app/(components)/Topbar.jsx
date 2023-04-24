"use client"

import { Search } from "./Search"

export function TopBar({ sectionName }) {
  return (
    <div className="fixed z-10 col-span-12 col-start-2 row-span-1 ml-24 flex w-full flex-row items-center border-b border-[#3d3d3d] bg-[#111111] bg-opacity-5 p-6 backdrop-blur-xl">
      <div className="text-2xl font-bold text-white">{sectionName}</div>
      <Search />
    </div>
  )
}
