import { IChecker } from "../../interface";
import { Truncate } from "../../../barrel/statements";
import { InvalidOption } from "../invalidOption";
declare class MySqlInvalidTruncateOption extends InvalidOption implements IChecker {
    checker: Truncate;
    appliesTo: string[];
}
export { MySqlInvalidTruncateOption };
