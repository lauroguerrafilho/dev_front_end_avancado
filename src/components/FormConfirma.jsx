import styles from "./FormConfirma.module.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const FormConfirma = ({titulo, operacao, confirma, setConfirma}) => {

    const navigate = useNavigate();
    const handleClick = (event) => {
       event.preventDefault();
       setConfirma("NÃO")
        console.log('2', confirma)
       navigate("/")
   }

    return (
        <>
            <div className={styles.cabecalho}>
                <h1 className={styles.h1}>
                    {titulo}
                </h1>
            </div>
            <div className={styles.detalhe}>
                  <p className={styles.p}>
                     <br/>
                     &nbsp; &nbsp; {operacao}
                   </p>
                    <div className={styles.botoes}>
                            <input type="submit"  value="SIM" className={styles.botao} />
                            <input onClick={handleClick}    type="submit"  value="NÃO" className={styles.botao} />
                    </div>

            </div>
        </>
    )
}

export default FormConfirma