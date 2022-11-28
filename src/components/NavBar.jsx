import React, { useState, useContext } from "react";
import Logo  from "./Logo";
import BtnGrid from "./BtnGrid";
import Btn from "./Btn";
import { LoginContext } from "../contexts/LoginContext";
import { PageContext } from "../contexts/PageContext";


function NavBar() {
    const { isLogin, setIsLogin } = useContext(LoginContext);
    const { page, setPage } = useContext(PageContext);

    function goToHome() {
        setPage("homepage");
    }

    function goToMenuPage() {
        setPage("menuPage");
    }


    function goToAboutUs() {
        setPage("AbUsPage");
    }

    function openBurger() {
        console.log("open burger");
    }





  return (
      <nav>
          <Logo />
          <BtnGrid 
           className=""
           btn1action={goToHome}
           btn1content="Home"
           btn1className="btn3"
           btn2action={goToMenuPage}
           btn2content="Menu"
           btn2className="btn3"
           btn3content="Find Us"
           btn3action={goToAboutUs}
           btn3className="btn3"
           btn4content="☰"
           btn4action={openBurger}
           btn4className="burgerBtn" />
          {!isLogin && <Btn class="btn1" content="Order Online ➔" />}
      </nav>
  )
}

export default NavBar