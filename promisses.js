function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Buscando dados", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Baixando dados", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("atualizando dados", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("voce está conectado");
  });
let dice = Math.round(Math.random * 20);
console.log(dice);
