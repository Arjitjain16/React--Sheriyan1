import { useEffect, useState } from "react"
import axios from "./utils/axios"
import { Link, useParams } from "react-router-dom"
import Laoding from "./utils/Laoding"

const Details = () => {
  const [product, setproduct] = useState(null)
  const {id} = useParams()
  const geetingsingleproduct = async () => {
    try {
     const {data} = await axios.get(`/products/${id}`)
      setproduct(data)
    } catch (error) {
      console.log( error);
    } 
  }
  useEffect(() => {
    geetingsingleproduct()
  },[])
  return product? (
    <div className="h-[100vh] flex gap-14 w-[70%]  m-auto  justify-center py-[10%] ">
     <div>
      <img className="w-[100%] h-[90%]" src={`${product.image}`} alt="" />
     </div>
     <div className="content w-[35%] h-[90%] flex flex-col gap-4">

        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-300">{product.category}</h3>
        <h3 className="text-zinc-300">{product.price}</h3>
        <h3>{product.description}</h3>
        <div className="flex gap-4 mt-3">
         <Link className=" border border-blue-300 px-3 py-1 text-blue-400 rounded-sm">Edit</Link>
         <Link className=" border border-red-300 text-red-600 px-3 py-1 rounded-sm">Delete</Link>
        </div>

     </div>
     
    </div>
  ) : (
    <Laoding />
  )
}

export default Details