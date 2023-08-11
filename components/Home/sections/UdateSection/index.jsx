import { Button } from "@/components/reusable"

const UpdateSection = ({title}) => {
    return (
        <section className="px-32 py-10 space-y-5">
            <div className="flex text-center flex-col gap-5">
                <h2 className="text-4xl font-bold">Get My Updates</h2>
                <p className="text-[#707070]">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli <br /> deterruisset. No duo populo animal noluisse, enim</p>
            </div>

            <div className="bg-[#FFF4D6] text-center">
                <form className="py-14 px-3 space-x-0">
                    <input className="text-[#AA9F9F] outline-none py-2 px-4" type="email" placeholder="Email"/>
                    <Button title={"Subscribe"}/>
                </form>
            </div>

        </section>
    )
}

export default UpdateSection