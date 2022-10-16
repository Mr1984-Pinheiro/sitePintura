import React from "react";

import classes from"./Home.module.scss"
import Serviços from "./Serviços"
import Sobre from "./Sobre"
import Fotos from "./Fotos"



const Home = () => {
    return (
        <>
        <div className={classes.home}>
            <div className={classes.home_textBox}>
               <p>Olá seja bem-vindo(a)!</p>
               
                 <p>Somos a GDL uma empresa com 25 anos no mercado de pinturas em geral.
                    <br/>
                Trabalhamos desde a restauração até o acabamento de pinturas, texturas e tratamentos em paredes internas e
                externas.</p>

                <p>Fazemos também impermeabilização
                e molduras de gesso.</p>

               <p>Atendemos casas, apartamentos e 
                comércios em geral.</p>  

               <a href="https://api.whatsapp.com/send?phone=5511963618160&text=Ol%C3%A1%2C%20seja%20bem-vindo(a)%20a%20GDL%20Pinturas.%20Descreva%20para%20qual%20servi%C3%A7o%20deseja%20um%20or%C3%A7amento."><button>CONTATO</button></a> 
              
                
            </div>

            <div className={classes.home_imageContainer}>
                    
            </div>
            
        </div>
        <Serviços />
        <Sobre />
        <Fotos />
        </>
    )
};

export default Home;
