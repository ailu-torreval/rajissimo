import React, { useState, useEffect, useContext } from "react";
import OrderPage from "./pages/OrderPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import { OrderContext } from "./contexts/OrderContext";
import {OrderProductsContext } from "./contexts/OrderProductsContext";
import LandingPage from "./pages/LandingPage";
import { PageContext } from "./contexts/PageContext";

function OrderApp() {

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

  const { page, setPage } = useContext(PageContext)

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
  console.log(page);
  return (
    <main>
      <OrderProductsContext.Provider value={{ productsData, setProductsData }}>
      <OrderContext.Provider value={{ orderForm, setOrderForm }}>
        { page === 'landingPage' && <LandingPage /> }
        { page === 'rderPage' && <OrderPage /> }
        { page === 'placeOrderPage' && <placeOrderPage /> }
      </OrderContext.Provider>
      </ OrderProductsContext.Provider>
    </main>
  );
}

export default OrderApp;
