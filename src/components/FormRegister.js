import React from 'react'

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

export default function FormRegister({title}) {
  return (
    <>
      <body>
      <h1>{title}</h1>
        <div className="cadastro">
          <form method="post" action="">
            <p>
              <label for="email">Seu e-mail</label>
              <input
                id="email"
                name="email"
                required="required"
                type="email"
                placeholder="codcliente@exemplo.com"
              />
            </p>

            <p>
              <label for="senha">Sua senha</label>
              <input
                id="senha"
                name="senha"
                required="required"
                type="password"
                placeholder="******"
              />
            </p>

            <p>
              <label for="nome">Seu nome</label>
              <input
                id="nome"
                name="nome"
                required="required"
                type="text"
                placeholder="Digite Seu Nome Completo"
              />
            </p>
            <p>
              <label for="datanascimento">Data de Nascimento</label>
              <input
                id="datanascimento"
                name="datanascimento"
                required="required"
                type="text"
                placeholder="Data de Nascimento"
              />
            </p>

            <p>
              <label for="cnpj_cpf">CPF</label>
              <input
                id="cnpj_cpf"
                name="cnpj_cpf"
                required="required"
                type="text"
                placeholder="Digite seu CPF"
              />
            </p>

            <p>
              <label for="rg">RG</label>
              <input
                id="rg"
                name="rg"
                required="required"
                type="text"
                placeholder="Digite seu RG"
              />
            </p>

            <p>
              <label for="telefone">Telefone</label>
              <input
                id="telefone"
                name="telefone"
                required="required"
                type="text"
                placeholder="Telefone"
              />
            </p>

            <p>
              <label for="endereco">Endereço</label>
              <input
                id="endereco"
                name="endereco"
                required="required"
                type="text"
                placeholder="Rua tal"
              />
            </p>

            <p>
              <label for="numero">Número</label>
              <input
                id="numero"
                name="numero"
                required="required"
                type="text"
                placeholder="Número"
              />
            </p>

            <p>
              <label for="bairro">Bairro</label>
              <input
                id="bairro"
                name="bairro"
                required="required"
                type="text"
                placeholder="Bairro"
              />
            </p>

            <p>
              <label for="cep">CEP</label>
              <input
                id="cep"
                name="cep"
                required="required"
                type="text"
                placeholder="XXXXX-XXX"
              />
            </p>

            <p>
              <label for="complemento">Complemento</label>
              <input
                id="complemento"
                name="complemento"
                required="required"
                type="text"
                placeholder="Complemento"
              />
            </p>

            <p>
              <label for="sexo">Sexo</label>
              <input
                id="sexo"
                name="sexo"
                required="required"
                type="text"
                placeholder="Sexo"
              />
            </p>

            <p>
              <input type="submit" value="Cadastrar" />
            </p>

            <p class="link">
              Já tem conta?
              <a href="login.html"> Ir para Login </a>
            </p>
          </form>
        </div>
      </body>
    </>
  )
}
