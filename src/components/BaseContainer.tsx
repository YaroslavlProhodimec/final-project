import React, {useEffect, useState} from 'react';
import {Header} from "./header/Header";
import {useAppDispatch, useAppSelector} from "../store/store";
import {Container} from "@mui/material";
import {Main} from "./main/Main";
import s from "./Base.module.css";
import Basket from "./main/basket/Basket";
import {addPropductsAC, removePropductsAC} from "../store/basket-reducer";
import {Snack} from "./footer/Snack";
import {useSearchParams} from "react-router-dom";
import {SuperSelect} from "./main/select/Select";
import Box from '@mui/material/Box';
import {fetchProductsTC} from "../store/app-reducer";

const BaseContainer = () => {
    const products = useAppSelector(state => state.products)
    const basket = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch()
    const removeBasket = (id: string) => {
        dispatch(removePropductsAC(id))
    }
    const addBasket = (id: string, name: string, price: number, quantity: number) => {
        dispatch(addPropductsAC(id, name, price, quantity))
    }
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()
    const postQwery = searchParams.get('post') || '';
    console.log(products,'то что надо дальше мапить')
     useEffect(() => {
         dispatch(fetchProductsTC())
    }, [])
    return (
        <div className={s.baseContainer} >
            <Header postQwery={postQwery} searchParams={searchParams} setSearchParams={setSearchParams} order={basket.length}
                    openBasket={() => setOpen(true)}/>

            <Container sx={{mt: '1rem',}}>
                <SuperSelect className={s.select} />

                <main className={s.mainContainer}>

                    {
                        products.filter((el: { name: string; }) => el.name.toLowerCase().includes(postQwery.toLowerCase()))
                            .map((el:any) =>
                                <Box key={el.id} sx={{m:'6px'}}>

                                <Main setAlert={() => setAlert(true)} addBasket={addBasket}  {...el}/>
                                </Box>
                            )}
                </main>
            </Container>
            <Basket removeBasket={removeBasket} basket={basket} open={open} closeCart={() => setOpen(false)}/>
            <Snack onClose={() => setAlert(false)} isOpen={alert}/>

        </div>
    );
};

export default BaseContainer;