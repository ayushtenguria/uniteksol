import Image from "next/image";

export default function Story() {
  return (
    <div className="my-20">
        <div><h2 className="text-4xl font-bold pb-10">Our Story</h2></div>
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="lg:w-1/2">
          <h4 className="text-lg font-semibold mb-2">
            Our extensive network of candidates ensures you have access to the
            best talent available.
          </h4>
          <Image src="/pump3.jpg" width={300} height={300} className="rounded-3xl object-contain"></Image>
        </div>
        <div className="lg:w-1/2">
          <p className="mb-4">
            Looking to build a winning team? At Talent. we help businesses find
            the right talent to take their team to the next level. Our expert
            screening and network help identify top talent to fit your specific
            needs and culture. Whether you need front-end developers, full-stack
            engineers, or other specialized roles, we have the expertise to help
            you find the perfect match.
          </p>
          <p>
            Our services are designed to take the hassle out of the hiring
            process, so you can focus on running your business. We work with you
            to understand your needs and provide customized solutions to meet
            them. Our commitment to quality means that we stand behind our
            services and offer a guarantee to ensure you get the right talent
            for your team.
          </p>
        </div>
      </div>
    </div>
  );
}
