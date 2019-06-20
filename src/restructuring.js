//restructuring
const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);
