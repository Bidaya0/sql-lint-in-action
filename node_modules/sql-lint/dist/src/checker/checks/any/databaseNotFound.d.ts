import { Query } from "../../../reader/query";
import { CheckerResult } from "../../checkerResult";
import { IChecker } from "../../interface";
import { Check } from "../../check";
declare class DatabaseNotFound extends Check implements IChecker {
    message: string;
    additionalInformation: string;
    requiresConnection: boolean;
    appliesTo: string[];
    databases: string[];
    constructor(databases: any[]);
    check(query: Query): CheckerResult;
}
export { DatabaseNotFound };
