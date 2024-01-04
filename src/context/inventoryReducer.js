import { categories } from "../helpers/categories";



export const initialState = { products : [], edit : false, productId : null, 
   quantity :  categories }

export const reducer = (state , action) => {
    console.log(state);
    console.log(action);
    switch(action.type){
        case 'ADD' : {
            console.log(action.payload.category, action.payload.quantity);
            const result = state.quantity.map(ele => ele.category === action.payload.category ?
                 {...ele, quantity : ele.quantity + action.payload.quantity} : ele )
          
            return {...state, products: [...state.products, action.payload],
                    quantity : result }
        }
        case 'EDITMODE' : {
            return {...state, edit: true, productId : state.products.find((product) => product.id == action.payload)}
        }
        case 'EDITPRODUCT' : {
            console.log(action.payload);
            console.log(action.payload.quantity);
            console.log(state.productId.quantity);

            const newArray = state.products.map((product) => product.id === action.payload.id ? {...product,...action.payload} : product)
            
            if(state.productId.quantity > action.payload.quantity ){
                console.log('reducir');
                let res = state.productId.quantity - action.payload.quantity
                console.log(res);

                const subtract = state.quantity.map(ele => ele.category === action.payload.category ?
                   {...ele, quantity : ele.quantity - res} : ele )

              
                // console.log(newArray);
                return {...state,products: newArray ,edit: false, productId:null, quantity: subtract}
            }
            else{
                console.log('aumentar');
                let res = action.payload.quantity - state.productId.quantity 
                console.log(res);
                const sum = state.quantity.map(ele => ele.category === action.payload.category ? {...ele, quantity : ele.quantity + res} : ele)

                return {...state,products: newArray ,edit: false, productId:null, quantity: sum}
            }
        }
        case 'DELETE' : {
            console.log(action.payload);
            const subtract = state.quantity.map(ele => ele.category === action.payload.category ?
                 {...ele, quantity : ele.quantity - action.payload.quantity} : ele)    

            return {...state , edit: false, productId:null, products : state.products.filter((product) => product.id !== action.payload.id), quantity : subtract}
        }
    }
}
