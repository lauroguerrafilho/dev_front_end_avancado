import { createContext, useState} from "react";

export const DespesaContext = createContext();

export const DespesaContextProvider = ({children}) => {

    const [despesaCont, setDespesaCont] = useState(["ID", "DESPESA", "CATEGORIA", "VALOR", "DATA", "COMENTARIO"])

    return (
        <DespesaContext.Provider value={{despesaCont, setDespesaCont}}>
            {children}
        </DespesaContext.Provider>
    );
};