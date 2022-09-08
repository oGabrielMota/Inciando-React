import style from './Cronometro.module.scss'
import Botao from '../botao'
import Relogio from '../cronometro/relogio'

export default function Cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro ! </p>

            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto="Começar"/>


        </div>

        
    )
}