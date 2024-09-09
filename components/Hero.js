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
            Our petroleum sector operations involve the automation of downstream
            supply chain operations of petroleum companies, including outlet
            automation. Our offerings at the petroleum outlet are aimed at
            assisting oil companies (OMCs) in implementing their quality and
            quantity assurance initiatives for customers and providing an
            infrastructure to cater to various demands of the customers. Our
            customers in this sector include leading petroleum companies in
            India.
          </p>
          <button className="btn-black text-lg">Learn More</button>
        </div>
        <div>
          <div className="flex lg:flex-row flex-col gap-4">
            <div className={"bg-landingGray " + cardClasses}>
              <span className="text-lg font-bold pb-2">50+ Cities Covered</span>
              <br></br>
              We have successfully completed petrol pump construction projects
              in over 50 cities across the country, ensuring quality
              infrastructure and safety.
            </div>
            <div className={"bg-landingBlue " + cardClasses}>
              <span className="text-lg font-bold pb-2">
                250+ Projects Completed
              </span>
              <br></br>
              With over 250 petrol pump construction projects delivered, we
              bring extensive experience in meeting industry standards and
              client expectations on every project.
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
