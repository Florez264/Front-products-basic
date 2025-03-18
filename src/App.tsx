import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Navbar />
      <div className="max-w-3xl mx-auto p-4">
        <ProductList />
      </div>
    </ProductProvider>
  );
}

export default App;
