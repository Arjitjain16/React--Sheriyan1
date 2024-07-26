
const App = () => {
  return (
    <div className="flex">
      <nav className="w-[15%] bg-zinc-100 h-[100vh] py-7 px-10 rounded">
        <a className=" border border-blue-300 px-4 py-2"  href="/">Add to Product</a>
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
      <div className="w-[85%] h-[100vh]  flex flex-wrap py-20 px-6">
        <div className="card h-64 w-56 border shadow mr-4 px-10 py-5 flex flex-col gap-5 rounded-md">
          <div className="h-40 w-[18%] hover:scale-110" style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D')`
          }}></div>
          <h1 className="hover:text-blue-200">Lorem ipsum dolor sit am</h1>
        </div>


      </div>

    </div>
  )
}

export default App