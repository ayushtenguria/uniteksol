import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CompanyLogos from "@/components/companyLogos";
import Story from "@/components/Story";
import ServiceBanner from "@/components/serviceBanner";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import Tailor from "@/components/Tailor";
import Map from "@/components/map";
import Galleria from "@/components/Gelleria";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="md:px-10">
        <Hero />
        <CompanyLogos />
        <Story />
        <Map />
        <Tailor />
        <Appointment />
        {/* <Testimonials /> */}
        <Galleria/>
        {/* <About /> */}
        <ServiceBanner />
      </div>
    </Layout>
  );
}
