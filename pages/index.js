import React from "react";

const App = () => {
  return (
    <main>
      <h1>Cadastro blog de receitas</h1>

      <form>
        <input type="text" placeholder="Digite seu nome" />
        <p>Nome é obrigatório</p>

        <input type="email" placeholder="Digite seu email" />
        <p>Digite um email</p>

        <select>
          <option value="">Selecionar...</option>
          <option value="Leitor">Leitor</option>
          <option value="Criador">Criador de artigos</option>
        </select>
        <p>Selecione o tipo de usuário</p>

        <div className="gender">
          <h3>Gênero</h3>
          <div>
            <input type="radio" value="Male" />
            <label>Masculino</label>
          </div>
          <div>
            <input type="radio" value="Female" />
            <label>Feminino</label>
          </div>
        </div>

        <input type="number" placeholder="Digite sua idade" />
        <p>Idade é obrigatória</p>

        <input type="password" placeholder="Digite sua senha" />
        <p>Senha é obrigatória</p>

        <div className="checkbox">
          <input type="checkbox" />
          <label>Concordar com os termos</label>
        </div>

        <p>Você deve concordar com os termos</p>

        <input type="submit" value="Cadastrar" />
      </form>
    </main>
  );
};

export default App;
