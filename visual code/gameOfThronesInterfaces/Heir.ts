import { HouseHeir } from "./HouseHeir";

export class Heir implements HouseHeir {
    heirName: string;
    heirAge: number;
    successionNumber: number;
    heirs: HouseHeir[] = [];

    constructor(heirName: string, heirAge: number, successionNumber: number){
        this.heirName = heirName
        this.heirAge = heirAge
        this.successionNumber = successionNumber
    }
    

}
