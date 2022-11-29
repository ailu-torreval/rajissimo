import React, { useState, useEffect } from "react";
import OrderPage from "./pages/OrderPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import { OrderContext } from "./contexts/OrderContext";
import LandingSection from "./sections/LandingSection";

function OrderApp() {
  const [isOrder, setIsOrder] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [orderForm, setOrderForm] = useState({
    firstName: "",
    lastName: "",
    addres1: "",
    address2: "",
    zip: "",
    city: "",
    order: {},
    isOrder: false,
  });

  const url = "https://deliveryproducts-9391.restdb.io/rest/delivery-products";
  const options = {
    headers: {
      "x-apikey": "637d3121c890f30a8fd1f507",
    },
  };
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
        console.log(productsData);
      });
  }, []);
  return (
    <main>
      <OrderContext.Provider value={{ orderForm, setOrderForm }}>
        {/* {orderForm.address1 == "" && <LandingSection />} */}
        {/* {orderForm.address1.length > 1 && <PlaceOrderPage />} */}
        {/* {orderForm.isOrder && <OrderPage />} */}
      </OrderContext.Provider>
    </main>
  );
}

export default OrderApp;
