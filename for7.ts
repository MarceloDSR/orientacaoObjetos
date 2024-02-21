const exemplo = {
    nome: 'simples',
    idade: 12,
    cidade: 'alura'
}

let contador = 0

for (const key in exemplo) {
    contador++
}
console.log(contador)