import { TESTIMONIALS } from "@/constants/constants";
import Image from "next/image";
import Card from "./Card";
import SimpleSlider from "./SimpleSlider";
import Slider from "./SimpleSlider";

export default function Testimonials() {
  return (
    <div className="m-10">
      <div className="mb-4">
        <h1 className="w-1/3 text-4xl font-bold">
          Real Stories from Real Customers
        </h1>
        <p className="text-fontBlack">Tesimonials</p>
      </div>

      <SimpleSlider dots={false} noOfSlides={3}>
        {TESTIMONIALS.map((t) => (
          <div className="rounded-3xl p-4 border-2 border-black">
            <div className="p-2">
              <div>{t.description}</div>
              <div>
                <Image src={t.src} width={50} height={50}></Image>
                <div>
                  <h3>{t.name}</h3>
                  <p>{t.designation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SimpleSlider>
    </div>
  );
}
