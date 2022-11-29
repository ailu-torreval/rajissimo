import React, { useContext } from "react";
import HeroSection from "../sections/HeroSection";
import BannerSection from "../sections/BannerSection";
import Section from "../sections/Section";
import SubscriptionSection from "../sections/SubscriptionSection";
import { PageContext } from "../contexts/PageContext";

function HomePage() {

  const {page, setPage} = useContext(PageContext);

  function goToMenu() {
    console.log("menu");
    setPage("menuPage")
  }

  function goToAbUs() {
    console.log("menu");
    setPage("abUsPage")

  }



  return (
    <>
      <HeroSection />
      <BannerSection />
      <Section
        img=""
        class="flex flex-col md:flex-row justify-center mx-8 my-2"
        title="FRIENDS. WAFFLES. ENJOY"
        titleClass="text-blue"
        content="No matter what you are doing or who you are spending time with, waffles are always a good idea. Our delicious and delicate waffles, dipped in homemade chocolate and sprinkled with your favourites toppings will delight you."
        contentClass="text-blue"
        btnContent="See Menu ➔"
        btnClass="btn2"
        btnAction={goToMenu}
      />
      <Section
        img=""
        class="flex flex-col-reverse md:flex-row-reverse justify-center mx-8 my-2"
        title="FROM THE SCRATCH…
        AS WELL AS EVERYDAY"
        titleClass="text-blue"
        content="It all started when our CEO and founder Nader Raja had his first ice cream as a youngster. The experience pivoted him on a journey – a journey just like Willy Wonka’s pursuit for the most inovative ways to amaze the world with his sweet treats."
        contentClass="text-blue"
        btnContent="About Us ➔"
        btnClass="btn2"
        btnAction={goToAbUs}
      />
      <SubscriptionSection />
    </>
  );
}

export default HomePage;
