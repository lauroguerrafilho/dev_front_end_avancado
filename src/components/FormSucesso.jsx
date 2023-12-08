import styles from "./FormSucesso.module.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import Sucesso from "../assets/sucesso.png";


const FormSucesso = ({mensagem}) => {

    const navigate = useNavigate();
    const handleClick = (event) => {
       event.preventDefault();
       navigate("/")
   }

    return (
        <>

            <div className={styles.detalhe}>
                  <div className={styles.imagem}>

                      <img src={Sucesso} alt="yes"/>
                  </div>
                  <p className={styles.p}>

                       &nbsp; &nbsp; &nbsp; &nbsp; {mensagem}
                      <br/>
                   </p>
                    <div className={styles.botoes}>
                            <input onClick={handleClick}    type="submit"  value="continue" className={styles.botao} />
                       <br/> <br/>
                    </div>

            </div>
        </>
    )
}

export default FormSucesso