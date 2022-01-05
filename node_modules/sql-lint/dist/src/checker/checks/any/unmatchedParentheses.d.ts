import { Query } from "../../../reader/query";
import { CheckerResult } from "../../checkerResult";
import { IChecker } from "../../interface";
import { Check } from "../../check";
declare class UnmatchedParentheses extends Check implements IChecker {
    message: string;
    requiresConnection: boolean;
    additionalInformation: string;
    appliesTo: string[];
    check(query: Query): CheckerResult;
}
export { UnmatchedParentheses };
