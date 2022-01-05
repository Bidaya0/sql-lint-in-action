import { Query } from "../reader/query";
import IDatabase from "../database/interface";
import { Printer } from "../printer";
/**
 * Runs all the checks.
 */
declare class CheckerRunner {
    run(sqlQueries: Query[], printer: Printer, prefix: string, omittedErrors: string[], driver: string, database?: IDatabase): Promise<void>;
}
export { CheckerRunner };
