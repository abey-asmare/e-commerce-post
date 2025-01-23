import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/NavBar";
import LandingPage from "./pages/LandingPage";
import ProductDetail from "./pages/ProductDetail";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route
            path="/products/:id"
            element={<ProductDetail></ProductDetail>}
          ></Route>
          <Route
            path="/products/create"
            element={<CreateProduct></CreateProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
