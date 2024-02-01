import { HouseHeir } from "./HouseHeir";
export class NobleHouse {
    nameHouse: string; 
    motto: string; 
   

    constructor(nameHouse: string, motto: string) {
        this.nameHouse = nameHouse;
        this.motto = motto;
    }
    public getNameHouse(): string {
        return this.nameHouse;
    }
    public setNameHouse(value: string) {
        this.nameHouse = value;
    }

    public getMotto(): string {
        return this.motto;
    }
    public setMotto(value: string) {
        this.motto = value;
    }
}