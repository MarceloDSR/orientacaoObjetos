import { NobleHouse } from "./NobleHouse";
import { HouseRules } from "./HouseRules";

export class HouseBaratheon extends NobleHouse implements HouseRules {
    nameHouse: string;
    motto: string;
    successionNumber: number;
}