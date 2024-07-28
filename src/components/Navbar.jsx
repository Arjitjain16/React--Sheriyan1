

function Navbar() {
  return (
    <nav className="w-[15%] bg-zinc-100 h-screen py-7 px-10 rounded">
        <a className=" border border-blue-300 px-4 py-2 rounded-sm"  href="/">Add to Product</a>
        <div className="mt-5">
          <h1 className="mb-3">Category Filter</h1>
          <div className="flex flex-row items-center gap-1 mb-3">
            <span className="bg-red-500 w-3 h-3 rounded-full">.</span>
            <h3>cat1</h3>
          </div>
          <div className="flex flex-row items-center gap-1 mb-3">
            <span className="bg-green-500 w-3 h-3 rounded-full">.</span>
            <h3>cat1</h3>
          </div>
          <div className="flex flex-row items-center gap-1 mb-3">
            <span className="bg-blue-500 w-3 h-3 rounded-full">.</span>
            <h3>cat1</h3>
          </div>
        </div>
      </nav>
  )
}

export default Navbar