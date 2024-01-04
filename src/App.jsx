
import './App.css'
import { Chart } from './components/Chart'
import { FormInventory } from './components/FormInventory'
import { ShowProducts } from './components/ShowProducts'



function App() {
 

  return (
    <>
    
        <h1>inventory</h1>
        <Chart/>
    
        <FormInventory/>
       
        <ShowProducts/>
    </>
  )
}

export default App
