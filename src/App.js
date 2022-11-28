import "./App.css";
import React, { useState } from "react";
import Website from "./Website";
import OrderApp from "./OrderApp";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { LoginContext } from "./contexts/LoginContext";
import { PageContext } from "./contexts/PageContext";

function App() {
  const { page, setPage } = useState("website");
  const { isLogin, setIsLogin } = useState(false);

  return (
    <>
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <PageContext.Provider value={{ page, setPage }}>
        <NavBar className="website-header" cta="Order Now ➔" />
        {isLogin ? <OrderApp /> : <Website />}
        <Footer />
      </PageContext.Provider>
      </LoginContext.Provider>
    </>
  );
}

export default App;
