
/* import './App.css' */
import { Chart } from './components/Chart'
import { FormInventory } from './components/FormInventory'
import { ShowProducts } from './components/ShowProducts'



function App() {
 

  return (
    <div className='container'>
    
        <h1 className='text-capitalize text-center m-5'>inventory</h1>
        <Chart/>
    
        <FormInventory/>
       
        <ShowProducts/>
    </div>
  )
}

export default App
