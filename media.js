const mediafinal = 6;

const sala = [
    aluno = {
        nome: "Tiago dos Santos",
        disciplina: "Matemática",
        notas: [ 6.5, 4.3, 7.1, 6.0]
    },
    aluno = {
        nome: "Alex Carneiro",
        disciplina: "Matemática",
        notas: [ 7.5, 8.3, 9.1, 10]
    },
    aluno = {
        nome: "Valéria Barbosa",
        disciplina: "Português",
        notas: [ 8.5, 9, 9.5, 10]
    },
    aluno = {
        nome: "Willian Levinski",
        disciplina: "Ciências",
        notas: [ 6, 4.5, 5.8, 7]
    },
];

function medias() {
    for (let i=0;i<sala.length;i++){
    let soma = 0;
    let media = 0;
    for (let n=0;n<sala[i].notas.length;n++){
        let nota = sala[i].notas[n];
        soma += nota;
        media = soma / sala[i].notas.length;
    }
    let status = "Indefinido";
    if (media < mediafinal){
        status = "Reprovado"
    } else {
        status = "Aprovado"
    }
    console.log(`Aluno: ${sala[i].nome} - Disciplina: ${sala[i].disciplina} - Média Final: ${media} - Condição: ${status}`);  
    }
}

medias(sala)


/*
//console.log('Média: ' + media);
//console.log(sala[1]);

const aluno1 = sala[0];
const aluno2 = sala[1];


const mediaAluno1 = (aluno1.notas.length) / 4;
//console.log('Média Aluno 1: ' + mediaAluno1);
var statusAluno1 = '???';

if (mediaAluno1 < media) {
    statusAluno1 = 'Reprovado';
} else {
    statusAluno1 = 'Aprovado';
}
//console.log(statusAluno1);

console.log(`Aluno: ${aluno1.nome} - ${aluno1.disciplina} - Média Final: ${mediaAluno1} - Status: ${statusAluno1}`);

const mediaAluno2 = (aluno2.notas[0] + aluno2.notas[1] + aluno2.notas[2] + aluno2.notas[3]) / 4;
var statusAluno2 = '???';

if (mediaAluno2 < media) {
    statusAluno2 = 'Reprovado';
} else {
    statusAluno2 = 'Aprovado';
}
console.log(`Aluno: ${aluno2.nome} - ${aluno2.disciplina} - Média Final: ${mediaAluno2} - Status: ${statusAluno2}`);
*/