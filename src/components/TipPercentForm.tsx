//COMPONENT TipPercentForm
import { Dispatch, SetStateAction } from "react"
import { tipOptions } from "../data/db"

type TipPercentProps = {
    tip: number,
    //Valor Inferido VSCode
    setTip: Dispatch<SetStateAction<number>>;
}

function TipPercentForm( { tip, setTip } : TipPercentProps ) {
  return (
    <div>
        <h3 className="mb-2 font-black text-2xl">Propina</h3>

        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                    id={tipOption.id} 
                    type="radio"
                    name="tip"
                    value={tipOption.value}
                    checked={tipOption.value === tip}
                    onChange={ e => setTip(+e.target.value) }
                    />
                </div>
            ))}
        </form>
    </div>
  )
}

export default TipPercentForm