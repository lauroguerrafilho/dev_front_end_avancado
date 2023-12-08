// CSS
import styles from "./Cabecalho.module.css"

// ASSETS
import Shop from "../assets/shopping.jpg";

const Cabecalho = ({titulo}) => {
    return (
        <>
            <div className={styles.my_title}>
                <h1>Controle de Despesas</h1>
                <h2>{titulo}</h2>
            </div>
            <div className={styles.my_banner}>
                <img src={Shop} alt="yes"/>
            </div>
        </>
    )
}

export default Cabecalho