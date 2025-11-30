import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import ProductLists from "./components/ProductLists";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/Navbar";
import { NotFound } from "./components/NotFound";
import NewProduct from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";
import Wishlist from "./components/Wishlist";


if(!localStorage.getItem("box"))
{
   
  localStorage.setItem("box",JSON.stringify([]))
}


function App() {
  
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NotFound/>} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductLists/>}/>
            <Route path="details" element={<ProductDetails />} />
            <Route path="list" element={<ProductLists />} />
          </Route>
          <Route path="/login/:user" element={<Login />} />
          <Route path="/NewProduct" element={<NewProduct/>} />
          <Route path="/updateProduct/:id" element={<UpdateProduct/>} />
          <Route path="/wishlist" element={<Wishlist/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
