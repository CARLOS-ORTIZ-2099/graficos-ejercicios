import { useContext, useEffect, useState } from "react"
import { StateContext } from "../context/StateContext"
/* import { Test } from "./Test" */


const initial = {product:'', price:'', category:'', quantity:'', id:''}

export const FormInventory = () => {
    const {add, editProduct, state} = useContext(StateContext)
   // console.log(state);

    const [fields, setFields]  = useState(initial)


useEffect(() => {
    setFields(state.productId || initial)
}, [state])

const sendData = (e) => {
    e.preventDefault()
    if(state.edit){
        alert('editando...')
        editProduct({...fields})
        return
    }
    add({...fields, id: window.crypto.randomUUID()})
    setFields(initial)

} 

  return (
    <div className="border border-light-subtle p-3 m-5" >
       {/*  <h2>FormInventory</h2> */}
        <form className="row" onSubmit={sendData} >
            <div className="col-12 ">
                <label htmlFor="category">category</label>
                <select className="form-select form-select-lg mb-3" disabled = {state.edit} value={fields.category} name="category" id="category" 
                    onChange={({target}) => setFields({...fields,[target.name]: target.value })}
                >
                    <option value="">elegir</option>
                    <option value="farmaceutico">famaceutico</option>
                    <option value="limpieza">limpieza</option>
                    <option value="aseo personal">aseo personal</option>
                    <option value="hogar">hogar</option>
                    <option value="textil">textil</option>
                </select>
            </div>

            <div className="col-12 col-md-4 mt-3">
                <input className="form-control" value={fields.product} type="text" placeholder="name product" name="product" 
                    onChange={({target}) => setFields({...fields,[target.name]: target.value })}
                />
            </div>

             <div className="col-12 col-md-4 mt-3">
                <input className="form-control" value={fields.price} type="number" placeholder="price"  name="price"
                    onChange={({target}) => setFields({...fields,[target.name]: target.value })}
                />
             </div>

             <div className="col-12 col-md-4 mt-3">
                <input className="form-control" value={fields.quantity} type="number" placeholder="quantity" name="quantity"
                    onChange={({target}) => setFields({...fields,[target.name]: +target.value })}
                />
             </div>
             
             <div className="col-12 mt-4">
                <input className={`${state.edit ? 'btn btn-warning' : 'btn btn-primary'} btn-lg rounded-4 d-block mx-auto`} type="submit" value={`${state.edit ? 'edit' : 'send'}`}/>
             </div>
        </form>
      
    </div>
  )
}
