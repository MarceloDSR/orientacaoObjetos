import { NobleHouse } from "./NobleHouse";

export function BattleOfTheHouses(house1: NobleHouse, army1: number, house2: NobleHouse, army2: number): string {
    console.log(`Batalha entre as casas ${house1} e ${house2}`);
  
    if (army1 > army2) {
      return `${house1} Won the battle!`;
    } else if (army2 > army1) {
      return `${house2} Won the battle!`;
    } else {
      return 'The battle was drawn';
    }
  }