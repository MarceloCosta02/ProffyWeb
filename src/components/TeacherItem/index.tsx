import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/53263179?s=400&u=14cf2d20a7af257866925d4e55adb716e3d44ee0&v=4" alt="Marcelo de Lucca" />
                <div>
                    <strong>Marcelo de Lucca</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Esteja preparado porque essa semana vai ser incrível:
                   <br /><br />
                   chegou o momento de acelerar na direção dos seus objetivos e levar suas habilidades, suas aplicações e a sua carreira para o próximo nível.
                   </p>

            <footer>
                <p>
                    Preço/hora
                           <strong>R$ 250,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                       </button>
            </footer>
        </article>
    );
}

export default TeacherItem;