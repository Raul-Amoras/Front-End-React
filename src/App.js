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

  async function novoProjeto() {
    const response = await api.post('projects', {
      nome: 'amoras',
      nomeFantasia: 'Raul amoras',
      tipoPessoa: 'F',
      tipoCliente: 'C',
      cnpj_Cpf: '790.630.210-97',
      rg: '7333078',
      InscricaoEstadual: 'Null',
      telefone: '(91)98485-7415',
      endereco: 'Rua vitoria',
      bairro: 'Nova esperanca',
      cep: '68625000',
      codMunicipio: '001',
      numero: '325',
      complemento: 'Null',
      email: 'raul.amoras@gmail.com',
      dataNascimento: '11/09/1996',
      sexo: 'M',
      dataCadastro: '01/01/2020',
      ativo: 'S'
    })
    const project = response.data

    setProjects([...projects, project])
  }

  return (
    <>
      <Header title="Cadastro">
        
          {projects.map(project => (
            <ul key={project.id}>
              <li>{project.nome}</li>
              <li>{project.nomeFantasia}</li>
              <li>{project.tipoPessoa}</li>
              <li>{project.tipoCliente}</li>
              <li></li>
              <li></li>
            </ul>
          ))}
        
        <button onClick={novoProjeto}>Novo Projeto</button>
      </Header>
    </>
  )
}
