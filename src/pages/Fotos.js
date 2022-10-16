import React from "react";
import guardaA from "../components/images/guardaA.png"
import gradeA from "../components/images/gradeA.png"
import guardaD from "../components/images/guardaD.png"
import azuleA from "../components/images/azuleA.png"
import azuleD from "../components/images/azuleD.png"
import gradeD from "../components/images/gradeD.png"
import video from "../components/images/video.mp4"
import instagram from "../components/images/instagram.png"
import classes from "./Fotos.module.scss"



const Fotos = () => {
    return (
    <>
    <div  className={classes.servicos}>
            <div className={classes.servicos_left}>
                <p><span>VÍDEO</span></p>
                <div className={classes.videoAbout}>
						<div className={classes.contentVideo}>
							<iframe className={classes.videoIframe } src={video} title="lixadeira de teto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
				</div>
               
              <a href="/"> <button >INÍCIO</button></a>
            </div>

            <div className={classes.direita}>
                <p><span>FOTOS</span></p>  
                <div className={classes.servicos_right}>

                   <div>ANTES <img src={gradeA} alt="imagem" /></div>
                    <div>DEPOIS<img src={gradeD} alt="imagem" /></div>
                    <div>ANTES<img src={guardaA} alt="imagem" /></div>
                    <div>DEPOIS<img src={guardaD} alt="imagem" /></div>
                    <div>ANTES<img src={azuleA} alt="imagem" /></div>
                    <div>DEPOIS<img src={azuleD} alt="imagem" /></div>
                </div>
            
               <a className={classes.servicos_instagram} href="https://www.instagram.com/gdlpinturas/" ><img src={instagram} alt="Instagram logo" /></a>
               

            </div>
    </div>
    
    </>
    )
};

export default Fotos;
