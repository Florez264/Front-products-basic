import { useState } from "react";
import { useProduct } from "../context/ProductContext";
import Swal from "sweetalert2";

interface ProductFormProps {
  closeModal: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ closeModal }) => {
  const { addProduct } = useProduct();
  const [form, setForm] = useState({
    codigo: "",
    nombre: "",
    descripcion: "",
    cantidad: "",
    creacion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!form.codigo || !form.nombre || !form.descripcion || !form.cantidad || !form.creacion) {
      Swal.fire({
        title: "Campos requeridos",
        text: "Por favor, completa todos los campos.",
        icon: "warning",
        confirmButtonText: "Entendido",
      });
      return;
    }

    addProduct({
      ...form,
      codigo: Number(form.codigo),
      cantidad: Number(form.cantidad),
    });

    // Mostrar alerta de éxito
    Swal.fire({
      title: "¡Producto agregado!",
      text: `El producto "${form.nombre}" ha sido guardado correctamente.`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    setForm({ codigo: "", nombre: "", descripcion: "", cantidad: "", creacion: "" });
    closeModal(); // Cierra el modal después de agregar el producto
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="number"
        name="codigo"
        placeholder="Código"
        value={form.codigo}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={form.descripcion}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="number"
        name="cantidad"
        placeholder="Cantidad"
        value={form.cantidad}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="date"
        name="creacion"
        value={form.creacion}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">
        Guardar Producto
      </button>
    </form>
  );
};

export default ProductForm;
