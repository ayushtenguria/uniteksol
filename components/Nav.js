import { NAV_LINKS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="flex lg:flex-row flex-col justify-between m-10">
      <div className="flex justify-between lg:w-fit w-screen">
        <div>
          <Image
            src="/blue-dot.png"
            width={40}
            height={40}
            alt="logo of company"
          ></Image>
        </div>
        {!openNav && (
          <div
            className={"cursor-pointer lg:hidden mr-10"}
            onClick={() => setOpenNav(!openNav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}
        {openNav && (
          <div
            className={"inline-block cursor-pointer lg:hidden mr-10"}
            onClick={() => setOpenNav(!openNav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
      {openNav && (
        <div className="lg:hidden h- z-30 relative w-screen flex justify-center text-center">
          <div className="flex flex-col">
            {NAV_LINKS.map((item) => (
              <Link href={item.href} key={item.key} className="p-4">
                {item.label}
              </Link>
            ))}
            <button className="btn-blue sm:text-lg text-xs">
              Book an Appointment!
            </button>
          </div>
        </div>
      )}
      <div className="flex gap-6">
        <div className="flex">
          <div className="hidden lg:flex">
            {NAV_LINKS.map((item) => (
              <Link href={item.href} key={item.key} className="p-4">
                {item.label}
              </Link>
            ))}
            <button className="btn-blue sm:text-lg text-xs">
              Book an Appointment!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
