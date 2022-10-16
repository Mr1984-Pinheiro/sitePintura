import React, { useEffect, useState } from "react";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import logo from"../components/images/logo.png"
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    <img src={logo} alt="Imagem GDL Pinturas" />
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/" onClick={menuToggleHandler}>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="serviços" onClick={menuToggleHandler}>
                                SERVIÇOS
                            </Link>
                        </li>
                        <li>
                            <Link to="/sobre" onClick={menuToggleHandler}>
                                SOBRE
                            </Link>
                        </li>
                        <li>
                            <Link to="/fotos" onClick={menuToggleHandler}>
                                FOTOS/VÍDEOS
                            </Link>
                        </li>
                    </ul>

                     <a href="https://api.whatsapp.com/send?phone=5511963618160&text=Ol%C3%A1%2C%20seja%20bem-vindo(a)%20a%20GDL%20Pinturas.%20Descreva%20para%20qual%20servi%C3%A7o%20deseja%20um%20or%C3%A7amento."><button>CONTATO</button></a> 
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenu onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
