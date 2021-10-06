// dobre os numeros

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log (numerosEmDobro)


const pessoas =[
    { nome: 'luiz', idade: 62 },
    { nome: 'maria', idade: 23 },
    { nome: 'eduardo', idade: 55 },
    { nome: 'letcia', idade: 19 },
    { nome: 'rosana', idade: 32 },
    { nome: 'wallace', idade: 47 },
  ];

  const nomeDasPessoas = pessoas.map(obj => obj.nome);
  const idades = pessoas.map(obj => obj.idade);
  console.log(idades)

  const comIds = pessoas.map(function (obj, indice) {
      const newObj = { ...obj };
      newObj.id = indice + parseInt((Math.random()*100));
      return newObj;
  });
  console.log(comIds);