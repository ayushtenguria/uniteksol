import { TESTIMONIALS } from "@/constants/constants";
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
                    <div></div>
                </Card>
            })}
        </div>
    )
}