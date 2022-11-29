import React, {useContext} from 'react'
import { LoginContext } from '../contexts/LoginContext'
import { PageContext } from '../contexts/PageContext'
import Links from './Links'



function Footer(props) {

  const {isLogin, setIsLogin } = useContext(LoginContext)
  const { page, setPage }= useContext(PageContext);


  function goToHomePage() {
    setIsLogin(false);
    setPage('homePage');
  }

  function goToOrderApp() {
    setIsLogin(true);
    setPage('landingPage');
  }

  function goToMenu() {
    setIsLogin(false);
    setPage('menuPage');  
  }
  function goToAbUs() {
    setIsLogin(false);
    setPage('abUsPage');  
  }
  function goToSubsPage() {
    setIsLogin(false);
    setPage('subsPage');  
  }

  function goTo() {
    console.log("open");
  }


  return (
    <footer className="p-16">
      <div className="flex flex-col justify-between md:flex-row" >
        <ul>
{ isLogin ?  <li  onClick={goToHomePage}><span><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.415 28.3834C28.934 26.908 27.5465 25.8199 25.9 25.8199H24.05V20.287C24.05 19.7979 23.8551 19.3288 23.5081 18.9829C23.1612 18.6371 22.6907 18.4428 22.2 18.4428H11.1V14.7542H14.8C15.2907 14.7542 15.7612 14.5599 16.1081 14.214C16.4551 13.8682 16.65 13.3991 16.65 12.9099V9.22138H20.35C21.3313 9.22138 22.2724 8.83276 22.9663 8.14103C23.6602 7.44929 24.05 6.51109 24.05 5.53283V4.77667C26.2635 5.66629 28.2278 7.07736 29.7747 8.8891C31.3216 10.7008 32.4051 12.8593 32.9325 15.1797C33.4598 17.5001 33.4153 19.9133 32.8027 22.2128C32.1901 24.5123 31.0277 26.6296 29.415 28.3834ZM16.65 33.0679C9.3425 32.1642 3.7 25.9674 3.7 18.4428C3.7 17.2993 3.848 16.1927 4.0885 15.1415L12.95 23.9756V25.8199C12.95 26.7981 13.3398 27.7363 14.0337 28.4281C14.7276 29.1198 15.6687 29.5084 16.65 29.5084M18.5 0C16.0705 0 13.6649 0.477036 11.4204 1.40387C9.17583 2.33071 7.13641 3.68919 5.41852 5.40176C1.9491 8.86045 0 13.5514 0 18.4428C0 23.3341 1.9491 28.0251 5.41852 31.4838C7.13641 33.1963 9.17583 34.5548 11.4204 35.4816C13.6649 36.4085 16.0705 36.8855 18.5 36.8855C23.4065 36.8855 28.1121 34.9424 31.5815 31.4838C35.0509 28.0251 37 23.3341 37 18.4428C37 16.0208 36.5215 13.6226 35.5918 11.385C34.6621 9.14744 33.2994 7.11433 31.5815 5.40176C29.8636 3.68919 27.8242 2.33071 25.5796 1.40387C23.3351 0.477036 20.9295 0 18.5 0Z" fill="#FAAF3D"/>
</svg>
</span>
<span>Homepage</span> 
</li> :
<li  onClick={goToOrderApp}><span><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.415 28.3834C28.934 26.908 27.5465 25.8199 25.9 25.8199H24.05V20.287C24.05 19.7979 23.8551 19.3288 23.5081 18.9829C23.1612 18.6371 22.6907 18.4428 22.2 18.4428H11.1V14.7542H14.8C15.2907 14.7542 15.7612 14.5599 16.1081 14.214C16.4551 13.8682 16.65 13.3991 16.65 12.9099V9.22138H20.35C21.3313 9.22138 22.2724 8.83276 22.9663 8.14103C23.6602 7.44929 24.05 6.51109 24.05 5.53283V4.77667C26.2635 5.66629 28.2278 7.07736 29.7747 8.8891C31.3216 10.7008 32.4051 12.8593 32.9325 15.1797C33.4598 17.5001 33.4153 19.9133 32.8027 22.2128C32.1901 24.5123 31.0277 26.6296 29.415 28.3834ZM16.65 33.0679C9.3425 32.1642 3.7 25.9674 3.7 18.4428C3.7 17.2993 3.848 16.1927 4.0885 15.1415L12.95 23.9756V25.8199C12.95 26.7981 13.3398 27.7363 14.0337 28.4281C14.7276 29.1198 15.6687 29.5084 16.65 29.5084M18.5 0C16.0705 0 13.6649 0.477036 11.4204 1.40387C9.17583 2.33071 7.13641 3.68919 5.41852 5.40176C1.9491 8.86045 0 13.5514 0 18.4428C0 23.3341 1.9491 28.0251 5.41852 31.4838C7.13641 33.1963 9.17583 34.5548 11.4204 35.4816C13.6649 36.4085 16.0705 36.8855 18.5 36.8855C23.4065 36.8855 28.1121 34.9424 31.5815 31.4838C35.0509 28.0251 37 23.3341 37 18.4428C37 16.0208 36.5215 13.6226 35.5918 11.385C34.6621 9.14744 33.2994 7.11433 31.5815 5.40176C29.8636 3.68919 27.8242 2.33071 25.5796 1.40387C23.3351 0.477036 20.9295 0 18.5 0Z" fill="#FAAF3D"/>
</svg>
</span>
 <span >Order App</span>
</li>}
<li><svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.4168 10.7503C39.4168 8.77949 37.8043 7.16699 35.8335 7.16699H7.16683C5.196 7.16699 3.5835 8.77949 3.5835 10.7503V32.2503C3.5835 34.2212 5.196 35.8337 7.16683 35.8337H35.8335C37.8043 35.8337 39.4168 34.2212 39.4168 32.2503V10.7503ZM35.8335 10.7503L21.5002 19.7087L7.16683 10.7503H35.8335ZM35.8335 32.2503H7.16683V14.3337L21.5002 23.292L35.8335 14.3337V32.2503Z" fill="#FAAF3D"/>
</svg>
<span>
  <a href="mailto:rajissimo@gmail.com">Email Us</a>
</span></li>
        </ul>

        <Links
        title="About"
        link1="Menu"
        link1action={goToMenu}
        link2="Locations"
        link2action={goToAbUs}
        link3="Subscription Card"
        link3action={goToSubsPage} />
        <Links
        title="Suport"
        link1="Support Request"
        link1action={goTo}
        link2="Contact"
        link2action={goTo}
/>

      </div>
      <div>
        <p className="text-blue">All rights reserved       © 2022</p>
        <ul>
          <li><svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M54.0832 29.5003C54.0832 15.9303 43.0698 4.91699 29.4998 4.91699C15.9298 4.91699 4.9165 15.9303 4.9165 29.5003C4.9165 41.3987 13.3732 51.3057 24.5832 53.592V36.8753H19.6665V29.5003H24.5832V23.3545C24.5832 18.6099 28.4428 14.7503 33.1873 14.7503H39.3332V22.1253H34.4165C33.0644 22.1253 31.9582 23.2316 31.9582 24.5837V29.5003H39.3332V36.8753H31.9582V53.9607C44.3728 52.7316 54.0832 42.2591 54.0832 29.5003Z" fill="#FAAF3D"/>
</svg>
</li>
<li><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.3499 13.095C37.3499 13.095 38.4974 14.22 37.3499 13.095C35.8118 11.3391 34.9642 9.08422 34.9649 6.75H28.0124V34.65C27.9587 36.1598 27.3213 37.5899 26.2343 38.6391C25.1473 39.6883 23.6956 40.2748 22.1849 40.275C18.9899 40.275 16.3349 37.665 16.3349 34.425C16.3349 30.555 20.0699 27.6525 23.9174 28.845V21.735C16.1549 20.7 9.35986 26.73 9.35986 34.425C9.35986 41.9175 15.5699 47.25 22.1624 47.25C29.2274 47.25 34.9649 41.5125 34.9649 34.425V20.2725C37.7841 22.2972 41.1689 23.3835 44.6399 23.3775V16.425C44.6399 16.425 40.4099 16.6275 37.3499 13.095Z" fill="#FAAF3D"/>
</svg>
</li>
<li><svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.625 28.5C35.625 29.9092 35.2071 31.2867 34.4242 32.4584C33.6413 33.6301 32.5285 34.5434 31.2266 35.0826C29.9247 35.6219 28.4921 35.763 27.11 35.4881C25.7279 35.2132 24.4583 34.5346 23.4619 33.5381C22.4654 32.5417 21.7868 31.2721 21.5119 29.89C21.237 28.5079 21.3781 27.0753 21.9174 25.7734C22.4566 24.4715 23.3699 23.3587 24.5416 22.5758C25.7133 21.7929 27.0908 21.375 28.5 21.375C30.3879 21.3809 32.1967 22.1334 33.5316 23.4684C34.8666 24.8033 35.6191 26.6121 35.625 28.5ZM50.7656 18.7031V38.2969C50.7656 41.6038 49.452 44.7753 47.1136 47.1136C44.7753 49.452 41.6038 50.7656 38.2969 50.7656H18.7031C15.3962 50.7656 12.2247 49.452 9.88639 47.1136C7.54804 44.7753 6.23438 41.6038 6.23438 38.2969V18.7031C6.23438 15.3962 7.54804 12.2247 9.88639 9.88639C12.2247 7.54804 15.3962 6.23438 18.7031 6.23438H38.2969C41.6038 6.23438 44.7753 7.54804 47.1136 9.88639C49.452 12.2247 50.7656 15.3962 50.7656 18.7031ZM39.1875 28.5C39.1875 26.3862 38.5607 24.3199 37.3863 22.5623C36.212 20.8048 34.5428 19.4349 32.5899 18.626C30.637 17.8171 28.4881 17.6055 26.415 18.0179C24.3418 18.4302 22.4375 19.4481 20.9428 20.9428C19.4481 22.4375 18.4302 24.3418 18.0179 26.415C17.6055 28.4881 17.8171 30.637 18.626 32.5899C19.4349 34.5428 20.8048 36.212 22.5623 37.3863C24.3199 38.5607 26.3862 39.1875 28.5 39.1875C31.3345 39.1875 34.0529 38.0615 36.0572 36.0572C38.0615 34.0529 39.1875 31.3345 39.1875 28.5ZM42.75 16.9219C42.75 16.3934 42.5933 15.8768 42.2997 15.4375C42.0061 14.9981 41.5888 14.6556 41.1006 14.4534C40.6124 14.2512 40.0752 14.1982 39.5569 14.3013C39.0386 14.4044 38.5625 14.6589 38.1888 15.0326C37.8152 15.4062 37.5607 15.8823 37.4576 16.4006C37.3545 16.9189 37.4074 17.4561 37.6096 17.9444C37.8119 18.4326 38.1543 18.8499 38.5937 19.1435C39.0331 19.437 39.5497 19.5938 40.0781 19.5938C40.7868 19.5938 41.4664 19.3123 41.9674 18.8112C42.4685 18.3101 42.75 17.6305 42.75 16.9219Z" fill="#FAAF3D"/>
</svg>
</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer