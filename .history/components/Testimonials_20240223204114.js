import { TESTIMONIALS } from "@/constants/constants";
import Image from "next/image";
import Card from "./Card";
import SimpleSlider from "./SimpleSlider";
import Slider from "./SimpleSlider";

export default function Testimonials(){
    return(
        <div className="m-10">
            <h1 className="w-1/3">
            Real Stories from Real Customers
Testimonials
            </h1>
            <p>Tesimonials</p>
            <SimpleSlider></SimpleSlider>
            
        </div>
    )
}