import React from 'react';

import "./DefaultHeader.scss";

export default function DefaultHeader() {
    return (
       <header className="default-header">
            <nav className="navbar navbar-expand-lg  navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        PHILIP CESAR GARAY
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="text-white lnr lnr-menu"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#service">Service</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#tools">Tools</a></li>
                            <li><a href="#project">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
