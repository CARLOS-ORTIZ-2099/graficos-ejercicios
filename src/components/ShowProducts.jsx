import { useContext } from "react"
import { StateContext } from "../context/StateContext"


export const ShowProducts = () => {
const {state:{products}, deleteProduct, editMode} = useContext(StateContext)
 //console.log(edit);

  return (
    <div className="border border-info-subtle p-5  
        text-capitalize row ">
        {
            products.map((product) => (
                <div className="border border-tertiary p-4 card mt-4 col-12 col-md-4" key={product.id}>
                   <div className="card-body">
                        <h1 className="text-truncate">name: {product.product}</h1>
                        <h2>category: {product.category}</h2>
                        <h3>price: {product.price}</h3>
                        <h3>quantity: {product.quantity}</h3>
                        <div className="d-flex justify-content-around mt-3">
                            <button className="btn btn-danger fs-5 " onClick={ () => deleteProduct(product.id, product.quantity, product.category) }>delete product</button>
                            <button className="btn btn-info fs-5" onClick={() => editMode(product.id)}>edit</button>
                        </div>
                   </div>
                </div>
            ))
        }
        
    </div>
  )
}


