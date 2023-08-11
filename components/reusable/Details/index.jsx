import { Button } from ".."

const Details = ({title}) => {
  return (
    <div className="space-y-6 order-2 md:order-1">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>Lorem ipsum dolor sit amet, usu cu esse possit <br /> referrentur, at eam falli deterruisset. No duo populo <br /> animal noluisse, enim</p>
        <p>Lorem ipsum dolor sit amet, usu cu esse possit <br /> referrentur, at eam falli deterruisset.</p>

        <Button title={"How to Contribute?"}/>
    </div>
  )
}

export default Details