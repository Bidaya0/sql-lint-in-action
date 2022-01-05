import { Query } from "../../reader/query";
import { CheckerResult } from "../checkerResult";
import { IChecker } from "../interface";
import { Check } from "../check";
import { ILexer } from "../../lexer/interface";
declare class InvalidOption extends Check implements IChecker {
    message: string;
    additionalInformation: string;
    checker: ILexer;
    requiresConnection: boolean;
    appliesTo: string[];
    check(query: Query): CheckerResult;
}
export { InvalidOption };
