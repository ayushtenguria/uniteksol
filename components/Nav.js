import { NAV_LINKS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between m-10">
      <div>
        <Image
          src="/blue-dot.png"
          width={40}
          height={40}
          alt="logo of company"
        ></Image>
      </div>
      <div className="hidden h-full lg:flex">
        {NAV_LINKS.map((item) => (
          <Link href={item.href} key={item.key} className="p-4">
            {item.label}
          </Link>
        ))}
        <button className="btn-blue">Book an Appointment!</button>
      </div>
          
      <div className="inline-block cursor-pointer lg:hidden">
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
    </div>
  );
}
