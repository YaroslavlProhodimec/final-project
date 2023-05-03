import {v1} from "uuid";
import nikeBlack from '../image/nikeBlack.png';
import nikeYellow from '../image/nikeYellow.png';
import nikePink from '../image/nikePink.png';
import balanseaga from '../image/balanseaga.png';
import adidasBrown from '../image/adidasBrown.png';
import adidasGold from '../image/adidasGold.png';
import adidasGray from '../image/adidasGray.png';
import adidasPink from '../image/adidasPink.png';
import nikeGreen from '../image/nikeGreen.png';

const initialState: ProductsType[] = [
    {id:v1(),image:nikeBlack,name:'nikeBlack',price:3000,quantity:0},
    {id:v1(),image:nikeYellow,name:'nikeYellow',price:3000,quantity:0},
    {id:v1(),image:nikePink,name:'nikePink',price:3000,quantity:0},
    {id:v1(),image:balanseaga,name:'balanseaga',price:3000,quantity:0},
    {id:v1(),image:adidasBrown,name:'adidasBrown',price:3000,quantity:0},
    {id:v1(),image:adidasGold,name:'adidasGold',price:3000,quantity:0},
    {id:v1(),image:nikeGreen,name:'nikeGreen',price:3000,quantity:0},
    {id:v1(),image:adidasGray,name:'adidasGray',price:3000,quantity:0},
    {id:v1(),image:adidasPink,name:'adidasPink',price:3000,quantity:0},
]
export const productsReducer = (state: ProductsType[] = initialState, action: ActionsType): ProductsType[] => {
    switch (action.type) {
        case 'APP/SET-PRODUCTS' :
            return state.map(el=>({...el}))
        default:
            return [ ...state]
    }
}

export type ProductsType = {
    id: string
    image?:any
    name:string
    price:number
    quantity:number
}

export const getPropductsAC = (products:ProductsType) => ({type: 'APP/SET-PRODUCTS', products} as const)

export type getPropductsACType = ReturnType<typeof getPropductsAC>

type ActionsType =
    | getPropductsACType
