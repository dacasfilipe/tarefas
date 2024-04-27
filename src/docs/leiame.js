//Variável com escopo de bloco
//let e const
if(true){ //escopo do bloco
    let blocoEscopo = "Eu fico só nesse if";
    let numero = 10;
}

//Sout
console.log("Eu sou um print");
console.log(numero)

//declaração de objeto
const meuObjeto = {name:"Matheus"}; //criamos o objeto
meuObjeto.name = "Bora codificar!";//atribuição de valor
//Estamos modificando a propriedade de um objeto
//e não a constante em si

//Funções nas antiga
function hello(name){
    return "Olá," + name + "!";
}

//Funcões atuais Arrow Function
//Função com parametro
const hello = (nome, sobrenome) => "Olá," + nome + "!";
//Função sem parametro
const hellow = () => "Olá," + nome + "!";   

//Exemplo

//Desestruturando objetos
const pessoa = {
    firstName:'João',
    lastName:'da Silva',
    age:20
};
//declarar que constantes firstName,age são = pessoa
const {firstName, age} = pessoa;
console.log(firstName);//João
console.log(age); //20

//Criar um Array
const colors = ['vermelho','azul','verde','amarelo'];
//atribuir os valores quando for array usa []
const[firstColor,secondColor] = colors;
console.log(firstColor); //vermelho
console.log(secondColor); //azul
//e se quizesse pegar a terceira cor?
const[ , ,thirdColor] = colors;
console.log(thirdColor);

//Desestruturando as Funções
function displayInfo({firstName,age}){
    //quando usamos ``conseguimos usar texto e variáveis
    console.log(`${firstName} tem ${age} anos.`);
}
const pessoaInfo = {
    firstName:'Maria',
    lastName:'Fernandes',
    age:25
}
displayInfo(pessoaInfo);//Maria tem 25 anos

//Componente Funcional em React
function displayInfo({firstName,age}){
    return 
    <div>
        Bem Vindo,{firstName}, você tem {age} anos.
    </div>
}

//Promisses - uma promessa a ser cumprida
//Estados das Promisses:
// Pending (Pendente) é o estado inicial
// Fullfilled (Realizada) operação concluída
// Rejected (Rejeitada) operação falhou
// async/await
async function fetchData(){
    try{
        let response = 
        await fetch('https://sc.senai.br/alunos/1');
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log("Houve um erro.",error)
    }
}
fetchData();

// Exercícios:
// 1. Declare duas variáveis:
// nome com valor "React" e versao com valor "1.0.0"
// Em seguida, exiba uma mensagem que diz
// `Estudando ${nome} na versão ${versao}`
const nome = "React"
const versao = "1.0.0"

console.log(`Estudando ${nome} na versão ${versao}`)

// 2. Crie uma arrow function que receba dois números
// e retorne a soma deles
const numero1 = 2;
const numero2 = 5;
const soma = (a, b) => a + b;
console.log(soma(numero1,numero2));
console.log(soma(2,5));
