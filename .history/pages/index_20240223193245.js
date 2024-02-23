import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CompanyLogos from "@/components/companyLogos";
import Story from "@/components/Story";
import ServiceBanner from "@/components/serviceBanner";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <CompanyLogos></CompanyLogos>
      <Story></Story>
      <Testimonials></Test>
      <About></About>
      <ServiceBanner></ServiceBanner>
    </Layout>
  );
}
