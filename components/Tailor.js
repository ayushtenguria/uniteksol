import { TAILERS } from "@/constants/constants";
import Image from "next/image";
export default function Tailor() {
  return (
    <div className="my-10">
      <div className="pb-6">
      <h2 className="text-4xl font-bold">Tailor-made features</h2>
        <p className="lg:text-lg text-md">
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-8 text-black text-center">
        {TAILERS.map((t) => (
          <div className="flex flex-col items-center w-5/6" key={t.key}>
            <Image
              src={t.src}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="my-4"
            ></Image>
            <h3 className="text-2xl font-bold">{t.name}</h3>
            <p>{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
