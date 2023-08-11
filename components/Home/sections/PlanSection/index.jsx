import PlanCard from "@/components/reusable/PlanCard"

const PlanSection = ({title, image}) => {
    return (
        <section className="py-20 px-32 space-y-5">
            <div className="flex text-center flex-col gap-5">
                <h2 className="text-4xl font-bold">Our Donate Plan</h2>
                <p className="text-[#707070]">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli <br /> deterruisset. No duo populo animal noluisse, enim</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <PlanCard title={"Food for a family"} image={"/img/food.png"}/>
                <PlanCard title={"Shelter for a family"} image={"/img/frame.png"}/>
                <PlanCard title={"Education for a child"} image={"/img/edu.png"}/>
            </div>
        </section>
    )
}

export default PlanSection