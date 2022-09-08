import { useState } from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista/lista';
import Cronometro from '../components/cronometro'
import style from './App.module.scss'
import { ITarefa } from '../types/Itarefa';

function App() {
   const [tarefas, setTarefas] =  useState<ITarefa[]>(
    []
);
  return (
    <div className={style.AppStyle}>
    
     <Formulario setTarefas={setTarefas}/>
     <Cronometro />
     <Lista tarefas={tarefas}/>

    </div>
  );
}

export default App;
