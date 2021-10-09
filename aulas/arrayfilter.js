const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const numerosFiltrados = numeros.filter (goiaba => goiaba > 10 );
console.log (numerosFiltrados);

const pessoas =[
  { nome: 'luiz', idade: 62 },
  { nome: 'maria', idade: 23 },
  { nome: 'eduardo', idade: 55 },
  { nome: 'letcia', idade: 19 },
  { nome: 'rosana', idade: 32 },
  { nome: 'wallace', idade: 47 },
];

const pessoasBigName = pessoas.filter(obj => obj.nome.length >= 5);
console.log (pessoasBigName);

const pessoasVelhas = pessoas.filter(obj => obj.idade >= 50);
console.log (pessoasVelhas);

const pessoasNomeTerminaA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith("a") );
console.log (pessoasNomeTerminaA);