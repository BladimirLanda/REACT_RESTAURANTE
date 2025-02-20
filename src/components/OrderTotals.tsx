//COMPONENT ORDERTOTALS
import { useMemo } from "react"
import { OrderItem } from "../types/types"
import { formatCurrency } from "../helpers/helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    saveOrder: () => void;
}

function OrderTotals( { order, tip, saveOrder } : OrderTotalsProps ) {
    //State
    const subTotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.price * item.quantity), 0 ), [order]);
    const tipAmount = useMemo(() => subTotalAmount * tip, [order, tip]);
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [order, tip]);

    //{''}: Retorna una espaciO
    //---View---//
    return (
        <div>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{ formatCurrency(subTotalAmount) }</span>
                </p>

                <p>Propina: {''}
                    <span className="font-bold">{ formatCurrency(tipAmount) }</span>
                </p>

                <p className="text-right text-xl">Total a pagar: {''}
                    <span className="font-black text-teal-900"> { formatCurrency(totalAmount) } </span>
                </p>
            </div>

            <button className="w-full p-3 mt-10 uppercase text-white font-bold bg-black 
            hover:shadow-md disabled:opacity-10"
            disabled={totalAmount === 0}
            onClick={ saveOrder }>
                Guardar Orden
            </button>
        </div>
    )
}

export default OrderTotals