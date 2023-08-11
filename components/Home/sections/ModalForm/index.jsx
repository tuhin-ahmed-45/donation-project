import { Button } from "@/components/reusable"

const ModalForm = ({isVisible, onClose}) => {
    if (!isVisible) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="flex flex-col">
            <button className="text-[#FF5959] text-xl place-self-end" onClick={()=> onClose()}>X</button>
            <div className="bg-white p-10 space-y-4">
            <h1 className="text-2xl text-[#FF5959] font-bold mb-10">Submit your Informations</h1>
                <form className="flex flex-col gap-5 items-center">
                    <input className="px-24 border rounded outline-none  py-2" type="text" placeholder="Name"/>
                    <input className="px-24 border rounded outline-none  py-2" type="email" placeholder="Email"/>
                    <input className="px-24 border rounded outline-none  py-2" type="number" placeholder="Phone"/>
                    <input className="px-24 border rounded outline-none  py-2" type="text" placeholder="Address"/>
                    <input className="px-24 border rounded outline-none  py-2" type="number" placeholder="Amount (taka)"/>
                </form>
                <Button title={"Submit"}/>
            </div>
        </div>
    </div>
  )
}

export default ModalForm