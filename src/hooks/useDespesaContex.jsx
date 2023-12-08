import {useContext} from "react";
import {DespesaContext} from "../Context/DespesaContext.jsx";

export const useDespesaContex = () => {

    const context = useContext(DespesaContext)

    if (!context) {
        console.log("Contexto não encontrado")
    }
    return context;
}
