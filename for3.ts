const objeto:any = {
    nome: 'simples',
    idade: 12,
    cidade: 'alura'
    
}

for (let key in objeto) {
    console.log(`${key}: ${objeto[key]}`);
}