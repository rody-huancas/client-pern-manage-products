import { Link } from "react-router-dom"

export const Products = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">
          Productos
        </h2>
        <Link to={"/productos/nuevo"} className="rounded-md p-3 bg-indigo-600 text-sm font-bold text-white shadow-sm hover:bg-indigo-700">
          Agregar Producto
        </Link>
      </div> 
    </>
  )
}
