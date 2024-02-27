import { REVIEWS } from "@/constants/constants";
import Image from "next/image";
export default function Map() {
  return (
    <div className="my-10 grid lg:grid-cols-2 grid-cols-1">
      <div className="mb-10">
        <Image
          src="/map-arrow.png"
          width={80}
          height={80}
          className="relative top-20 sm:w-fit w-[70px] pr-6"
        ></Image>
        <Image
          src="/Map.png"
          width="500"
          height="500"
          viewBox="0 0 32 32"
        ></Image>
      </div>
      <div>
        <h2 className="text-4xl font-bold pb-10 lg:text-right">
          Asset Portfolio
        </h2>
        <div className="gap-10 flex flex-col lg:items-end">
          {REVIEWS.map((t) => (
            <div
              className="rounded-3xl p-8 border-2 border-[#DDDDDD] lg:w-2/3"
              key={t.key}
            >
              <div className="mb-4">
                <Image src={t.src} width={100} height={50}></Image>
              </div>
              <div className="flex gap-2 mb-6">
                <div>
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_136_46)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.9298 2.03037C13.5439 3.15836 12.351 4.48372 12.351 6.00651C13.3679 6.11931 14.2088 6.5188 14.8738 7.20499C15.5387 7.89118 15.8712 8.68546 15.8712 9.58785C15.8712 10.5466 15.5485 11.355 14.9031 12.013C14.2577 12.671 13.4461 13 12.4683 13C11.3731 13 10.4246 12.5723 9.62279 11.7169C8.82096 10.8615 8.42005 9.82285 8.42005 8.60087C8.42005 4.93491 10.5517 2.06798 14.8151 0L15.9298 2.03037ZM7.50978 2.03037C5.10429 3.15836 3.90156 4.48372 3.90156 6.00651C4.93808 6.11931 5.78878 6.5188 6.45372 7.20499C7.11865 7.89118 7.45111 8.68546 7.45111 9.58785C7.45111 10.5466 7.12354 11.355 6.46838 12.013C5.81323 12.671 4.99675 13 4.0189 13C2.92372 13 1.98012 12.5723 1.18807 11.7169C0.39602 10.8615 0 9.82285 0 8.60087C0 4.93491 2.12188 2.06798 6.36571 0L7.50978 2.03037Z"
                        fill="#1DB5BE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_136_46">
                        <rect width="16" height="13" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {t.desc}
              </div>
              <div className="lg:text-lg text-sm">
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-[#656565]">{t.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
