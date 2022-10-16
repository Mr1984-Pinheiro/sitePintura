import React from "react";
import cinza from "../components/images/cinza.png"
import laranja from "../components/images/laranja.png"
import grafiato from "../components/images/grafiato.png"
import moldura from "../components/images/moldura.png"
import rodape from "../components/images/rodape.png"
import verde from "../components/images/verde.png"
import classes from "./Serviços.module.scss"

const Serviços = () => {
    return (
    <>
    <div  className={classes.servicos}>
            <div className={classes.servicos_left}>
                <h3>SERVIÇOS</h3>
                <ul>
                    <li>Pintura interna e externa de paredes</li>
                    <li>Pintura de teto</li>
                    <li>Massa corrida</li>
                    <li>Texturas</li>
                    <li>Grafiato</li>
                    <li>Cimento queimado</li>
                    <li>Papel de parede</li>
                    <li>Pintura de portas, portões e janelas</li>
                    <li>Verniz</li>
                    <li>Moldura de gesso</li>
                </ul>
               
                <a href="https://api.whatsapp.com/send?phone=5511963618160&text=Ol%C3%A1%2C%20seja%20bem-vindo(a)%20a%20GDL%20Pinturas.%20Descreva%20para%20qual%20servi%C3%A7o%20deseja%20um%20or%C3%A7amento."><button>ORÇAMENTO</button></a>
            </div>

            <div className={classes.servicos_right}>
               
                    <img src={laranja} alt="imagem" />
                    <img src={verde} alt="imagem" />
                    <img src={cinza} alt="imagem" />
                    <img src={grafiato} alt="imagem" />
                    <img src={moldura} alt="imagem" />
                    <img src={rodape} alt="imagem" />
               

            </div>
    </div>
    
    </>
    )
};

export default Serviços;
