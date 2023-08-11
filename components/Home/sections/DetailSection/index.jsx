import Details from "@/components/reusable/Details"
import Image from "next/image"

const DetailSection = ({ title }) => {
    return (
        <section className="px-32 py-10 space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-7">
                <Details title={`No More Homeless, No More Hunger`} />
                <Image className="order-1" src={"/img/obj1.png"} width={456} height={470} alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-7">
                <Image src={"/img/obj2.png"} width={456} height={470} alt="" />
                <Details title={`Give Someone’s Life By Giving Of Yours`} />
            </div>
        </section>
    )
}

export default DetailSection