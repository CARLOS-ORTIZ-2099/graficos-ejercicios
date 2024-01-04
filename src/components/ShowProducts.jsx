import { useContext } from "react"
import { StateContext } from "../context/StateContext"


export const ShowProducts = () => {
const {state:{products}, deleteProduct, editMode} = useContext(StateContext)
 //console.log(edit);

  return (
    <div>
        {
            products.map((product) => (
                <div key={product.id}>
                    <h1>name: {product.product}</h1>
                    <h2>category: {product.category}</h2>
                    <h3>price: {product.price}</h3>
                    <h3>quantity: {product.quantity}</h3>
                    <button onClick={ () => deleteProduct(product.id, product.quantity, product.category) }>delete product</button>
                    <button onClick={() => editMode(product.id)}>edit</button>
                </div>
            ))
        }
        
    </div>
  )
}


