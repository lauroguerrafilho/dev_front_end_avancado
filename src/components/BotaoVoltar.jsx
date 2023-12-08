import styles from "./BotaoVoltar.module.css"

const BotaoVoltar = ({handleClick}) => {

    return (

        <>
             <input type="button"
                    className={styles.Voltar}
                    value='VOLTAR'
                    onClick={(event) => handleClick(event)}
                       />
        </>
    )
}

export default BotaoVoltar