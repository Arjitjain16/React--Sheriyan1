import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { ProductContext } from "./utils/Context";
import Loading from "./utils/Laoding";

function Home() {
  const [products] = useContext(ProductContext);

  if (!products) return <Loading />;

  return (
    <div className="h-screen w-screen flex">
      <Navbar />
      <div className="w-[85%] h-[100vh] flex flex-wrap gap-4 py-20 px-6">
        {products.map((product,i) => (
          <Link
            to= {`/detail/${product.id}`}
            className="card h-72 w-60 border shadow mr-4 px-10 py-5 flex items-center flex-col gap-5 rounded-md"
            key={i}
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
  );
}

export default Home;