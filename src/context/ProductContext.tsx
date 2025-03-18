import { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  codigo: number;
  nombre: string;
  descripcion: string;
  cantidad: number;
  creacion: string;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (codigo: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (codigo: number) => {
    setProducts(products.filter((product) => product.codigo !== codigo));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProduct debe usarse dentro de un ProductProvider");
  return context;
};
