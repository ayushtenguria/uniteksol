import React from "react";
import SimpleSlider from "./SimpleSlider";
import Image from "next/image";

// Import local images
import image1 from "../public/image1.jpg";
import image2 from "../public/image2.jpg";
import image3 from "../public/image3.jpg";
import image4 from "../public/image4.jpg";
import image5 from "../public/image5.jpg";
import image6 from "../public/image6.jpg";
import image7 from "../public/image7.jpg";

const Galleria = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <section>
      <p className="text-center font-semibold md:text-5xl text-2xl mt-10">Gallery</p>
      <div className="p-4">
        <SimpleSlider
          dots={true}
          noOfSlides={5}
          autoPlay={true}
          autoPlaySpeed={1000}
          speed={3000}
          infinite={true}
        >
          {images.map((i) => (
            <Image
              src={i.src}
              width={400}
              height={100}
              alt="Petrol pump image"
              className="rounded-3xl md:h-[300px] h-[400px] m-10 object-cover"
              key={i.key}
            ></Image>
          ))}
        </SimpleSlider>
      </div>
    </section>
  );
};

export default Galleria;
