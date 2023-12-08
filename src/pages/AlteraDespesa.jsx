import {useNavigate} from "react-router-dom";

import Cabecalho from "../components/Cabecalho.jsx";
import styles from "./AlteraDespesa.module.css";
import BotaoVoltar from "../components/BotaoVoltar";
import {useState, useEffect} from "react";
import BotaoGeral from "../components/BotaoGeral.jsx";
import FormSucesso from "../components/FormSucesso.jsx";


import {useDespesaContex} from "../hooks/useDespesaContex.jsx";

import { useFetch } from "../hooks/useFetch.jsx";
const url = "http://localhost:3000/despesas"


const AlteraDespesa = () => {

    const { despesaCont, setDespesaCont } = useDespesaContex();

    const [tela, setTela] = useState("Tela1")
    const [habilitado, setHabilitado] = useState("")

    // Gerenciamento de dados
    const [id, setId] = useState(despesaCont[0])
    const [despesa, setDespesa] = useState(despesaCont[1])
    const [categoria, setCategoria] = useState(despesaCont[2])
    const [valor, setValor] = useState(despesaCont[3])
    const [dataDespesa, setDataDespesa] = useState(despesaCont[4])
    const [comentario, setComentario] = useState(despesaCont[5])

    const [botaoTexto, setBotaoTexto] = useState("INCLUIR")
    const [botaoDestino, setBotaoDestino] = useState("/")



    // custom hook

    const { data: items, httpConfig, loading, error } = useFetch(url);

    const navigate = useNavigate();

     const alterandoDespesa = async () => {

        const desp = {
            id,
            despesa,
            categoria,
            valor,
            dataDespesa,
            comentario,
        };

        console.log('despppp', desp)

        httpConfig(desp, "PUT");
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log ('despesa', despesa)

        var resultado = confirm("Confirma alteração da despesa?");

        if (resultado) {
            alterandoDespesa()
            setTela("Tela2")
            setHabilitado("disabled")
        }
    }


    const handleClick = (event) => {
        event.preventDefault();

        navigate("/")


    }


  //navigate(`${botaoDestino}`)



    return (
        <div>
            <Cabecalho titulo={"Alteração de Despesa"}/>
            {/* Criação do Formulário */}
            <form className={styles.formulario}   onSubmit={handleSubmit}>
                <div className={styles.campo}>
                    <label htmlFor="name">
                        <span>Despesa</span>
                        <input
                            type="text"
                            disabled={habilitado}
                            name="despesa"
                            value={despesa}
                            onChange={(e) => setDespesa(e.target.value)}
                        />
                    </label>
                     <br/>
                    <label>
                        <span>Categoria</span>
                        <select name="categoria"
                                disabled={habilitado}
                                onChange={(e) => setCategoria(e.target.value)}
                                value={categoria}>
                            <option>CASA VAR</option>
                            <option>CASA FIXO</option>
                            <option>PESSOAL VAR</option>
                            <option>PESSOAL FIXO</option>
                            <option>TRANSPORTE</option>
                            <option>VIAGEM</option>
                            <option>FILHOS</option>
                        </select>
                    </label>
                     <br/>
                </div>
                <div className={styles.campo}>
                    <label>
                        <span>Valor</span>
                        <input
                            type="text"
                            name="valor"
                            disabled={habilitado}
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}
                        />
                    </label>
                     <br/>
                    <label>
                        <span>Data</span>
                        <input
                            type="date"
                            name="dataDespesa"
                            disabled={habilitado}
                            value={dataDespesa}
                            onChange={(e) => setDataDespesa(e.target.value)}
                        />
                    </label>
                     <br/>
                </div>
                <div className={styles.campo1}>
                    <label>
                        <span>Comentário</span>
                        <input
                            type="text"
                            name="comentario"
                            disabled={habilitado}
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                        />
                    </label>
                     <br/>
                </div>
                {tela === "Tela1"  &&
                    <div className={styles.botao}>
                         <BotaoGeral botãotexto={'ALTERAR'} />
                         <BotaoVoltar  handleClick={handleClick}/>
                    </div> ||
                    <FormSucesso mensagem={"DESPESA ALTERADA COM SUCESSO"}
                                  />
                }
            </form>


        </div>
    )
}

export default AlteraDespesa