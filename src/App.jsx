import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/contact";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/" element={<Products />}></Route>
        <Route path="/" element={<About />}></Route>
        <Route path="/" element={<Contact />}></Route>
        <Route path="/" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
