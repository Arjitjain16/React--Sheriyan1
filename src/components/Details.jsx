import { Link } from "react-router-dom"

const Details = () => {
  return (
    <div className="h-[100vh] flex gap-14 w-[70%]  m-auto  justify-center py-[10%] ">
     <div className="">
      <img className="w-[100%] h-[90%]" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
     </div>
     <div className="content w-[35%] h-[90%] flex flex-col gap-4">

        <h1 className="text-4xl">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h3 className="text-zinc-300">men's clothing</h3>
        <h3 className="text-zinc-300">109.95</h3>
        <h3>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded</h3>
        <div className="flex gap-4 mt-3">
        <Link className=" border border-blue-300 px-3 py-1 text-blue-400 rounded-sm">Edit</Link>
        <Link className=" border border-red-300 text-red-600 px-3 py-1 rounded-sm">Delete</Link>
        </div>

     </div>
     
    </div>
  )
}

export default Details