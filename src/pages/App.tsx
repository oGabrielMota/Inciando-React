import React from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista/lista';
import Cronometro from '../components/cronometro'
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
    
     <Formulario/>
     <Cronometro />
     <Lista/>

    </div>
  );
}

export default App;
