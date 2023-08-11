import Image from "next/image"

const PlanCard = ({image, title}) => {
  return (
    <div className="bg-[#4F9DA61A]/10 p-10 space-y-5">
        <div>
            <Image src={image} width={55} height={45} alt=""/>
        </div>
        <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-[#707070]">Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim <br /> velit mollit.</p>
        </div>
    </div>
  )
}

export default PlanCard