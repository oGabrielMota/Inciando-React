import React from 'react';

function Lista(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00',
    },
    {
        tarefa: 'Angular',
        tempo: '01:30:00',
    },
    {
        tarefa: 'Java',
        tempo: '03:30:00',
    },
    {
        tarefa: '.Net',
        tempo: '03:00:00',
    },
    {
        tarefa: 'Photoshop',
        tempo: '03:00:00',
    },];
    return(
        <aside>
            <h2>Estudos do dia</h2>

            <ul>

            {tarefas.map((item,index) => (
                <li>
                    <h3> {item.tarefa }</h3>
                    <span>{item.tempo }</span>
                </li>

            ))}
            </ul>
        </aside>
    )
}

export default Lista