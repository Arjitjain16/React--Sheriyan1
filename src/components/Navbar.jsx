import { useContext } from "react";
import { ProductContext } from "./utils/Context";
import { Link } from "react-router-dom"; // Add this import

function Navbar() {
  const [products] = useContext(ProductContext);

  // Handle the case when products is null or undefined
  const distinct_category = products ? [...new Set(products.map((product) => product.category))] : [];

  const color = () =>{
    return `rgba(${(Math.random()* 255).toFixed()}, ${(Math.random()* 255).toFixed()},${(Math.random()* 255).toFixed()},${(Math.random()* 255).toFixed()})`
  }

  return (
    <nav className="w-[15%] bg-zinc-100 h-screen py-7 px-10 rounded">
      <a className="border border-blue-300 px-4 py-2 rounded-sm shadow" href="/">
        Add to Product
      </a>
      <div className="mt-5">
        <h1 className="mb-3 text-2xl">Category Filter</h1>
        {distinct_category.map((c, i) => (
          <Link key={i} to={`/?category=${c}`}> 
            <div className="flex flex-row items-center gap-2 mb-3">
              <span style={{
                backgroundColor : color()
              }} className="bg-red-500 w-3 h-3 rounded-full"></span>
              <h3>{c}</h3>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;