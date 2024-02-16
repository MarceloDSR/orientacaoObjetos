import { NobleHouse } from "./NobleHouse";
import { HouseRules } from "./HouseRules"
import { HouseHeir } from "./HouseHeir";
import { Baratheon } from "./Baratheon";
import { Heir } from "./Heir";
import { Greyjoy } from "./Greyjoy";
import { Lannister } from "./Lannister";
import { Stark } from "./Stark";
import { Targaryen } from "./Targaryen";

// Função para a batalha entre as casas
export function BattleOfTheHouses(
  house1: Baratheon | Greyjoy | Lannister | Stark | Targaryen,
  army1: number,
  house2: Baratheon | Greyjoy | Lannister | Stark | Targaryen,
  army2: number
): string {
    console.log(`Batalha entre as casas ${house1.nameHouse} e ${house2.nameHouse}`);

    if (army1 > army2) {
        return `${house1.nameHouse} Won the battle!`;
    } else if (army2 > army1) {
        return `${house2.nameHouse} Won the battle!`;
    } else {
        return 'The battle was drawn';
    }
}

// Instanciando as casas com números de soldados
const baratheon = new Baratheon("Baratheon", "Ours is the Fury", 1000); 
const greyjoy = new Greyjoy("Greyjoy", "We Do Not Sow", 800); 
const lannister = new Lannister("Lannister", "A Lannister Always Pays His Debts", 1200); 
const stark = new Stark("Stark", "Winter is Coming", 1100); 
const targaryen = new Targaryen("Targaryen", "Fire and Blood", 3000); 

// Chamando a função de batalha
const winner = BattleOfTheHouses(baratheon, baratheon.numSoldiers, stark, stark.numSoldiers);
console.log(winner);
