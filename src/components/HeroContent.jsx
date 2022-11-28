import React from 'react'
import CTA from './CTA'

function HeroContent() {

    function goToOrderApp() {

    }

  return (
    <div className="flex flex-col mx-2 justify-center gap-4">
    <h2 className="text-blue">INVITE US HOME WE’LL BRING THE DESSERT</h2>
    <CTA action={goToOrderApp} class="cta" content="Order Now" />
    </div>
  )
}

export default HeroContent