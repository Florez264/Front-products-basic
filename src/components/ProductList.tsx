import { useState } from "react";
import { useProduct } from "../context/ProductContext";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import Swal from "sweetalert2";

const ProductList = () => {
  const { products, deleteProduct } = useProduct();
  const [sortKey, setSortKey] = useState<keyof typeof products[0]>("nombre");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filtrar productos por búsqueda
  const filteredProducts = products.filter(
    (product) =>
      product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Ordenar productos según el campo seleccionado
  const sortedProducts = [...filteredProducts].sort((a, b) =>
    a[sortKey] > b[sortKey] ? 1 : -1
  );

  // Paginación: obtener productos de la página actual
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Confirmar eliminación con SweetAlert2
  const confirmDelete = (codigo: number) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(codigo);
        Swal.fire("Eliminado", "El producto ha sido eliminado.", "success");
      }
    });
  };

  return (
    <div className="mt-4">
      {/* Filtros */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
        <h2 className="text-lg font-semibold">Lista de Productos</h2>

        {/* Barra de búsqueda */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 pl-8 rounded w-full"
          />
          <AiOutlineSearch className="absolute left-2 top-3 text-gray-500" />
        </div>

        {/* Select de ordenamiento */}
        <select
          onChange={(e) => setSortKey(e.target.value as keyof typeof products[0])}
          className="border p-2 rounded"
        >
          <option value="nombre">Nombre</option>
          <option value="codigo">Código</option>
          <option value="cantidad">Cantidad</option>
          <option value="creacion">Fecha de Creación</option>
        </select>
      </div>

      {/* Lista de productos */}
      <ul className="space-y-4">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <li key={product.codigo} className="border p-4 rounded flex justify-between items-center bg-gray-50 shadow">
              <div>
                <p className="font-bold">{product.nombre}</p>
                <p className="text-sm text-gray-600">{product.descripcion}</p>
                <p className="text-gray-500">Cantidad: {product.cantidad}</p>
                <p className="text-gray-500">Fecha: {product.creacion}</p>
              </div>
              <button
                onClick={() => confirmDelete(product.codigo)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center"
              >
                <AiOutlineDelete className="mr-1" /> Eliminar
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No hay productos disponibles.</p>
        )}
      </ul>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-600"}`}
          >
            Anterior
          </button>
          <span className="font-bold text-gray-700">{currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-600"}`}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
