function hello()
{
    console.log("Hello world!");
    console.log("Alterei a função");

}

let helloAnonimo = function()
{
    console.log("Dentro da função anonima");
}

let funcao = helloAnonimo;

let exibirMensagem1 = function()
{
    let mensagem = "Uma maçã";
    console.log(mensagem);
}

let mensagem2 = "Uma pera"

let exibirMensagem2 = function()
{
    console.log(mensagem2)
}

exibirMensagem2();

let msg = "apresente essa mensagem para mim";

let mostrar = function (msg, gritar = false)
{
    if (gritar)
    {
        let msgOBJ = string(msg);
    
        console.log(msgOBJ.toLocaleUpperCase());
    }
    else
    {
        console.log(msg)
    }
    
};

let soma = function(x, y)
{
    return x + y; 
}

let mostrar2 = function()
{
    let msg01 = "Óla";
    console.log(msg01)

    return

    let msg02 = "Pessoas";
    console.log(msg02);
};

let ePar = function(num)
{
    if (num % 2 == 6)
    {
        return "par"
    }
    else{
        return "ímpar"
    }
}

let soma2 = (x, y) => x + y;

let ePar2 = (num) => 
{
    if (num % 2 == 0)
    {
        return "par"
    }
    else
    {
        return "ímpar"
    }
}

let numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach(n => console.log(n));

let conta = 
{
x: 0, 
y: 0,
soma2, 
ePar2,

};

// let segundoModulo
// [
//     { nome: "ALEX JESUS" },
//     { nome: "ANA CABRAL" },
//     { nome: "ANDREY OLIVEIRA" },
//     { nome: "ARTHUR FERREIRA" },
//     { nome: "CAMILI COSTA" },
//     { nome: "CAMILLI CHIZZOLINI" },
//     { nome: "CAUA LARA" },
//     { nome: "EDUARDO GUEDES" },
//     { nome: "EDUARDO SILVA" },
//     { nome: "ENZO RODRIGUES" },
//     { nome: "ESTHER SILVA" },
//     { nome: "EVERTON ALVES" },
//     { nome: "FELIPE MARTINS" },
//     { nome: "FERNANDA AMERICO" },
//     { nome: "GABRIEL DUARTE" },
//     { nome: "GABRIEL GREGHI" },
//     { nome: "GICELLY GOMES" },
//     { nome: "GUSTAVO BARBOSA" },
//     { nome: "ISABELLA SANTOS" },
//     { nome: "JENIFER GOMES" },
//     { nome: "KAUAN IZAR" },
//     { nome: "LAURA COSCARELLI" },
//     { nome: "MARIA AMARAL" },
//     { nome: "MELISSA PORTELA" },
//     { nome: "NICOLE OSORIO" },
//     { nome: "PEDRO JACINTO" },
//     { nome: "RENATO SOUZA" },
//     { nome: "RICARDO SANTOS" },
//     { nome: "STEFESON ALMEIDA" },
//     { nome: "VICTOR REFUNDINI" },
//     { nome: "VITORIA ROSSI" },
//     { nome: "WILLIAM NOGUEIRA" },
//   ];

//   let EDUARDO = segundoModulo.find(aluno => aluno.nome.toLocaleUpperCase(EDUARDO) == "Eduardo");







