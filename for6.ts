let arrayNumeros: Array<number> = [1, 4, 5, 10, 15]
let soma: number = 0

for (let i = 0; i < arrayNumeros.length; i++) {
    soma += arrayNumeros[i]
    
}

const media: number = soma / arrayNumeros.length;
console.log(`a media dos numeros do array é ${media}`)