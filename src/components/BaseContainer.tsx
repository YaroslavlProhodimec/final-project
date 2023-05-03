import React, {useState} from 'react';
import {Header} from "./header/Header";
import {useAppDispatch, useAppSelector} from "../store/store";
import {Container} from "@mui/material";
import {Main} from "./main/Main";
import s from "./main/Main.module.css";
import Basket from "./main/basket/Basket";
import {addPropductsAC, removePropductsAC} from "../store/basket-reducer";
import {Snack} from "./footer/Snack";

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
    return (
        <>
            <Header order={basket.length} openBasket={() => setOpen(true)}/>
            <Container sx={{mt: '1rem',}}>
                <main className={s.mainContainer}>
                    {products.map(el =>
                        <Main setAlert={() => setAlert(true)} addBasket={addBasket} key={el.id} {...el}/>
                    )}
                </main>
            </Container>
            <Basket removeBasket={removeBasket} basket={basket} open={open} closeCart={() => setOpen(false)}/>
            <Snack onClose={() => setAlert(false)} isOpen={alert}/>

        </>
    );
};

export default BaseContainer;