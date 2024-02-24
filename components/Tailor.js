import { TAILERS } from "@/constants/constants";
import Image from "next/image";
export default function Tailor() {
  return (
    <div className="m-10">
      <div className="text-centre place-content-center">
        <p>
          <b className="text-4xl">Tailor-made features</b>
          <br />
          <span className="text-2xl">
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
          </span>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 text-black text-center">
        {TAILERS.map((t) => (
          <div className="place-content-center" key={t.key}>
            <Image
              src={t.src}
              width="32"
              height="32"
              viewBox="0 0 32 32"
            ></Image>
            <br />
            <b className="text-2xl">{t.name}</b>
            <br />
            {t.description}
          </div>
        ))}
      </div>
    </div>
  );
}
