import React from "react";
import logo from "../images/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { RiLoginCircleLine } from "react-icons/ri";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

const Navbar = ({cart}) => {

//    //Gsap
//    useGSAP(() => {
//     gsap.from('header' , {
//       y:-20,
//       duration:1,
//       delay:1,
//       opacity:0
//     });
// });

  const [isActive, setIsActive] = useState(false);
 
   // event listener
   useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

//  console.log(cart.length)

  return (
    <>
     <header  className={`${isActive ? "bg-white  shadow-md" : "bg-none py-6"
        } fixed w-full z-10 lg:px-8 transition-all`}>
     <div className="w-full h-[5px]  flex justify-between p-[2rem] items-center">
        <div className="gap-2 flex justify-center items-center">
        <a href="/">
          <img className="w-10" src={logo} alt="logo" />
          <h2 className="font-bold">ShopEasy</h2>
          </a>
        </div>

        <div className="gap-3 flex justify-between items-center">
         <div className="flex w-[3rem] justify-center items-center">
         <Link to='Products/Cart'><CiShoppingCart fontSize="2rem"/></Link>
         <p className="bg-red-300 p-2 font-bold w-12 rounded-full">{cart.length}</p>
         </div>
          <Link to='/Login'><h2 className="font-light">Login</h2></Link>
          <RiLoginCircleLine fontSize="1.2rem" />
        </div>
      </div>
     </header>
    </>
  );
};

export default Navbar;
