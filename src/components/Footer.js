import classes from "./Footer.module.scss"
import contatos from "../components/images/contatos.png"
import frase from "../components/images/frase.png"

export const Footer = () => {
    return(
    <>
        <div className={classes.footer}>
            <div className={classes.footer_contacts}>
                <img src={contatos} alt="Contatos" />
                <img src={frase} alt="Frase Bíblica"/>

            </div>
        </div>
         <div className={classes.footer_direitos}>Copyright © 2022 - GDL Pinturas - CNPJ: 40.728.531/0001-10 - Todos os direitos reservados. </div>
         <div className={classes.footer_direitos}><p>Criado por <a href="https://www.linkedin.com/in/carlospinheiro2021/">EluxC3Web</a>.</p></div>
    </>
    )
}