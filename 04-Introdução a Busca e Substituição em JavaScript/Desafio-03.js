/*
//### Desafio - Validador de senhas com requisitos
Pedro e Fernando são os desenvolvedores em uma stratup e vão desenvolver o novo sistema de cadastro, e pediram a sua ajuda.
Sua task é fazer o código que valide as senhas que são cadastradas, para isso você deve atentar aos requisitos a seguir:
•	A senha deve conter, no mínimo, uma letra maiúscula, uma letra minúscula e um número;
•	A mesma não pode ter nenhum caractere de pontuação, acentuação ou espaço;
•	Além disso, a senha pode ter de 6 a 32 caracteres.

//### Entrada
A entrada contém vários casos de teste e termina com final de arquivo.
Cada linha tem uma string S, correspondente a senha que é inserida pelo usuário no momento do cadastro.

//### Saída
A saída contém uma linha, que pode ser “Senha valida.”, caso a senha tenha cada item dos requisitos solicitados anteriormente, ou “Senha invalida.”, se um ou mais requisitos não forem atendidos.
|-----------------------------------------------|
|     Exemplo de Entrada     | Exemplo de Saída |
|----------------------------|------------------|
| Digital Innovation One     | Senha invalida.  |
| AbcdEfgh99                 | Senha valida.    |
| DigitalInnovationOne123    | Senha valida.    |
| Digital Innovation One 123 | Senha invalida.  |
| Aass9                      | Senha invalida.  |
| Aassd9                     | Senha valida.    |
|-----------------------------------------------|
*/

//Código do desafio:
const inputs = [ //para uso local
  'Digital Innovation One',
  'AbcdEfgh99',
  'DigitalInnovationOne123',
  'Digital Innovation One 123',
  'Aass9',
  'Aassd9',
  ''
] //para uso local

function validadorDeSenha(senha) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*[_])\w{6,32}$/.test(senha)
}

let i = 0; //para uso local
let senha = "";
do {
  // senha = gets(); //para uso na DIO
  senha = inputs[i++] //para uso local
  if (senha !== "") {
    let valido = validadorDeSenha(senha);
    console.log("Senha " + (valido ? "valida." : "invalida."));
  }
} while (senha !== "");