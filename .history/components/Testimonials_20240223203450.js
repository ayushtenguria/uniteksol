import { TESTIMONIALS } from "@/constants/constants";
import Image from "next/image";
import Card from "./Card";

export default function Testimonials(){
    return(
        <div className="m-10">
            <h1 className="w-1/3">
            Real Stories from Real Customers
Testimonials
            </h1>
            <p>Tesimonials</p>
            {TESTIMONIALS.map((t)=>{
                <Card>
                    <div className="border-2 border-black p-2">
                    <div>
                    “We were looking for an agency that would help
design and build the job platform of the future with
us. Cut the Code was able to perfectly translate our
needs into a digital experience that seamlessly
aligns with the modern employer and jobseeker.”
                    </div>
                    <div>
                        <Image src={t.src} width={50} height={50}></Image>
                        <div>
                            <h3></h3>
                        </div>
                    </div>
                    </div>
                </Card>
            })}
        </div>
    )
}