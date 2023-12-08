// CSS
import styles from "../pages/ExcluiDespesa.module.css"

import {useNavigate} from 'react-router-dom'

import {useState, useEffect} from "react";

import {useDespesaContex} from "../hooks/useDespesaContex.jsx";

//import {useLocation} from "react-router-dom";

import { useFetch } from "../hooks/useFetch.jsx";
const url = "http://localhost:3000/despesas"


// COMPONENTES
import Cabecalho from "../components/Cabecalho.jsx";
import FormConfirma from "../components/FormConfirma.jsx";
import FormSucesso from "../components/FormSucesso.jsx";


const ExcluiDespesa = () => {

    const { despesaCont, setDespesaCont } = useDespesaContex();

    const [tela, setTela] = useState("Tela1")


    // Gerenciamento de dados
    const [id, setId] = useState(despesaCont[0])
    const [despesa, setDespesa] = useState(despesaCont[1])
    const [categoria, setCategoria] = useState(despesaCont[2])
    const [valor, setValor] = useState(despesaCont[3])
    const [dataDespesa, setDataDespesa] = useState(despesaCont[4])
    const [comentario, setComentario] = useState(despesaCont[5])

    const [confirma, setConfirma] = useState("NÃO")

    // custom hook
    const { data: items, httpConfig, loading, error } = useFetch(url);

    const navigate = useNavigate()

    //const { state } = useLocation();
   //const despesaRecebida = state?.despesa

   const despesaExcluida = () => {
         setTela("Tela2")



   }
   const handleSubmit = (event) => {
       event.preventDefault();

       console.log ('oi', confirma)

       const desp = {
            id,
        };

        console.log('desp', desp)

        httpConfig(desp, "DELETE");

        despesaExcluida()

   }

    const handleClick = (event) => {
       event.preventDefault();

       console.log ('oi', confirma)

       navigate("/")
   }




    return (
        <div>
            <Cabecalho titulo={"Exclusão de Despesa"}/>
            <br/>
             <form onSubmit={handleSubmit}>
                <div className={styles.myDetalhe}>
                     <table>
                        <th>Id</th>
                        <th>Despesa</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                        <th>&nbsp;Data&nbsp;</th>
                        <th>Comentário</th>
                        <tbody>
                            <tr>
                                <td>
                                   {id}
                               </td>
                               <td>
                                   {despesa}
                               </td>
                               <td>
                                   {categoria}
                               </td>
                               <td>
                                   {valor}
                               </td>
                               <td>
                                   {dataDespesa}
                               </td>
                               <td>
                                   {comentario}
                               </td>
                            </tr>
                        </tbody>
                      </table>
                </div>
                <div>
                    <br/><br/><br/>
                    {tela === "Tela1"  &&
                        <FormConfirma onSubmit={handleSubmit}
                                  titulo={"Confirmar Exclusao"}
                                   operacao={"Confirma exclusão da despesa?"}
                                   confirma={confirma}
                                   setConfirma={setConfirma}
                                  /> ||
                        <FormSucesso mensagem={"DESPESA EXCLUÍDA COM SUCESSO"}
                                  />
                    }

                 </div>
             </form>
        </div>
    )
}

export default ExcluiDespesa