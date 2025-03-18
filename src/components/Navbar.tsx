import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ProductForm from "./ProductForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Gestión de Productos</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center bg-white text-blue-600 px-3 py-1 rounded shadow-md hover:bg-gray-200 transition"
        >
          <AiOutlinePlus className="mr-2" /> Agregar Producto
        </button>
      </nav>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Registrar Producto</h2>
            <ProductForm closeModal={() => setIsOpen(false)} />
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
