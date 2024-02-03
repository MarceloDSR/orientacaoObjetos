import { Heir } from "./Heir"
import { HouseHeir } from "./HouseHeir";

export class NobleHouse {
    nameHouse: string; 
    motto: string; 
    heirs: HouseHeir[] = [];
   

constructor(nameHouse: string, motto: string) {
    this.nameHouse = nameHouse;
    this.motto = motto;
}

addHeir(heir: HouseHeir): void {
    this.heirs.push(heir);
  }

  printHouseInfo(): void {
    console.log(`Casa Nobre: ${this.nameHouse}`);
    console.log(`Lema: ${this.motto}`);
    console.log("Herdeiros:");

    for (let i = 0; i < this.heirs.length; i++) {
        const heir = this.heirs[i];
        console.log(`${i + 1}. ${heir.heirName}, Age: ${heir.heirAge}, position in succession: ${heir.successionNumber}`);
    }
}
}  