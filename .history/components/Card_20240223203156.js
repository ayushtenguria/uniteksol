export default function Card({title,bgColor,children,textColor}){
    const bgColorClass = bgColor ? `bg-${bgColor}` : "bg-black";
    const textColorClass = textColor ? `text-${textColor}` : "text-black";   
    return(
        // <div className={bgColorClass+" rounded-lg border-2 border-black p-4 my-2" + textColorClass}>
        <div className={`bg-landrounded-3xl p-4 my-2`}>
            {children}
        </div>
    )
}