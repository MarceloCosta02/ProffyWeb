import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';

// Seta oq pode ser recebido pelo page header via props
interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>

                {/* O && é um condicional caso o primeiro argumento exista/seja verdadeiro, executa o segundo */}
                { props.description && <p>{props.description}</p> }

                {/* O children traz oq vem dentro do corpo da tag via props */}
                {props.children}
            </div>          
        </header>
    );
}

export default PageHeader;