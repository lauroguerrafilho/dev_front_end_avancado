import { useContext } from "react";

import { DespesaContext} from "../Context/DespesaContext.jsx";

const ChangeDespesaCont = ({novaDesp}) => {
    const {despesaCont, setDespesaCont} = useContext(DespesaContext)

    return (
        <div>
            setDespesaCont({novaDesp})
        </div>
    )

}

export default ChangeDespesaCont