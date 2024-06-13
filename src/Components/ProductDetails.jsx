import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";


const ProductDetails = ({addtoCart,cart}) => {
  const { id } = useParams();
 

  
  const [single, setSingle] = useState("");


  // useEffect

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setSingle(data);
      
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Navbar cart={cart}></Navbar>

      <div class="py-6 pt-[7rem]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div x-data="{ image: 1 }" x-cloak>
                <div class="h-64 md:h-80 rounded-lg border mb-4">
                  <div
                    x-show="image === 1"
                    class="h-64 md:h-80 rounded-lg  mb-4 flex items-center justify-center"
                  >
                    {/* image */}

                    <img
                      src={single.image}
                      alt="img"
                      className="h-full   object-center group-hover:opacity-75"
                    />
                  </div>
                </div>

                <div class="flex -mx-2 mb-4">
                  <template x-for="i in 4">
                    <div class="flex-1 px-2"></div>
                  </template>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {single.title}
              </h2>
              <p class="text-gray-500 text-sm">
                By{" "}
                <a href="/" class="text-indigo-600 hover:underline">
                  ABC Company
                </a>
              </p>

              <div class="flex items-center space-x-4 my-4">
                <div>
                  <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span class="text-indigo-400 mr-1 mt-1">$</span>
                    <span class="font-bold text-indigo-600 text-3xl">
                      {single.price}
                    </span>
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-green-500 text-xl font-semibold">Save 12%</p>
                  <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                </div>
              </div>

              <p class="text-gray-500">{single.description}</p>

              <div class="flex py-4 space-x-4">
                <button
                  type="button"
                  class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
      onClick={()=> {
        addtoCart(single);
        // console.log(single);
      }}   >
                  Add to Cart
                </button>
                <button
                  type="button"
                  class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
