import { DonationMoney } from "@/components/reusable"
import { useState } from "react"
import ModalForm from "../ModalForm"

const DonationSection = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <section className="text-center space-y-7 py-20 px-32">
            <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-bold">Donate Today</h2>
                <p className="text-[#707070] text-[14px] md:text-[16px]">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli <br /> deterruisset. No duo populo animal noluisse, enim</p>
            </div>

            <div className="flex flex-col gap-7 items-center">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <DonationMoney title={"100tk"} />
                    <DonationMoney title={"200tk"} />
                    <DonationMoney title={"500tk"} />
                    <DonationMoney title={"1000tk"} />
                    <DonationMoney title={"5000tk"} />
                </div>
                <div>
                    <form>
                        <input className="text-[#B3B3B3] border px-5 py-2 border-b-2 outline-none" type="text" placeholder="Other Amount (Taka)"/>
                    </form>
                </div>
                <button onClick={() => setShowModal(true)} className="px-3 py-2 bg-[#FF5959] text-white rounded">Donate Now</button>
            </div>
            <ModalForm isVisible={showModal} onClose={()=> setShowModal(false)} />
        </section>
    )
}

export default DonationSection