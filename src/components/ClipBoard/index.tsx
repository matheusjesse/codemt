'use client'

import { ClipBoardContainer } from './style';
import { useState } from 'react';
import CopyImage from '../../../public/copy.png';
import CheckCircle from '../../../public/check-circle-2.png';
import Image from 'next/image';

interface propCode {
    codeText: string
}

function defaultImage () {
    return(
        <Image className="default-image" src={CopyImage} alt="imagem de 2 quadrados sobreprondo o outro representando um clipboard"/>
    )
}

function confirmImage () {
    return(
        <Image className="confirm-image" src={CheckCircle} alt="Imagem de um circulo com uma sinbulo de V dentro representando que a ação foi concluida"/>
    )
}

export default function ClipBoard ({codeText}: propCode) {
    const [copiado, setCopiado] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeText)
        .then(() => {
            setCopiado(true);
            setTimeout(() => {
                setCopiado(false);
            }, 2000);
        })
        .catch((err) => {
            console.error('Erro ao copiar para a área de transferência', err);
        });
      };

    return(
        <ClipBoardContainer>
            <div className='clip-button-container'>
                <button className='clip-board-button' onClick={copyToClipboard}>
                    {copiado && (<span className='tooltip'>Copiado!</span>) }
                    {!copiado ? defaultImage() : confirmImage()}
                </button>
            </div>
            <pre>
                <code>
                    {codeText}
                </code>
                
            </pre>
        </ClipBoardContainer>
    )
}