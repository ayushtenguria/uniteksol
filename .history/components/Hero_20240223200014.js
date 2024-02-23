import Image from "next/image";
import Card from "./Card";

export default function Hero(){
    return(
        <div className="flex gap-4 m-10 grid-cols-2 justify-between text-fontBlack">
            <div className="w-1/2">
                <div className="my-10">
                    <h1 className="text-4xl font-bold mb-6">
                        We build your dream house with our passion
                    </h1>
                    <p className="text-lg font-semibold mb-6">
                    Our core goal is to respond to today's <span className="underline">dynamic marked</span> by equipping our customers with the digital tools they need to remain competitive, build their business, and empower the consumer experience.
                    </p>
                    <button className="btn-black text-lg">
                        Learn More
                    </button>
                </div>
                <div>
                    <div className="flex gap-4">
                        <Card bgColor={"landingGray"}>
                        <span className="text-lg font-bold pb-2">362</span><br></br>Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.Lorem ipsum dolor amet,</Card>
                        <Card bgColor={"landingBlue"}>
                        <span className="text-lg font-bold pb-2">178K+</span>
                            Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.Lorem ipsum dolor amet,</Card>
                    </div>
                    <div>
                        <Card title={"Title"} bgColor="landingGray"><span className="text-lg font-bold pb-2">362</span>Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.Lorem ipsum dolor amet,<Image></Image></Card>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <Image src='/pump2.jpg' width={800} height={800} alt="Petrol pump image"></Image>
            </div>
        </div>
    )
}