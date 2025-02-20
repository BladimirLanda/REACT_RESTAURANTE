//COMPONENTE MENUITEM
import type { MenuItem } from "../types/types"
import { formatCurrency } from "../helpers/helpers"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

function MenuItem( { item, addItem } : MenuItemProps ) {

    //---View---//
    return (
        <button 
        onClick={ () => addItem(item) }
        className="w-full p-3 border-4 border-teal-400 rounded-lg flex justify-between hover:bg-teal-200">
            <p>{item.name}</p>
            <p className="font-black">{ formatCurrency(item.price) }</p>
        </button>
    )
}

export default MenuItem
