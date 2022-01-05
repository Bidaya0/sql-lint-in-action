import { IChecker } from "../../interface";
import { Truncate } from "../../../barrel/statements";
import { InvalidOption } from "../invalidOption";
declare class PostgresInvalidTruncateOption extends InvalidOption implements IChecker {
    checker: Truncate;
    appliesTo: string[];
}
export { PostgresInvalidTruncateOption };
