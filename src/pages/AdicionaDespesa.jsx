import {useNavigate} from "react-router-dom";

import Cabecalho from "../components/Cabecalho.jsx";
import styles from "./AdicionaDespesa.module.css";
import BotaoVoltar from "../components/BotaoVoltar";
import BotaoGeral from "../components/BotaoGeral.jsx";
import FormSucesso from "../components/FormSucesso.jsx";

import { useState, useEffect } from "react";

import {useFetch} from "../hooks/useFetch.jsx";
const url = "http://localhost:3000/despesas"


const AdicionaDespesa = () => {

    // Gerenciamento de dados
    const [desp, setDesp] = useState([])
    const {data: items, httpConfig, loading, error} = useFetch(url)

    const [despesa, setDespesa] = useState("")
    const [categoria, setCategoria] = useState("CASA VARIAVEL")
    const [valor, setValor] = useState("")
    const [dataDespesa, setDataDespesa] = useState("")
    const [comentario, setComentario] = useState("")

    const [botaoTexto, setBotaoTexto] = useState("INCLUIR")
    const [botaoDestino, setBotaoDestino] = useState("/")

    const navigate = useNavigate();

    const [tela, setTela] = useState("Tela1")
    const [habilitado, setHabilitado] = useState("")

    const dataSistema = new Date()

    const dia = String(dataSistema.getDate()).padStart(2, '0')
    const mes = String(dataSistema.getMonth() + 1).padStart(2, '0')
    const ano = String(dataSistema.getFullYear())
    const diaMesAno = `${dia}/${mes}/${ano}`
    const diaMesAno1 = `${ano}/${mes}/${dia}`

    //setDataDespesa(Date(diaMesAno1))
    const adicionandoDespesas = async () => {

        const desp = {
            despesa,
            categoria,
            valor,
            dataDespesa,
            comentario,
        };

        httpConfig(desp, "POST");

         //setDespesa("")
         //setCategoria("")
         //setValor("")
         //setDataDespesa("")
         //setComentario("")

    }
    const handleSubmit = (event) => {
        event.preventDefault();

         if (despesa === '') {
             alert("Escreva o nome da despesa!");
             } else if (isNaN(valor)) {
              alert("Valor precisa ser númerico!");
             } else if (valor <= 0){
                 alert("Valor precisa ser maior do que zero!");
             } else if (dataDespesa ==='') {
            alert("A data precisa ser preenchida!");
        } else {
                  var resultado = confirm("Confirma inclusão da despesa?");
                  if (resultado) {
                      adicionandoDespesas()
                      setTela("Tela2")
                      setHabilitado("disabled")
                  }
         }



        //navigate(`${botaoDestino}`)


    }
    const handleClick = (event) => {
        event.preventDefault();
        navigate("/")
    }


    return (
        <div>
            <Cabecalho titulo={"Inclusão de Despesa"}/>
            {/* Criação do Formulário */}
            <form className={styles.formulario} onSubmit={handleSubmit}>
                    <div className={styles.campo}>
                        <label htmlFor="name">
                            <span>Despesa</span>
                            <input
                                type="text"
                                name="despesa"
                                disabled={habilitado}
                                value={despesa}
                                placeholder="INSIRA A DESPESA"
                                onChange={(e) => setDespesa(e.target.value)}
                            />
                        </label>
                        <br/>
                        <label>
                        <span>Valor</span>
                        <input
                            type="text"
                            name="valor"
                            value={valor}
                            disabled={habilitado}
                            placeholder="INSIRA O VALOR"
                            onChange={(e) => setValor(e.target.value)}
                        />
                    </label>
                        <br/>
                </div>

                <div className={styles.campo}>
                     <label>
                            <span>Categoria</span>
                            <select name="categoria"
                                    onChange={(e) => setCategoria(e.target.value)}
                                     disabled={habilitado}
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
                    <label>
                        <span>Data</span>
                        <input
                            type="date"
                            name="dataDespesa"
                            value={dataDespesa}
                             disabled={habilitado}
                            placeholder="INSIRA A DATA DA DESPESA"
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
                            value={comentario}
                             disabled={habilitado}
                            placeholder="INSIRA UM COMENTÁRIO"
                            onChange={(e) => setComentario(e.target.value)}
                        />
                    </label>
                </div>
                <br/>
                {tela === "Tela1" &&
                    <div className={styles.botao}>
                      <BotaoGeral />
                      <BotaoVoltar  handleClick={handleClick}/>
                     </div> ||
                     <FormSucesso mensagem={"DESPESA INCLUÍDA COM SUCESSO"}
                                  />
                }


            </form>


        </div>
    )
}

export default AdicionaDespesa