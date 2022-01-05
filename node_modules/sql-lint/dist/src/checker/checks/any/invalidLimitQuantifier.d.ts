import { Query } from "../../../reader/query";
import { CheckerResult } from "../../checkerResult";
import { IChecker } from "../../interface";
import { Check } from "../../check";
import { ILexer } from "../../../lexer/interface";
declare class InvalidLimitQuantifier extends Check implements IChecker {
    message: string;
    additionalInformation: string;
    requiresConnection: boolean;
    appliesTo: string[];
    checker: ILexer;
    check(query: Query): CheckerResult;
}
export { InvalidLimitQuantifier };
