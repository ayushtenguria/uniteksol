import Image from "next/image";

export default function About(){
    return(
        <div className="flex md:flex-row flex-col m-10 py-20 gap-6">
            <div className="bg-[#E4DCD3] rounded-t-full mb-16 lg:m-0 md:w-1/4">
                <div className="flex justify-center relative top-16">
                    <p className="text-[#00010D] font-semibold"><span className="font-semibold flex justify-center text-lg">Rishabh</span> NSUT Student</p>
                </div>
                
                <Image src="/Person.png" width={1400} height={1400} className="relative top-20"></Image>
            </div>
            <div className="m-5 md:w-3/4">
                <Image src='/quote.png' width={100} height={100} className="relative z-0"></Image>
                <h2 className="text-4xl font-bold relative z-30 bottom-6 ml-4">
                    About us
                </h2>
                <p className="text-lg font-medium">
                I wholeheartedly recommend CareerGuide to every student seeking career counseling. Their commitment to understanding individual needs, combined with their in-depth knowledge and friendly approach, ensures a level of customer satisfaction that is truly exceptional. I couldn’t be happier with the service I received, and I am genuinely grateful for the positive impact it has had on my life.I wholeheartedly recommend CareerGuide to every student seeking career counseling. Their commitment to understanding individual needs, combined with their in-depth knowledge and friendly approach, ensures a level of customer satisfaction that is truly exceptional.
                </p>
            </div>
        </div>
    )
}