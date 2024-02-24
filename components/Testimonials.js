import { TESTIMONIALS } from "@/constants/constants";
import Image from "next/image";
import SimpleSlider from "./SimpleSlider";

export default function Testimonials() {
  return (
    <div className="m-10">
      <div className="mb-4">
        <h1 className="lg:w-1/3 text-4xl font-bold">
          Real Stories from Real Customers
        </h1>
        <p className="text-[#656565] font-semibold text-lg">Tesimonials</p>
      </div>

      <SimpleSlider
        dots={true}
        noOfSlides={3}
        autoPlay={false}
        infinite={false}
      >
        {TESTIMONIALS.map((t) => (
          <div
            className="rounded-3xl p-4 border-2 border-[#DDDDDD]"
            key={t.key}
          >
            <div className="p-2">
              <div className="mb-2 lg:text-lg text-sm">
                <q>{t.description}</q>
              </div>
              <div className="flex">
                <Image
                  src={t.src}
                  width={50}
                  height={50}
                  className="rounded-full mr-4 w-[50px] h-[50px]"
                ></Image>
                <div className="lg:text-lg text-sm">
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
