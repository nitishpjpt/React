import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Register from "./Components/Register";
import { useState } from "react";
import CategoryPage from "./Components/CategoryPage";

const App = () => {
  // state for the cart
  const [cart, setCart] = useState([]);

  const addtoCart = (single) => {
    //check if the item is on the cart

    const dublicate = cart.find((item) => {
      return item.id === single.id;
    });

    if (dublicate) {
      const upDateCart = cart.map((item) => {
        return item.id === single.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });

      setCart(upDateCart);
    } else {
      setCart([...cart, { ...single, quantity: 1 }]);
    }
  };

  //increment button
  const increament = (id) => {
    const incQty = cart.map((item) => {
      return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
    });

    setCart(incQty);
  };

  //increment button
  const decreament = (id) => {
    const decQty = cart.map((item) => {
      return item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
    setCart(decQty);
  };

  //remove items from the cart
  const removeItem = (id) => {
    const remove = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(remove);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home cart={cart} />}></Route>
          <Route
            path="/ProductPage/:id"
            element={<ProductDetails addtoCart={addtoCart} cart={cart} />}
          ></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Register" element={<Register></Register>}></Route>
          <Route
            path="/Products/Cart"
            element={
              <Cart
                cart={cart}
                increament={increament}
                decreament={decreament}
                removeItem={removeItem}
              ></Cart>
            }
          ></Route>
          <Route
            path="/CategoryPage"
            element={<CategoryPage cart={cart}></CategoryPage>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
