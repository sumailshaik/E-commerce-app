import { createContext, useEffect, useReducer, useState } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    openModal: false,
    isSignup: false,
    cart: [],
    count: 0,
    user:JSON.parse(localStorage.getItem("user")) || null,
}

export const DataLayer = createContext(INITIAL_STATE);

export const DataLayerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user));
    },[state.user])
    
    return (
        <DataLayer.Provider
          value={{
            openModal: state.openModal,
            isSignup: state.isSignup,
            cart: state.cart,
            count: state.count,
            user: state.user,
            dispatch,
          }}
        >
          {children}
        </DataLayer.Provider>
      );
};