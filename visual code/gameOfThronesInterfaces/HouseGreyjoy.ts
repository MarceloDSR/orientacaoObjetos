import { HouseRules } from "./HouseRules";
import { NobleHouse } from "./NobleHouse";

export class HouseGreyjoy extends NobleHouse implements HouseRules {
    nameHouse: string;
    motto: string;
}