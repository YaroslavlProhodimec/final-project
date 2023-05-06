import {appAPI} from "../api/api-products";



const initialState: any = [

]
export const productsReducer = (state: any = initialState, action: ActionsType):any => {
    switch (action.type) {
        case 'APP/SET-PRODUCTS' :
            console.log(action.products,'reducer')
            return action.products

        case 'FILTER-PRODUCTS' :
            return state.filter((el: { qualification: string; })=> el.qualification === action.qualification)
        default:
            return [ ...state]
    }
}

export type ProductsType = {
    id: string
    image?:any
    name:string
    price:number
    qualification:string
    quantity:number
}

export const getPropductsAC = (products:any) => ({type: 'APP/SET-PRODUCTS', products} as const)
export const filterPropductsAC = (qualification:string) => ({type: 'FILTER-PRODUCTS', qualification} as const)

export const fetchProductsTC = () => (dispatch:any) => {
    return  appAPI.app().then((res)=> {
        console.log(res.data[0],'axios')
            dispatch(getPropductsAC(res.data))
        }
    )

}

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
//         "name": "Бешенки",
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
//     }
// ]