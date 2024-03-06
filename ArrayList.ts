import { IList } from "./Lista";

export class ArrayList implements IList{
    private items: any[]; // Array que armazena os itens da lista

    constructor() {
        this.items = [] // Inicializa a lista como um array vazio
    }

 // Adiciona um elemento no final da lista
    add(item: any): void{
    this.items.push(item)
    }; 

 // Adiciona um elemento no início da lista
    addFirst(item: any): void {
        this.items.unshift(item) //unshift adiciona ao início
    }

 // Adiciona um elemento em uma posição específica da lista
    addAt(index: number, item: any): void{
 // Verifica se o índice está dentro dos limites da lista
        if (index >= 0 && index <= this.items.length){
            this.items.splice(index, 0, item) // Insere o item na posição especificada
        } else{
            throw new Error("index out of bounds.") // Lança um erro se o índice estiver fora dos limites
        }
    }
 // Remove a primeira ocorrência do elemento especificado da lista
    remove(item: any): void{
        const index = this.items.indexOf(item) // Encontra o índice do item
        if(index !== -1) {
            this.items.splice(index, 1); // Remove o item se encontrado
        }
    }

 // Remove o primeiro elemento da lista
    removeFirst(): void {
        if(!this.isEmpty()){
            this.items.shift()
        }
    }
    
}
