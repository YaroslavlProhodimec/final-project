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
    {id:v1(),image:nikeBlack,name:'Подкрадули',price:3000,quantity:0,qualification:'Бархатные'},
    {id:v1(),image:nikeYellow,name:'Бомбовые-вездеходки',price:3000,quantity:0,qualification:'Бархатные'},
    {id:v1(),image:nikePink,name:'Буксовки-шальные',price:3000,quantity:0,qualification:'Бархатные'},
    {id:v1(),image:balanseaga,name:'ХулиганкиНеМестные',price:3000,quantity:0,qualification:'Крышесноска'},
    {id:v1(),image:adidasBrown,name:'ВайШоЗаТяги',price:3000,quantity:0,qualification:'Бархатные'},
    {id:v1(),image:adidasGold,name:'GrandMother-style',price:3000,quantity:0,qualification:'Крышесноска'},
    {id:v1(),image:nikeGreen,name:'КтоТыВоин',price:3000,quantity:0,qualification:'Бархатные'},
    {id:v1(),image:adidasGray,name:'Воздуханки',price:3000,quantity:0,qualification:'Бархатные'},
    {id:v1(),image:adidasPink,name:'Розовая-LADY',price:3000,quantity:0,qualification:'Крышесноска'},
]
export const productsReducer = (state: ProductsType[] = initialState, action: ActionsType):any => {
    switch (action.type) {
        case 'APP/SET-PRODUCTS' :
            return state.map(el=>({...el}))
        case 'FILTER-PRODUCTS' :
            return state.filter(el=> el.qualification === action.qualification)
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
    qualification:string
}

export const getPropductsAC = (products:ProductsType) => ({type: 'APP/SET-PRODUCTS', products} as const)
export const filterPropductsAC = (qualification:string) => ({type: 'FILTER-PRODUCTS', qualification} as const)

export const fetchTodolistsTC =

export type getPropductsACType = ReturnType<typeof getPropductsAC>
export type filterPropductsACType = ReturnType<typeof filterPropductsAC>

type ActionsType =
    | getPropductsACType
    | filterPropductsACType
// [
//     {
//         "id": 0,
//         "image": "https://drive.google.com/file/d/1MqP9_5bplv6doQ1t_21XX1l3t5S7EsJV/view?usp=share_link",
//         "name": "ВайШоЗаТяги",
//         "price": 5500,
//         "quantity": 0,
//         "qualification": "Бархатные"
//     },
//     {
//         "id": 1,
//         "image": "https://drive.google.com/file/d/1lm4dGhefL83vA_ijppncP2k8_Wty_sct/view?usp=share_link",
//         "name": "GrandMother-style",
//         "price": 11500,
//         "quantity": 0,
//         "qualification": "Крышесноска"
//     },
//     {
//         "id": 2,
//         "image": "https://drive.google.com/file/d/10Va6Vgp4Ht6S-IAJimxntfDJizQFuHat/view?usp=share_link",
//         "name": "Воздуханки",
//         "price": 7500,
//         "quantity": 0,
//         "qualification": "Бархатные"
//     },
//     {
//         "id": 3,
//         "image": "https://drive.google.com/file/d/1UUVzCwNh08-JG7kQbncWXJ31VPjTwENy/view?usp=share_link",
//         "name": "Розовая-LADY",
//         "price": 17500,
//         "quantity": 0,
//         "qualification": "Бархатные"
//     },
//     {
//         "id": 4,
//         "image": "https://drive.google.com/file/d/1BPR9DlpVA3A1VWVaFu9WC4i-RfZjR8xh/view?usp=share_link",
//         "name": "ХулиганкиНеМестные",
//         "price": 97500,
//         "quantity": 0,
//         "qualification": "Крышесноска"
//     },
//     {
//         "id": 5,
//         "image": "https://drive.google.com/file/d/1IKZCbvH3eVa2Oow7eY8QVYGOPFJYBCo9/view?usp=share_link",
//         "name": "Подкрадули",
//         "price": 3600,
//         "quantity": 0,
//         "qualification": "Бархатные"
//     },
//     {
//         "id": 6,
//         "image": "https://drive.google.com/file/d/1U5eIn1WC72RwFxNRXUao3cJVe3sXK-ri/view?usp=share_link",
//         "name": "КтоТыВоин",
//         "price": 43600,
//         "quantity": 0,
//         "qualification": "Крышесноска"
//     },
//     {
//         "id": 7,
//         "image": "https://drive.google.com/file/d/1uk4bC0Ay8MtAeaU06WZkU1O5KaBtno0S/view?usp=share_link",
//         "name": "Розовая-LADY",
//         "price": 9900,
//         "quantity": 0,
//         "qualification": "Бархатные"
//     },
//     {
//         "id": 8,
//         "image": "https://drive.google.com/file/d/1PzHQVHyOMrPs1j-W4e3VjYEN0SmzYVSW/view?usp=share_link",
//         "name": "Бомбовые-вездеходки",
//         "price": 55500,
//         "quantity": 0,
//         "qualification": "Крышесноска"
//     },
//  ]