import { TESTIMONIALS } from "@/constants/constants";
import Image from "next/image";
import SimpleSlider from "./SimpleSlider";

export default function Testimonials() {
  return (
    <div className="m-10">
      <div className="mb-4">
        <h1 className="w-1/3 text-4xl font-bold">
          Real Stories from Real Customers
        </h1>
        <p className="text-[#656565] font-semibold text-lg">Tesimonials</p>
      </div>

      <SimpleSlider dots={false} noOfSlides={3} autoPlay={false} infinite={false}>
        {TESTIMONIALS.map((t) => (
          <div className="rounded-3xl p-4 border-2 border-[#DDDDDD]" key={t.key}>
            <div className="p-2">
              <div className="mb-2"><p>
          <q>{t.description}</q>
              </p></div>
              <div className="flex">
                <Image src={t.src} width={50} height={50} className="rounded-full mr-4"></Image>
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-[#656565]">{t.designation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SimpleSlider>
    </div>
  );
}
