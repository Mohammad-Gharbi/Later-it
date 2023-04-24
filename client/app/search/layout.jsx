import { SideBar } from "../(components)/SideBar"
import { TopBar } from "../(components)/Topbar"
import Providers from "../(components)/Providers"

export default function Layout({ children }) {
  return (
    <Providers>
      <div className="relative grid grid-cols-12 grid-rows-6 h-screen bg-[#111111]">
        <SideBar />
        <TopBar sectionName={"Inbox"} />
        <div className="col-start-2 col-span-full row-start-2 row-span-full px-14 pb-36">
          {children}
        </div>
      </div>
    </Providers>
  )
}
