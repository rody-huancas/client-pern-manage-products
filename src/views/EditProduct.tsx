import { Link, Form, useActionData, LoaderFunctionArgs, redirect, useLoaderData } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { getProductById } from "../services/ProductService";
import { Product } from "../types";

export async function loader( { params }: LoaderFunctionArgs ) {
  if (params.id !== undefined) {
    const product = await getProductById(+params.id);
    if( !product ) {
        // throw new Response('', { status: 404, statusText: "No encontrado" });
        return redirect("/")
    }
    return product;
  }
}

export const EditProduct = () => {
  const product = useLoaderData() as Product;
  const error = useActionData() as string;
  
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">
          Editar Producto
        </h2>
        <Link
          to={"/"}
          className="rounded-md p-3 bg-indigo-600 text-sm font-bold text-white shadow-sm hover:bg-indigo-700"
        >
          Volver a Productos
        </Link>
      </div>
      {
        error && <ErrorMessage>{error}</ErrorMessage>
      }
      <Form className="mt-10" method="POST" >
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
            Nombre Producto:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Producto"
            name="name"
            defaultValue={product.name}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="price">
            Precio:
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Precio Producto. ej. 200, 300"
            name="price"
            defaultValue={product.price}
          />
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </Form>
    </>
  );
};
