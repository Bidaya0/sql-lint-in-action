import { IChecker } from "../../interface";
import { Alter } from "../../../barrel/statements";
import { InvalidOption } from "../invalidOption";
declare class PostgresInvalidAlterOption extends InvalidOption implements IChecker {
    checker: Alter;
    appliesTo: string[];
}
export { PostgresInvalidAlterOption };
