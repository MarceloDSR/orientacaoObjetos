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
  army2: number,
  house3: Baratheon | Greyjoy | Lannister | Stark | Targaryen,
  army3: number,
  house4: Baratheon | Greyjoy | Lannister | Stark | Targaryen,
  army4: number,
  house5: Baratheon | Greyjoy | Lannister | Stark | Targaryen,
  army5: number,
): string {
    console.log(`Battle of Houses ${house1.nameHouse} and ${house2.nameHouse} and ${house3.nameHouse} and ${house4.nameHouse} and ${house5.nameHouse}`);

    if (army1 > army2 && army3 && army4 && army5) {
        return `${house1.nameHouse} Won the battle!`;
    } else if (army2 > army1 && army3 && army4 && army5) {
        return `${house2.nameHouse} Won the battle!`;
    }  else if (army3 > army1 && army2 && army4 && army5) {
        return `${house3.nameHouse} Won the battle!`;
    } else if (army4 > army1 && army2 && army3 && army5) {
        return `${house4.nameHouse} Won the battle!`;
    } else if (army5 > army1 && army2 && army3 && army4) {
        return `${house5.nameHouse} Won the battle!`;
    }else {
        return 'The battle was drawn';
    }
}

// Instanciando as casas com números de soldados
const baratheon = new Baratheon("Baratheon", "Ours is the Fury", 1000, ); 
const greyjoy = new Greyjoy("Greyjoy", "We Do Not Sow", 800); 
const lannister = new Lannister("Lannister", "A Lannister Always Pays His Debts", 1200); 
const stark = new Stark("Stark", "Winter is Coming", 1100); 
const targaryen = new Targaryen("Targaryen", "Fire and Blood", 3000); 

// Chamando a função de batalha
const winner = BattleOfTheHouses(greyjoy, greyjoy.numSoldiers, stark, stark.numSoldiers, baratheon, baratheon.numSoldiers, lannister, lannister.numSoldiers, targaryen, targaryen.numSoldiers);
console.log(winner);

stark.addHeir(new Heir("JonSnow", 25, 1));

stark.printHouseInfo();
