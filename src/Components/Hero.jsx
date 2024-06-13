import React from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'



const Hero = () => {

   //Gsap
   useGSAP(() => {
    gsap.from('h1 , p' , {
      y:-20,
      duration:1,
      delay:1,
      opacity:0
    });
});

  return (
    <>
      <div className="h-[94vh] w-full p-10 flex justify-center items-center bg-gradient-to-b from-rose-200 via-pink-100 to-cyan-200 py-20">
        <div className="block h-[20rem] pt-20 justify-center items-center text-center w-full">
          <span className="text-captalize font-thin text-3xl ">Hot Trend</span>
          <h1 className="font-extrabold  sm:text-5xl md:text-5xl  lg:text-6xl">
            Fresh Fashion Finds <br></br> New Collection
          </h1>
          <span className="underline underline-offset-8 capitalize">
            <Link to='/CategoryPage'>Discover More</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
