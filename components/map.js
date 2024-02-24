import { REVIEWS } from "@/constants/constants";
import Image from "next/image";
export default function Map() {
  return (
    <div>
      <div className="font-bold text-3xl mx-6">ASSET PORTFOLIO</div>
      <div className="grid-cols-3 gap-4">
        <div>
          <Image
            src="/public/Map.jpg"
            width="500"
            height="500"
            viewBox="0 0 32 32"
          ></Image>
        </div>
        <div>   
          {REVIEWS.map((t) => (
            <div
              className="rounded-3xl p-4 border-2 border-[#DDDDDD]"
              key={t.key}
            >
              <div className="place-content-center">
                <Image src={t.src} width={100} height={50}></Image>
              </div>
              <div>
                {t.desc}
              </div>
              <div className="font-bold">{t.name}</div>
              <div>{t.designation}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
