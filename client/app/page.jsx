import Link from "next/link"

import demo from "../public/demo.png"
import Image from "next/image"

export default function Page() {
  return (
    <div className="relative">
      <div className="absolute left-0 aspect-square w-[50em] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7E2EFF]/20 blur-[500px]"></div>
      {/* Navigation */}
      <div className="z-10 px-36 py-24">
        <div className="flex flex-row items-center justify-between">
          <div className="h-7 w-32">
            <svg
              width="121"
              height="29"
              viewBox="0 0 121 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.275568 28V1.81818H5.81108V23.4361H17.0355V28H0.275568ZM26.1985 28.3707C24.9457 28.3707 23.8292 28.1534 22.8491 27.7188C21.869 27.2756 21.0934 26.6236 20.5224 25.7628C19.9599 24.8935 19.6786 23.8111 19.6786 22.5156C19.6786 21.4247 19.8789 20.5085 20.2795 19.767C20.68 19.0256 21.2255 18.429 21.9158 17.9773C22.6062 17.5256 23.3903 17.1847 24.2681 16.9545C25.1545 16.7244 26.0835 16.5625 27.055 16.4688C28.1971 16.3494 29.1175 16.2386 29.8164 16.1364C30.5153 16.0256 31.0224 15.8636 31.3377 15.6506C31.6531 15.4375 31.8107 15.1222 31.8107 14.7045V14.6278C31.8107 13.8182 31.555 13.1918 31.0437 12.7486C30.5408 12.3054 29.8249 12.0838 28.896 12.0838C27.9158 12.0838 27.136 12.3011 26.5565 12.7358C25.9769 13.1619 25.5934 13.6989 25.4059 14.3466L20.369 13.9375C20.6246 12.7443 21.1275 11.7131 21.8775 10.8438C22.6275 9.96591 23.5948 9.29261 24.7795 8.82386C25.9727 8.34659 27.3533 8.10795 28.9215 8.10795C30.0124 8.10795 31.0565 8.2358 32.0536 8.49148C33.0593 8.74716 33.9499 9.14347 34.7255 9.6804C35.5096 10.2173 36.1275 10.9077 36.5792 11.7514C37.0309 12.5866 37.2567 13.5881 37.2567 14.7557V28H32.092V25.277H31.9386C31.6232 25.8906 31.2013 26.4318 30.6729 26.9006C30.1445 27.3608 29.5096 27.723 28.7681 27.9872C28.0266 28.2429 27.1701 28.3707 26.1985 28.3707ZM27.7582 24.6122C28.5593 24.6122 29.2667 24.4545 29.8803 24.1392C30.494 23.8153 30.9755 23.3807 31.3249 22.8352C31.6744 22.2898 31.8491 21.6719 31.8491 20.9815V18.8977C31.6786 19.0085 31.4442 19.1108 31.146 19.2045C30.8562 19.2898 30.5281 19.3707 30.1616 19.4474C29.7951 19.5156 29.4286 19.5795 29.0621 19.6392C28.6957 19.6903 28.3633 19.7372 28.065 19.7798C27.4258 19.8736 26.8675 20.0227 26.3903 20.2273C25.913 20.4318 25.5423 20.7088 25.2781 21.0582C25.0138 21.3991 24.8817 21.8253 24.8817 22.3366C24.8817 23.0781 25.1502 23.6449 25.6871 24.0369C26.2326 24.4205 26.9229 24.6122 27.7582 24.6122ZM51.9265 8.36364V12.4545H40.1012V8.36364H51.9265ZM42.7859 3.65909H48.2319V21.9659C48.2319 22.4687 48.3086 22.8608 48.462 23.142C48.6154 23.4148 48.8285 23.6065 49.1012 23.7173C49.3825 23.8281 49.7063 23.8835 50.0728 23.8835C50.3285 23.8835 50.5842 23.8622 50.8398 23.8196C51.0955 23.7685 51.2915 23.7301 51.4279 23.7045L52.2844 27.7571C52.0117 27.8423 51.6282 27.9403 51.1339 28.0511C50.6396 28.1705 50.0387 28.2429 49.3313 28.2685C48.0188 28.3196 46.8683 28.1449 45.8796 27.7443C44.8995 27.3437 44.1367 26.7216 43.5913 25.8778C43.0458 25.0341 42.7773 23.9687 42.7859 22.6818V3.65909ZM64.212 28.3835C62.1921 28.3835 60.4535 27.9744 58.9961 27.1562C57.5472 26.3295 56.4308 25.1619 55.6467 23.6534C54.8626 22.1364 54.4705 20.3423 54.4705 18.2713C54.4705 16.2514 54.8626 14.4787 55.6467 12.9531C56.4308 11.4276 57.5344 10.2386 58.9577 9.38636C60.3896 8.53409 62.0685 8.10795 63.9947 8.10795C65.2901 8.10795 66.4961 8.31676 67.6126 8.73438C68.7376 9.14347 69.7177 9.76136 70.5529 10.5881C71.3967 11.4148 72.0529 12.4545 72.5217 13.7074C72.9904 14.9517 73.2248 16.4091 73.2248 18.0795V19.5753H56.6438V16.2003H68.0984C68.0984 15.4162 67.9279 14.7216 67.587 14.1165C67.2461 13.5114 66.7731 13.0384 66.168 12.6974C65.5714 12.348 64.8768 12.1733 64.0842 12.1733C63.2575 12.1733 62.5245 12.3651 61.8853 12.7486C61.2546 13.1236 60.7603 13.6307 60.4023 14.2699C60.0444 14.9006 59.8612 15.6037 59.8526 16.3793V19.5881C59.8526 20.5597 60.0316 21.3991 60.3896 22.1065C60.756 22.8139 61.2717 23.3594 61.9364 23.7429C62.6012 24.1264 63.3896 24.3182 64.3015 24.3182C64.9066 24.3182 65.4606 24.233 65.9634 24.0625C66.4663 23.892 66.8967 23.6364 67.2546 23.2955C67.6126 22.9545 67.8853 22.5369 68.0728 22.0426L73.1097 22.375C72.854 23.5852 72.3299 24.642 71.5373 25.5455C70.7532 26.4403 69.739 27.1392 68.4947 27.642C67.2589 28.1364 65.8313 28.3835 64.212 28.3835ZM76.7788 28V8.36364H82.0586V11.7898H82.2631C82.6211 10.571 83.2219 9.65057 84.0657 9.02841C84.9094 8.39773 85.881 8.08239 86.9805 8.08239C87.2532 8.08239 87.5472 8.09943 87.8626 8.13352C88.1779 8.16761 88.4549 8.21449 88.6935 8.27415V13.1065C88.4379 13.0298 88.0842 12.9616 87.6325 12.902C87.1808 12.8423 86.7674 12.8125 86.3924 12.8125C85.5913 12.8125 84.8754 12.9872 84.2447 13.3366C83.6225 13.6776 83.1282 14.1548 82.7617 14.7685C82.4038 15.3821 82.2248 16.0895 82.2248 16.8906V28H76.7788Z"
                fill="white"
              />
              <path
                d="M99.8413 28V8.36364H105.287V28H99.8413ZM102.577 5.83239C101.767 5.83239 101.073 5.56392 100.493 5.02699C99.9222 4.48153 99.6367 3.82954 99.6367 3.07102C99.6367 2.32102 99.9222 1.67756 100.493 1.14062C101.073 0.59517 101.767 0.322442 102.577 0.322442C103.387 0.322442 104.077 0.59517 104.648 1.14062C105.228 1.67756 105.517 2.32102 105.517 3.07102C105.517 3.82954 105.228 4.48153 104.648 5.02699C104.077 5.56392 103.387 5.83239 102.577 5.83239ZM120.094 8.36364V12.4545H108.269V8.36364H120.094ZM110.954 3.65909H116.4V21.9659C116.4 22.4687 116.477 22.8608 116.63 23.142C116.783 23.4148 116.996 23.6065 117.269 23.7173C117.55 23.8281 117.874 23.8835 118.241 23.8835C118.496 23.8835 118.752 23.8622 119.008 23.8196C119.263 23.7685 119.46 23.7301 119.596 23.7045L120.452 27.7571C120.18 27.8423 119.796 27.9403 119.302 28.0511C118.808 28.1705 118.207 28.2429 117.499 28.2685C116.187 28.3196 115.036 28.1449 114.048 27.7443C113.067 27.3437 112.305 26.7216 111.759 25.8778C111.214 25.0341 110.945 23.9687 110.954 22.6818V3.65909Z"
                fill="#7E2EFF"
              />
            </svg>
          </div>
          <div className="flex h-7 w-96 flex-row items-center justify-between text-xl font-medium text-white">
            <Link href="#demo">Demo</Link>
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
          </div>
          <div className="flex h-7 w-60 flex-row items-center justify-between text-xl font-medium text-white">
            <Link href="/login">Login</Link>
            <Link
              className="h-11 w-36 rounded-xl bg-[#7E2EFF] py-2 text-center text-lg font-bold"
              href="/login"
            >
              START FREE
            </Link>
          </div>
        </div>
      </div>
      {/* Hero */}
      <div className="z-10 px-36 py-24">
        <div>
          <div className="text-6xl font-bold text-white">
            All Your Articles In <span className="text-[#7E2EFF]">One </span>
            Place
          </div>
          <div className="text-xl font-medium text-[#8B8B8B]">
            Save Articles With Ease and Enjoy an Un-Distracted Reading
            Exprience.
          </div>
        </div>
        <div className="flex w-96 flex-row items-center justify-between py-6 text-xl font-medium">
          <Link
            className="h-14 w-44 rounded-xl bg-[#7E2EFF] py-3 text-center text-lg font-bold text-white"
            href="#"
          >
            START FREE
          </Link>
          <Link
            className="h-14 w-44 rounded-xl bg-white py-3 text-center text-lg font-bold text-black"
            href="#"
          >
            View Live Demo
          </Link>
        </div>
      </div>
      {/* Demo */}
      <div className="z-10 px-36 py-24">
        <Image
          className=" w-full rounded-3xl bg-cover shadow-xl"
          src={demo}
          alt="demo"
        />
      </div>
      {/* Problem Agitation */}
      <div className="z-10 px-36 py-36 text-center">
        <div className="mb-4 text-5xl font-bold text-white">
          Reading Online is
          <span className="text-[#7E2EFF]"> Overwhelming </span>
        </div>
        <div className="text-4xl font-medium text-[#8B8B8B]">
          You bookmark it and often you Forget Completely about it.
        </div>
      </div>
      {/* Solution */}
      <div className="z-10 px-36 py-24 text-center">
        <div className="mb-8 text-5xl font-bold text-white">
          Try Later <span className="text-[#7E2EFF]"> it </span>
        </div>
        <div className="flex w-full flex-row items-center justify-between px-4">
          <div className="flex h-[15rem] w-[15rem] flex-col items-center justify-between rounded-3xl bg-[#282828] py-8 opacity-80 backdrop-blur-md">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 15H15V50H50V15Z"
                stroke="white"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M105 15H70V50H105V15Z"
                stroke="white"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M105 70H70V105H105V70Z"
                stroke="white"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M50 70H15V105H50V70Z"
                stroke="white"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="text-xl font-medium text-white">Tidy</div>
          </div>
          <div className="flex h-[15rem] w-[15rem] flex-col items-center justify-between rounded-3xl bg-[#282828] py-8 opacity-80 backdrop-blur-md">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 30H105"
                stroke="white"
                stroke-width="13"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M40 60H105"
                stroke="white"
                stroke-width="13"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M40 90H105"
                stroke="white"
                stroke-width="13"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 30H15.05"
                stroke="white"
                stroke-width="13"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 60H15.05"
                stroke="white"
                stroke-width="13"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 90H15.05"
                stroke="white"
                stroke-width="13"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="text-xl font-medium text-white">Organized</div>
          </div>
          <div className="flex h-[15rem] w-[15rem] flex-col items-center justify-between rounded-3xl bg-[#282828] py-8 opacity-80 backdrop-blur-md">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.3 46.3L15 55V70L85.7 85.7"
                stroke="white"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M105 76.7V30L68.4502 40.15"
                stroke="white"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M58.0001 84C57.4748 85.9042 56.5796 87.6862 55.3656 89.2444C54.1516 90.8026 52.6426 92.1065 50.9247 93.0815C49.2068 94.0565 47.3137 94.6836 45.3535 94.927C43.3933 95.1704 41.4043 95.0253 39.5001 94.5C37.5959 93.9747 35.8139 93.0795 34.2557 91.8655C32.6975 90.6515 31.3936 89.1425 30.4186 87.4246C29.4436 85.7067 28.8165 83.8136 28.5731 81.8534C28.3297 79.8932 28.4748 77.9042 29.0001 76"
                stroke="white"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 10L110 110"
                stroke="white"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="text-xl font-medium text-white">Undistracted</div>
          </div>
        </div>
      </div>
      {/* Call To Action */}
      <div className="z-10 flex flex-col items-center px-36 py-24 text-center">
        <div className="mb-4 text-5xl font-bold text-white">
          Get The <span className="text-[#7E2EFF]"> Most </span> Out of Your
          Articles
        </div>
        <div className=" mt-4 flex h-[20rem] w-[50rem] flex-col items-center gap-10 rounded-3xl bg-[#282828] py-8 opacity-80 backdrop-blur-md">
          <div>
            <div className="text-5xl font-bold text-white">
              Ready To Get Started ?
            </div>
            <div className="text-[#FFFFFF]">Try Later it for free</div>
          </div>
          <div>
            <Link
              className="mb-4 h-11 w-[5rem] rounded-xl bg-[#7E2EFF] px-14 py-2 text-center text-2xl font-bold text-white"
              href="/login"
            >
              START FREE
            </Link>
            <div className="mt-2 text-[#FFFFFF]">No credit card required.</div>
          </div>
        </div>
      </div>
      {/* Credits */}
      <div className="text-center text-xl font-medium text-white">
        © 2023 mhmd. All rights reserved.
      </div>
    </div>
  )
}
