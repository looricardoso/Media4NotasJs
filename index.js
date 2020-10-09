let nota1,nota2,nota3,nota4,resultado = 0;
resultado = Number(resultado);

do {
    nota1 = prompt('Digite a primeira nota: ' || '');
    nota1 = Number(nota1);
    if (Number.isNaN(nota1) || nota1 < 0 || nota1 > 10) {
        alert('Digite somente notas entre 0 e 10');
    };
} while (Number.isNaN(nota1) || nota1 < 0 || nota1 > 10);
do {
    nota2 = prompt('Digite a segunda nota: ') || '';
    nota2 = Number(nota2);
    if (Number.isNaN(nota2) || nota2 < 0 || nota2 > 10) {
        alert('Digite somente notas entre 0 e 10');
    };
} while (Number.isNaN(nota2) || nota2 < 0 || nota2 > 10);
do {
    nota3 = prompt('Digite a terceira nota: ') || '';
    nota3 = Number(nota3);
    if (Number.isNaN(nota3) || nota3 < 0 || nota3 > 10) {
        alert('Digite somente notas entre 0 e 10');
    };
} while (Number.isNaN(nota3) || nota3 < 0 || nota3 > 10);
do {
    nota4 = prompt('Digite a quarta nota: ') || '';
    nota4 = Number(nota4);
    if (Number.isNaN(nota4) || nota4 < 0 || nota4 > 10) {
        alert('Digite somente notas entre 0 e 10');
    };
} while (Number.isNaN(nota4) || nota4 < 0 || nota4 > 10);

resultado = (nota1+nota2+nota3+nota4) / 4;

if (resultado >= 0 && resultado < 5) {
    alert(`Você ficou com média ${resultado.toFixed(1)}\nResultado: Reprovado`);
} else if (resultado >= 5 && resultado <=6) {
    alert(`Você ficou com média ${resultado.toFixed(1)}\nResultado: Em recuperação`);
} else {
    alert(`Você ficou com média ${resultado.toFixed(1)}\nResultado: Aprovado`);
}