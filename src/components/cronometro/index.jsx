import { useEffect, useState } from 'react';
import style from './Cronometro.module.scss'
import Botao from '../botao'
import Relogio from '../cronometro/relogio'
import {tempoParaSegundos } from '../../common/utils/tempo'


interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({selecionado}: Props){

    const [tempo, setTempo] = useState()
    
    useEffect(() => {
       if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo))
       }
    }, [selecionado])

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro ! </p>
                
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao texto="Começar"/>


        </div>

        
    )
}