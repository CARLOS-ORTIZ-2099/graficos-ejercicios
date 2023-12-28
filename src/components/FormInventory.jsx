import { useContext, useEffect, useState } from "react"
import { StateContext } from "../context/StateContext"


const initial = {product:'', price:'', category:'', quantity:'', id:''}

export const FormInventory = () => {
    const {add, editProduct, state} = useContext(StateContext)
    console.log(state);

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
    <div>
        <h2>FormInventory</h2>
        <form onSubmit={sendData}>
             <label htmlFor="categoty">category</label>
             <select value={fields.category} name="category" id="category" 
                onChange={({target}) => setFields({...fields,[target.name]: target.value })}
             >
                <option value="">elegir</option>
                <option value="famaceutico">famaceutico</option>
                <option value="limpieza">limpieza</option>
                <option value="aseo personal">aseo personal</option>
                <option value="hogar">hogar</option>
                <option value="textil">textil</option>
             </select>
             <input value={fields.product} type="text" placeholder="name product" name="product" 
                 onChange={({target}) => setFields({...fields,[target.name]: target.value })}
             />
             <input value={fields.price} type="number" placeholder="price"  name="price"
                 onChange={({target}) => setFields({...fields,[target.name]: target.value })}
             />
             <input value={fields.quantity} type="number" placeholder="quantity" name="quantity"
                 onChange={({target}) => setFields({...fields,[target.name]: target.value })}
             />
             <input type="submit" value={`${state.edit ? 'edit' : 'send'}`}/>
        </form>
    </div>
  )
}
