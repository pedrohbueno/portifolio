import Link from 'next/link';
import React from 'react';
export default function Navbar (){
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bglayout">
            <div className="container-fluid">
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <Link  className="d-flex navbar-brand mt-2 mt-lg-0 gap-3" href="/">
                        <img src='logo.png' className="mx-4" width="80"/>
                        <p className="h1 font-weight-bold my-auto">Pedro Bueno</p>
                    </Link >
                    
                </div>

                <div className="d-flex align-items-center mx-5 fs-4">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                        <Link  className="nav-link" href="projetos">
                            Projetos
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link  className="nav-link" href="certificados">
                            Certificados
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link  className="nav-link" href="contato">
                            Contatos
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );    
};

