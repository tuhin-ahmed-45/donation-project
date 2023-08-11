import { Button } from "@/components/reusable"
import Image from "next/image"

const HeroSection = ({title}) => {
  return (
    <section className="grid gap-8 grid-cols-1 md:grid-cols-2 bg-[#FAFAFA] items-center py-10 px-32">
        <div className="flex order-2 md:order-1 flex-col gap-5">
            <h1 className=" md:text-4xl xl:text-7xl font-bold">Let’s Help <br /> Those Who Are <br /> More In Need</h1>
            <p className="text-[#707070]">Lorem ipsum dolor sit amet, usu cu esse possit <br /> referrentur, at eam falli deterruisset. No duo populo <br /> animal noluisse, enim</p>
            <div className="flex items-center gap-5">
            <Button title={"Donate Now"}/>
            <button className="text-[#707070]">Watch Video</button>
            </div>
        </div>
        <div className="order-1">
            <Image src={"/img/Donate 1.png"} width={490} height={603} alt="Donate"/>
        </div>
    </section>
  )
}

export default HeroSection