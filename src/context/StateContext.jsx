/* eslint-disable react/prop-types */

import { createContext, useReducer } from "react";
import { initialState, reducer } from "./inventoryReducer";
export const StateContext = createContext()




export const StateContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);

    const add = (data) => {
        dispatch({type: 'ADD', payload:data})
    }

    const deleteProduct = (id, quantity, category) => {
        dispatch({type: 'DELETE', payload: {id, quantity, category}})
    }

    const editMode = (id) => {
        dispatch({type:'EDITMODE',payload: id})
    }

    const editProduct = (data) => {
        dispatch({type:'EDITPRODUCT', payload : data})
    }

    return <StateContext.Provider value={
        {add, state, deleteProduct, editMode, editProduct} }>
                {children}
            </StateContext.Provider>
}




