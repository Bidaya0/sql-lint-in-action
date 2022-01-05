import { Query } from "../../../reader/query";
import { CheckerResult } from "../../checkerResult";
import { IChecker } from "../../interface";
import { Check } from "../../check";
declare class HungarianNotation extends Check implements IChecker {
    message: string;
    additionalInformation: string;
    requiresConnection: boolean;
    appliesTo: string[];
    check(query: Query): CheckerResult;
}
export { HungarianNotation };
