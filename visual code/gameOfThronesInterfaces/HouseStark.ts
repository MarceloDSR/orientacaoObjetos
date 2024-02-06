import { NobleHouse } from "./NobleHouse";
import { HouseRules } from "./HouseRules";

export class HouseStark extends NobleHouse implements HouseRules  {
    nameHouse: string;
    motto: string;
}