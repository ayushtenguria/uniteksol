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
            <SimpleSlider>
                {TESTIMONIALS.map((t)=>(
                <Card>
                    <div className="border-2 border-black p-2 gap-2">
                    <div>
                        {t.description}
                    </div>
                    <div>
                        <Image src={t.src} width={50} height={50}></Image>
                        <div>
                            <h3>{t.name}</h3>
                            <p>{t.designation}</p>
                        </div>
                    </div>
                    </div>
                </Card>
            ))}
            </SimpleSlider>
            
        </div>
    )
}