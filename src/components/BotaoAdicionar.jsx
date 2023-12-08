import styles from "./BotaoAdicionar.module.css"
import Carrinho from "../assets/carrinho.png";

const BotaoAdicionar = () => {

    return (

        <>
            <button  className={styles.Adicionar}>
                        <img src={Carrinho} alt="yes"/>
                        &nbsp; Adicionar
            </button>
        </>
    )
}

export default BotaoAdicionar