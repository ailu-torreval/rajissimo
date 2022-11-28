import React, { useState, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { PageContext } from "../contexts/PageContext";

function BurgerMenu(props) {

    const { isLogin, setIsLogin } = useContext(LoginContext);
    const { page, setPage } = useContext(PageContext);

    function goToHome() {
        isLogin == true && setIsLogin(false);
        setPage("homePage");
      }
    
      function goToMenuPage() {
        isLogin == true && setIsLogin(false);
        setPage("menuPage");
      }
    
      function goToAboutUs() {
        isLogin == true && setIsLogin(false);
        setPage("abUsPage");
      }
    
      function openBurger() {
        props.setShowBurgerMenu(true);
        console.log("open burger");
      }
    
      function goToOrderApp() {
        setIsLogin(true);
      }
  

  return (
    <div className="flex flex-column gap-x-6 justify-between">
      { isLogin ?
      <SearchComponent /> :
      <>      
      <BtnGrid
        class="flex flex-column gap-x-6 justify-between"
        btn1action={goToHome}
        btn1content="Home"
        btn1class="btn3 hidden md:block"
        btn2action={goToMenuPage}
        btn2content="Menu"
        btn2class="btn3 hidden md:block"
        btn3content="Find Us"
        btn3action={goToAboutUs}
        btn3class="btn3 hidden md:block"
        btn4content="☰"
        btn4action={openBurger}
        btn4class="md:hidden"
      />
      <Btn
          class="btn1 hidden md:block"
          content="Order Online ➔"
          action={goToOrderApp}
        />
      </>}
    </div>
  );
}

export default BurgerMenu;
