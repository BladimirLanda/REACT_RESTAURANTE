//HOOK USEORDER
import { useState } from "react"
import type { MenuItem, OrderItem } from "../types/types"

function useOrder() {
    //State
    //--TS useState<Genérico>
    const [ order, setOrder ] = useState<OrderItem[]>([]);
    const [ tip, setTip ] = useState(0);

    //Funciones
    const addItem = (item: MenuItem) => {
        const itemExits = order.find(orderItem => orderItem.id === item.id);

        if(itemExits) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updateOrder);
        } else {
            const newItem = {...item, quantity: 1};
            setOrder([...order, newItem]);
        }
    }

    //--
    const removeItem = (id: MenuItem['id']) => {
        const newOrder = order.filter(orderItem => orderItem.id !== id);
        setOrder(newOrder);
    }

    //--
    const saveOrder = () => {
        setOrder([]);
        setTip(0);
    }
    
    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        saveOrder
    }
}

export default useOrder;