import React from "react";
import denes from "../components/images/denes.png"
import retangulo from "../components/images/retangulo.png"
import classes from"./Sobre.module.scss"

const Sobre = () => {
    return (
        <>
        <div className={classes.home}>
            <div className={classes.home_textBox}>
                <div>
               <p><span>SOBRE</span></p>
               
                 <p>Me chamo Denes, sou casado, pai de 3 filhos, cristão e apaixonado 
 pelo que faço.<br/>
Aos 9 anos de idade tive minha primeira experiência com a pintura ao me aventurar pintando minha própria casa, depois de alguns anos fui me aperfeiçoando na área através de cursos, estudos das cores
 e serviços diversos.
 <br/>Hoje sou um profissional empenhado em atender as mais diversas necessidades dos meus clientes.</p>                
                </div>
            </div>

            <div className={classes.home_imageContainer}>
                    <img src={denes} alt="Imagem latas de tintas e cartela de cores" />
                    <img className={classes.retangulo} src={retangulo} alt="Imagem latas de tintas e cartela de cores" />
            </div>
            
        </div>
        
        </>
    )
};

export default Sobre;