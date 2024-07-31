import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "./utils/Context";
import Loading from "./utils/Laoding";
import axios from "./utils/axios";

function Home() {
  const [Products] = useContext(ProductContext);
  const {search} = useLocation()
  console.log(search);
  const category = decodeURIComponent(search.split("=")[1])
   
  const [FilteredProduct, setFilteredProduct] = useState(null)
  
  

  const getcategoryproduct = async () =>{
    try {
      const {data} = await axios.get(`/products/category/${category}`)
      setFilteredProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if (!FilteredProduct) setFilteredProduct(Products);
    if (category != "undefined") getcategoryproduct()
  }, [category, Products])

   
  
  return Products? (
    <div className="h-screen w-screen flex">
      <Navbar />
      <div className="w-[85%] h-[100vh] flex flex-wrap gap-4 py-20 px-6">
        {FilteredProduct && FilteredProduct.map((product) => (
          <Link
            key={product.id}
            to= {`/detail/${product.id}`}
            className="card h-72 w-60 border shadow mr-4 px-10 py-5 flex items-center flex-col gap-5 rounded-md"
            
          >
            <div
              className="h-[90%] w-full hover:scale-110 bg-contain mr-3 bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${product.image})`,
              }}
              alt={product.name}
            />
            <h1 className="hover:text-blue-200">{product.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  ) :(
    <Loading />
  );
}

export default Home;