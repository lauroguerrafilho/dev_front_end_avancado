import styles from "./BotaoGeral.module.css"
const BotaoGeral = ({botãotexto}) => {

    return (
        <>
           <input type="submit"
                   className={styles.Incluir}
                  value={botãotexto} />
        </>
    )
}

export default BotaoGeral