import { useEffect, useState } from 'react';
import style from './Cronometro.module.scss'
import Botao from '../botao'
import Relogio from '../cronometro/relogio'
import {tempoParaSegundos } from '../../common/utils/tempo'


interface Props {
    selecionado: ITarefa | undefined,
    finalizaTarefa: () => void
}

export default function Cronometro({selecionado, finalizaTarefa}: Props){

    const [tempo, setTempo] = useState()
    
    useEffect(() => {
       if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo))
       }
    }, [selecionado])

    function regressiva(contador: number = 0){

        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1)
            }
            finalizaTarefa();
        }, 1000)

    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro ! </p>
                
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)}texto="Começar"/>


        </div>

        
    )
}