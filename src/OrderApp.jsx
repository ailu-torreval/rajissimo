import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import OrderPage from "./pages/OrderPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import Footer from "./components/Footer";

function OrderApp() {
    const [ isOrder, setIsOrder] = useState(false);
    const [ productsData, setProductsData ] = useState([]);


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
          });
      }, []);
  return (
      <>
      {
          isOrder ?
          <PlaceOrderPage setIsOrder={setIsOrder} /> :
          <OrderPage setIsOrder={setIsOrder} /> 
      }
      </>
  )
}

export default OrderApp