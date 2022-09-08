import React from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista/lista';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      
     <h1>Salve Meu Pit</h1>
     <Formulario/>
     <Lista/>

    </div>
  );
}

export default App;
