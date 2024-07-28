import { createContext, useEffect, useState } from "react"
import axios from "./axios"


export const ProductContext = createContext()
const Context = ({children}) => {
    const [product, setproduct] = useState(null)

    const getproducts = async () =>{
        try {
            const {data} = await axios("/products")
            setproduct(data)
        } catch (error) {
            console.log(error)
        }

    }
    
    useEffect(()=>{
        getproducts()
    })

   return (
    <ProductContext.Provider value={[product, setproduct]}>
        <div>{children}</div>
    </ProductContext.Provider>
    )
}

export default Context