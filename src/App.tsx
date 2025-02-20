//COMPONENTE APP
import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import OrderTotals from "./components/OrderTotals"
import useOrder from "./hooks/useOrder"
import TipPercentForm from "./components/TipPercentForm"

function App() {
  //Hook
  const { order, tip, setTip, addItem, removeItem, saveOrder } = useOrder();

  //---View---//
  return (
    <>
      <header className="py-5 bg-teal-400">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="mt-10 space-y-3">
            {menuItems.map(item => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="p-5 border border-dashed border-slate-300 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContent order={order} removeItem={removeItem} />

              <TipPercentForm tip={tip} setTip={setTip} />

              <OrderTotals order={order} tip={tip} saveOrder={saveOrder} />
                          </>
          ): (
            <p className="text-center">La orden está vacía</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
