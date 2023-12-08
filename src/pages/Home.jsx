// CSS
import styles from "../pages/Home.module.css"

import {useNavigate} from 'react-router-dom'

import {useState, useEffect} from "react";

import {useDespesaContex} from "../hooks/useDespesaContex.jsx";

const url = "http://localhost:3000/despesas"



// ASSETS
import Lixeira from "../assets/lixeira.png";
import Pencil from "../assets/pencil.png";
import Altera from "../assets/altera.png";
import Exclui from "../assets/deleta.png";

// COMPONENTES
import Cabecalho from "../components/Cabecalho.jsx";
import BotaoAdicionar from "../components/BotaoAdicionar.jsx";



const Home = () => {

    const navigate = useNavigate()

    const { despesaCont, setDespesaCont } = useDespesaContex();


    const [despesas, setDespesas] = useState([]);
    const [pageAdiciona, setPageAdicona] = useState("AdicionaDespesa")

    // Carregando os dados existentes na base de dados
    useEffect( () => {
        async function fetchData() {
            const res = await fetch(url);

            const dados = await res.json();

            setDespesas(dados)
        }

        fetchData();

    }, []);

    const handleSubmit = (e, a) => {
        e.preventDefault();


        navigate("/adicionadespesa", "oi")

    };

     const handleClick = (event, a, despesa) => {
        event.preventDefault();

        setDespesaCont([despesa.id, despesa.despesa, despesa.categoria, despesa.valor, despesa.dataDespesa, despesa.comentario])

        console.log('aaaa', a, despesa.id, despesa.despesa)

         if (a === 'ALTERA') {
            navigate("/alteradespesa")
        } else {
            navigate("/excluidespesa")
            //navigate('/excluidespesa', { state: { despesa } })
        }

    }

    return (
        <div>
            <Cabecalho />
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
                    <th><img src={Lixeira} alt="yes"/></th>
                    <th><img src={Pencil} alt="yes"/></th>
                      <div>
                          <BotaoAdicionar type='submit'  className={styles.botao}/>
                      </div>

                    <tbody>
                      {despesas.map((despesa, i) => (
                        <tr key={i}>
                            <td>
                                {despesa.id}
                            </td>
                            <td>
                                {despesa.despesa}
                            </td>
                            <td>
                                {despesa.categoria}
                            </td>
                            <td>
                                {despesa.valor}
                            </td>
                             <td>
                                {despesa.dataDespesa}
                            </td>
                            <td>
                                {despesa.comentario}
                            </td>
                            <td>
                                <button onClick={() => handleClick(event, 'EXCLUI', despesa)}
                                        className={styles.botao}>
                                    <img src={Exclui}
                                         alt="yes"
                                         title="Excluir"
                                    /></button>
                            </td>
                            <td>
                                 <button onClick={() => handleClick(event, 'ALTERA', despesa)}
                                          className={styles.botao}>
                                    <img src={Altera}
                                         alt="YES"
                                         title="Alterar"
                                    /></button>
                            </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </form>

        </div>
    )
}

export default Home