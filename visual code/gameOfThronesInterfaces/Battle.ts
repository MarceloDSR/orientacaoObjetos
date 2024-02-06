import { NobleHouse } from "./NobleHouse";
import { HouseBaratheon } from "./HouseBaratheon";
import { HouseGreyjoy } from "./HouseGreyjoy";
import { HouseLannister } from "./HouseLannister";
import { HouseStark} from "./HouseStark";
import { HouseTargaryen } from "./HouseTargaryen";
import { HouseHeir } from "./HouseHeir";
import { HouseRules } from "./HouseRules"
import { Heir } from "./Heir"

export function battleOfTheHouses(nameHouse: NobleHouse, army1: number, nameHouse1: NobleHouse, army2: number): string {
    console.log(`Batalha entre as casas ${nameHouse} e ${nameHouse1}`);
  
    if (army1 > army2) {
      return `${nameHouse} Won the battle!`;
    } else if (army2 > army1) {
      return `${nameHouse1} Won the battle!`;
    } else {
      return 'The battle was drawn';
    }
  }
  const NewStark = new HouseStark("Eddie stark", "Winter is Coming") 
  