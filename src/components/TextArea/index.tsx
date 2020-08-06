import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

// O ...rest pega todas as propriedades possiveis restantes do input
const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
    return (
        
    <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} {...rest} />
    </div>

    );
}

export default TextArea;