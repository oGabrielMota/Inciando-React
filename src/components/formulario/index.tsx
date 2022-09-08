import React from 'react';
import { ITarefa } from '../../types/Itarefa';
import Botao from '../botao';
import style from './Form.module.scss';
import {v4 as uuidv4} from 'uuid';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> 
{
    state = {
        tarefa: "",
        tempo: "00:00:00"
    }

    addTarefa(evento: React.FormEvent){
        evento.preventDefault(); 
        this.props.setTarefas(tarefasAntigas => 
            [...tarefasAntigas, 
            {...this.state,
            selecionado: false,
            completado: false,
            id: uuidv4()
            }
        ])
        this.setState({
            tarefa: "",
            tempo: "00:00:00"
        })
         
    }

    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarfa">
                        Adicione uma nova tarefa
                    </label>
                        <input value={this.state.tarefa}  onChange={evento => this.setState({...this.state, tarefa: evento.target.value})} name="tarefa" id="tarfa" placeholder="O que você quer estudar?" type="text" required/>
                </div>
                <div className={style.inputContainer}>
                <label htmlFor="tempo">
                        Tempo:
                    </label>
                        <input name="tempo" value={this.state.tempo}  onChange={evento => this.setState({...this.state, tempo: evento.target.value})} step="1" min="00:00:00" max="01:30:00" id="tempo" type="time" required/>
                </div>
                <Botao texto="Adicionar"/>
            </form>
        )
    }

}

export default Formulario