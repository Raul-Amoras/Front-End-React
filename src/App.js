import React, { useEffect, useState } from 'react'
import Header from './components/Header'

import api from './services/api'

import './styles/style.css'

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  function novoProjeto() {
    //projects.push(`projet ${Date.now()}`)
    setProjects([...projects, `Project ${Date.now()}`])
  }

  return (
    <>
      <Header title="Projects">
        <ul>
          {projects.map(project => (
            <li key={project.id}>{project.nome}</li>
          ))}
        </ul>
        <button onClick={novoProjeto}>Novo Projeto</button>
      </Header>
    </>
  )
}
