

export const initialState = { products : [], edit : false, productId : null}

export const reducer = (state , action) => {
    console.log(state);
    console.log(action);
    switch(action.type){
        case 'ADD' : {
            return {...state, products: [...state.products, action.payload]}
        }
        case 'EDITMODE' : {
            return {...state, edit: true, productId : state.products.find((product) => product.id == action.payload)}
        }
        case 'EDITPRODUCT' : {
            console.log(action.payload);
            const newArray = state.products.map((product) => product.id === action.payload.id ? {...product,...action.payload} : product)
            console.log(newArray);
            return {...state,products: newArray ,edit: false, productId:null}
        }
        case 'DELETE' : {
            return {...state , edit: false, productId:null,products : state.products.filter((product) => product.id !== action.payload)}
        }
    }
}
