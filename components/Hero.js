import { HERO_IMAGES } from "@/constants/constants";
import Image from "next/image";
import Card from "./Card";
import SimpleSlider from "./SimpleSlider";

export default function Hero() {
  return (
    <div className="flex gap-4 m-10 grid-cols-2 justify-between text-fontBlack">
      <div className="w-1/2">
        <div className="my-10">
          <h1 className="text-4xl font-bold mb-6">
            We build your dream house with our passion
          </h1>
          <p className="text-lg font-semibold mb-6">
            Our core goal is to respond to today's{" "}
            <span className="underline">dynamic marked</span> by equipping our
            customers with the digital tools they need to remain competitive,
            build their business, and empower the consumer experience.
          </p>
          <button className="btn-black text-lg">Learn More</button>
        </div>
        <div>
          <div className="flex gap-4">
            <Card bgColor={"landingGray"}>
              <span className="text-lg font-bold pb-2">362</span>
              <br></br>Lorem ipsum dolor amet, consectetur adipiscing elit.
              Faucibus in libero.Lorem ipsum dolor amet,
            </Card>
            <Card bgColor={"landingBlue"}>
              <span className="text-lg font-bold pb-2">178K+</span>
              <br></br>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in
              libero.Lorem ipsum dolor amet,
            </Card>
          </div>
          <div>
            <Card bgColor={"landingGray"}>
              <div className="flex">
                <span className="text-lg font-bold pb-2">Title</span>
                <br></br>Lorem ipsum dolor amet, consectetur adipiscing elit.
                Faucibus in libero.Lorem ipsum dolor amet,
                <Image src="/home.png" width={200} height={200}></Image>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <SimpleSlider dots={true} noOfSlides={1} autoPlay={true} autoPlaySpeed={3000} speed={3000}>
          {HERO_IMAGES.map((i) => (
            <Image
              src={i.src}
              width={400}
              height={100}
              alt="Petrol pump image"
              className="rounded-3xl h-[650px] object-cover"
            ></Image>
          ))}
        </SimpleSlider>
      </div>
    </div>
  );
}
