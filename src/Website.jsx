import React, { useContext } from "react";
import { PageContext } from './contexts/PageContext'
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AbUsPage from "./pages/AbUsPage";

function Website() {
  const { page, setPage } = useContext(PageContext);

  return (
    <>
    {page == 'homePage' && <HomePage />}
    {page == 'menuPage' && <MenuPage />}
    {page == 'abUsPage' && <AbUsPage />}
    </>
  )
}



export default Website