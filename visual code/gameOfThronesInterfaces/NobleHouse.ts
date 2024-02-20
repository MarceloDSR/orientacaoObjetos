import { Heir } from "./Heir";

export class NobleHouse {
    nameHouse: string; 
    motto: string; 
    numSoldiers: number; 
    heirs: Heir[] = [];
   

constructor(nameHouse: string, motto: string, numSoldiers: number) {
    this.nameHouse = nameHouse;
    this.motto = motto;
    this.numSoldiers = numSoldiers
}

addHeir(heir: Heir) {
    this.heirs.push(heir);
  }

  printHouseInfo(): void {
    console.log(`Noble House ${this.nameHouse}`);
    console.log(`Motto: ${this.motto}`);
    console.log(`Heir:`);

    for (let i = 0; i < this.heirs.length; i++) {
        const heir = this.heirs[i];
        console.log(`${i + 1}. ${heir.heirName}, Age: ${heir.heirAge}, position in succession: ${heir.successionNumber}`);
    }
}
}  
