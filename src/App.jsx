import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbers from "./Components/Navber/Navbers";
import Footer from "./Components/Footer/Footer";
import Home from "./Page/Home/Home.jsx";
import Menu from "./Page/Home/Menu/Menu.jsx";
import About from "./Page/Home/About/About.jsx";
import KoiThe from "./Components/KOITHE/KoiThe.jsx";
import AddToCart from "./Components/AddtoCard/AddToCard.jsx";
import { useState } from "react";
import NoPage from "./Components/404/NoPage.jsx";

function App() {
  const [showDrink, setShowDrink] = useState([]);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClickOrder = (order) => {
    console.log("Item clicked:", order);
    let isPresent = false;
    cart.forEach((drink) => {
      if (order.id === drink.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, order]); // Add the clicked item to the cart
  };

  const handleChange = (drink, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === drink.id) {
        ind = index;
      }
    });
    const tempArr = cart;
    tempArr[ind] += d;
    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }
    setCart([...tempArr]);
  };
  return (
    <>
      <BrowserRouter>
        <Navbers size={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/koi_the"
            element={<KoiThe handleClickOrder={handleClickOrder} />}
          />
          <Route
            path="/addToCart"
            element={
              <AddToCart
                cart={cart}
                setCart={setCart}
                handleChange={handleChange}
              />
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <div>
        {warning && (
          <div className="warning">
            Item is already added to your cart &#128511;
          </div>
        )}
      </div> */}
    </>
  );
}

export default App;
