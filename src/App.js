import React, { useState } from 'react'
import Header from './components/Header'

export default function App(){
  const [projects, setProjects] = useState( ['HTML', 'CSS'])

  function novoProjeto (){
    //projects.push(`projet ${Date.now()}`)
    setProjects([...projects, `Project ${Date.now()}`])
    console.log(projects)
  }


  return (
    <> 
    <Header title="Projects">
      <ul>
        {projects.map(project =>(
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button onClick={novoProjeto}>Novo Projeto</button>
    </Header>
    </>
      
  )
}