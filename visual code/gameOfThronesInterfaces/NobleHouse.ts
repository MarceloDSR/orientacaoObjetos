import { HouseHeir } from "./HouseHeir";

export class NobleHouse {
    nameHouse: string; 
    motto: string; 
    heirs: HouseHeir[] = [];
    numSoldiers: number; 
   

constructor(nameHouse: string, motto: string, numSoldiers: number) {
    this.nameHouse = nameHouse;
    this.motto = motto;
    this.numSoldiers = numSoldiers
}

addHeir(heir: HouseHeir): void {
    this.heirs.push(heir);
  }

  printHouseInfo(): void {
    console.log(`Noble House ${this.nameHouse}`);
    console.log(`Motto: ${this.motto}`);
    console.log(`Heir: ${this.heirs}`);

    for (let i = 0; i < this.heirs.length; i++) {
        const heir = this.heirs[i];
        console.log(`${i + 1}. ${heir.heirName}, Age: ${heir.heirAge}, position in succession: ${heir.successionNumber}`);
    }
}
}  
