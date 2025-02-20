//COMPONENT ORDERCONTENT
import { OrderItem } from "../types/types"
import { formatCurrency } from "../helpers/helpers"

type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id: OrderItem['id']) => void;
}

function OrderContent( { order, removeItem } : OrderContentProps ) {

    //---View---//
    return (
        <div>
            <h2 className="font-black text-4xl ">Consumo</h2>

            <div className="mt-10 space-y-3">
                {order.map(item => (
                    <div className="py-5 px-2 flex justify-between items-center border-t last-of-type:border-b
                    border-gray-200 hover:bg-gray-50" 
                    key={item.id}>
                        <div>
                            <p className="text-lg">
                                {item.name} - { formatCurrency(item.price) }
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - 
                                <span className="text-teal-900">{ formatCurrency(item.price * item.quantity) }</span>
                            </p>
                        </div>

                        <button className="h-8 w-8 rounded-full text-white font-black bg-red-600 hover:bg-red-700"
                        onClick={ () => removeItem(item.id) }>
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderContent