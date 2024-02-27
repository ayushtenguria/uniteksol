import { HERO_IMAGES } from "@/constants/constants";
import Image from "next/image";
import Card from "./Card";
import SimpleSlider from "./SimpleSlider";

export default function Hero() {
  const cardClasses = "rounded-3xl p-4 m-2";
  return (
    <nav className="flex lg:flex-row flex-col gap-4 my-10 grid-cols-2 justify-between text-fontBlack">
      <div className="lg:w-1/2">
        <div className="my-10">
          <h1 className="text-4xl font-bold mb-6">
            We build your dream house with our passion
          </h1>
          <p className="text-lg font-semibold mb-6">
            Our core goal is to respond to today&apos;s {" "}
            <span className="underline">dynamic marked</span> by equipping our
            customers with the digital tools they need to remain competitive,
            build their business, and empower the consumer experience.
          </p>
          <button className="btn-black text-lg">Learn More</button>
        </div>
        <div>
          <div className="flex lg:flex-row flex-col gap-4">
            <div className={"bg-landingGray " + cardClasses}>
              <span className="text-lg font-bold pb-2">362</span>
              <br></br>Lorem ipsum dolor amet, consectetur adipiscing elit.
              Faucibus in libero.Lorem ipsum dolor amet,
            </div>
            <div className={"bg-landingBlue " + cardClasses}>
              <span className="text-lg font-bold pb-2">178K+</span>
              <br></br>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in
              libero.Lorem ipsum dolor amet,
            </div>
          </div>
          <div>
            <div className={"bg-landingGray " + cardClasses}>
              <div className="flex lg:flex-row flex-col">
                <span className="text-lg font-bold pb-2">Title</span>
                <br></br>Lorem ipsum dolor amet, consectetur adipiscing elit.
                Faucibus in libero.Lorem ipsum dolor amet,
                <Image src="/home.png" width={200} height={200}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <SimpleSlider
          dots={true}
          noOfSlides={1}
          autoPlay={true}
          autoPlaySpeed={3000}
          speed={3000}
          infinite={true}
        >
          {HERO_IMAGES.map((i) => (
            <Image
              src={i.src}
              width={400}
              height={100}
              alt="Petrol pump image"
              className="rounded-3xl md:h-[650px] h-[400px] object-cover"
              key={i.key}
            ></Image>
          ))}
        </SimpleSlider>
      </div>
    </nav>
  );
}
