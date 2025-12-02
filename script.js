let contador = 0;
let depoimento = document.getElementById("depoimento");
let pessoa = document.getElementById("pessoa");

document.querySelectorAll("input")[0].click()

const dados = [
  {
    fala: "Sou um depoimento. Clique aqui para editar e adicionar texto sobre você e seus serviços. Permita que seus clientes recomendem seus serviços e digam a seus amigos o quão profissional você é.",
    pessoa: "- Gabriela Nascimento",
  },
  {
    fala: "Sou um depoimento. Clique aqui para editar e adicionar texto sobre você e seus serviços. Permita que seus clientes recomendem seus serviços e digam a seus amigos o quão profissional você é. ",
    pessoa: "- Amanda Coelho",
  },
  {
    fala: "Sou um depoimento. Clique aqui para editar e adicionar texto sobre você e seus serviços. Permita que seus clientes recomendem seus serviços e digam a seus amigos o quão profissional você é.",
    pessoa: "- José Carlos Ernesto",
  },
];

setInterval(() => {

  ++contador 
  if(contador == 3){
    contador = 0
  }
  document.querySelectorAll("input")[contador].click()
}, 10000);

const att = (valor1, valor2) => {
  depoimento.innerHTML = valor1;
  pessoa.innerHTML = valor2;
};

function next() {
  ++contador;
  if (contador == 3) {
    contador = 0;
  }

  att(dados[contador].fala, dados[contador].pessoa);
  document.querySelectorAll("input")[contador].click();
}

function back() {
  --contador;
  if (contador == -1) {
    contador = 2;
  }
  att(dados[contador].fala, dados[contador].pessoa);

  document.querySelectorAll("input")[contador].click();
}

function mudarClick() {
  for (let i = 0; i < 3; ++i) {
    input = document.querySelectorAll("input")[i];
    if (input.checked) {
      att(dados[i].fala, dados[i].pessoa);
      contador = i;
    }
  }
}
