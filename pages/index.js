import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const onSubmit = (data) => console.log(data);

  return (
    <main>
      <h1>Cadastro blog de receitas</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Nome é obrigatório</p>
        <input
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
          required
        />
        {errors.name?.type === "required" && "Nome é obrigatório"}

        <p>Digite um email</p>
        <input
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />

        <p>Selecione o tipo de usuário</p>
        <select {...register("user_type")}>
          <option value="">Selecionar...</option>
          <option value="Leitor">Leitor</option>
          <option value="Criador">Criador de artigos</option>
        </select>

        <h3>Gênero</h3>
        <div className="gender">
          <div>
            <input type="radio" value="Male" {...register("gender")} />
            <label>Masculino</label>
          </div>
          <div>
            <input type="radio" value="Female" {...register("gender")} />
            <label>Feminino</label>
          </div>
        </div>

        <p>Idade é obrigatória</p>
        <input
          type="number"
          placeholder="Digite sua idade"
          {...register("age")}
        />

        <p>Senha é obrigatória</p>
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />

        <p>Você deve concordar com os termos</p>
        <div className="checkbox">
          <input type="checkbox" {...register("agreedWithTerms")} />
          <label>Concordar com os termos</label>
        </div>

        <input type="submit" value="Cadastrar" />
      </form>
    </main>
  );
};

export default App;
