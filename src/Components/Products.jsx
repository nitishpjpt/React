import React from "react";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'





const Product = () => {

  //Gsap
  useGSAP(() => {
         gsap.from('h1 , p ,#box' , {
           y:-20,
           duration:1,
           delay:1,
           opacity:0
         });
  });

  const { products } = useContext(ProductContext);

 const sort = products.filter((item) => {
    return item.category === "men's clothing" || item.category === "jewelery" 
 });

 
  return (
    <>
      <h1 className="font-bold text-3xl pt-5 flex justify-center items-center">
       Explore Our Products
      </h1>

      {/* map function to map all json data */}

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
  
          <div id="box" className="mt-6  grid p-6 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {sort.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 border border-black aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-80">
                 
            
                <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full  object-center lg:h-full lg:w-full p-10"
                  />
             
                
                </div>
                <p className="text-center mt-1 text-sm text-gray-500">
                  {product.category}
                </p>
                
             
               
               
                <div className="mt-4 flex justify-between">
                  <div>
                    <Link to={`/ProductPage/${product.id}`}>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    </Link>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
