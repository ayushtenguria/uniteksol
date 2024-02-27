export default function ServiceBanner(){
    return(
        <div className="bg-landingBlack my-10 text-white lg:p-20 md:p-10 p-6 rounded-3xl flex lg:flex-row flex-col gap-8 justify-between items-center font-semibold">
            <div className="lg:text-3xl md:text-2xl text-lg lg:w-1/2 text-center lg:text-left">
                Finding the right mining platform <span className="text-landingBlue">can be hectic</span>, Let us handle this for you
            </div>
            <div>
                <button className="btn-blueht lg:text-lg md:text-sm text-xs w-auto">Get Our Service</button>
            </div>
        </div>
    )
}