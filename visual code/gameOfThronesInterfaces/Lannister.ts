import { NobleHouse } from "./NobleHouse";
import { Heir } from "./Heir";
import { HouseRules } from "./HouseRules";

export class Lannister extends NobleHouse implements HouseRules {
  nameHouse: string; 
  motto: string; 
  numSoldiers: number;
  heirs: Heir[] = [];

    constructor(nameHouse: string, motto: string, numSoldiers: number){
        super(nameHouse, motto, numSoldiers);
      }
}
