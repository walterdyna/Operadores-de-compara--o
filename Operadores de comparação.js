// ------------------------------ ===== Operadores de comparação ===== -----------------------------------

// ==  -> IGUAL --> Ele compara o valor, mais não compara o tipo de valor;
// === -> TOTALMENTE IGUAL --> Compara tipo de dados e valor TUDO;

// !=  -> DIFERENTE --> Ele compara o valor, mas não compara o tipo do valor;
// !== -> TOTALMENTE DIFERENTE --> Ele verifica o tipo de dados e valor TUDO;
// -------------------------------------------------------------------------------------------------------


// --------------------------------Operadore de compraração IGUALDADE-------------------------------------
// ---------------------------Comparação com Nomes ---------------------------
const fistPerson = 'Joao'
const seccondPeson = 'Maria'
const thirdperson ='Joao'

// -----------------------------------IGUAL-----------------------------------
console.log(fistPerson==seccondPeson) //---> FALSO // COMPARA SOMENTE O NOME OU NUMERO NÃO O TIPO
console.log(fistPerson==thirdperson) // ---> VERDADEIRO // COMPARA SOMENTO O NOME NÃO O TIPO
//---------  TOTALMENTE IGUAL-------------
console.log(fistPerson===seccondPeson) //---> FALSO // COMPRAR TUDO NOME E TIPO
console.log(fistPerson===thirdperson) //---> VERDADEIRO // COMPARA O NOME E TIPO
// ------------------------------------------------------------------------------------------------------

// --------------------------Comparação com Numeros --------------------------
const firstNumber = '23'
const secondNumber = 23
const thirdNumber = 23
// -----------------------------------IGUAL-----------------------------------
console.log(firstNumber==secondNumber) //---> Verdadeiro // Primeiro numero e igual segundo TIPOS DIFERENTES
console.log(firstNumber===secondNumber)//---> FALSO // Primeiro numero e do Tipo diferente do segundo
console.log(firstNumber===thirdNumber)// ---> Verdadeiro Primeiro e Terceiro são iguais --- Mesmo TIPO.
// -------------------------------------------------------------------------------------------------------


// --------------------------------Operadore de Compraração Diferentes-------------------------------------
// --------------------------Comparação com Nomes ----------------------------
const fistPerson1 = 'Joao'
const seccondPeson2 = 'Maria'
const thirdperson3 ='Joao'

// ---------------------------------Diferente---------------------------------
console.log(fistPerson1!=seccondPeson2) //---> FALSO // COMPARA SOMENTE O NOME OU NUMERO NÃO O TIPO
console.log(fistPerson1!=thirdperson3) // ---> VERDADEIRO // COMPARA SOMENTO O NOME NÃO O TIPO
//---------  TOTALMENTE IGUAL-------------
console.log(fistPerson1!==seccondPeson2) //---> FALSO // COMPRAR TUDO NOME E TIPO
console.log(fistPerson1!==thirdperson3) //---> VERDADEIRO // COMPARA O NOME E TIPO
// ------------------------------------------------------------------------------------------------------

// --------------------------Comparação com Numeros --------------------------
const firstNumber1 = '23'
const secondNumber2 = 23
const thirdNumber3 = 23
// ---------------------------------DIFERENTE---------------------------------
console.log(firstNumber1!=secondNumber2) //---> Verdadeiro // Primeiro numero e igual segundo TIPOS DIFERENTES
console.log(firstNumber1!==secondNumber2)//---> FALSO // Primeiro numero e do Tipo diferente do segundo
console.log(firstNumber1!==thirdNumber3)// ---> Verdadeiro Primeiro e Terceiro são iguais --- Mesmo TIPO.

