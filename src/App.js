import './App.css';
import React, { useState} from "react";
import Website from './pages/Website';
import OrderApp from './pages/OrderApp';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
    {isLogin ? 
    <OrderApp /> :
    <Website />
    }
    </>

  );
}

export default App;
