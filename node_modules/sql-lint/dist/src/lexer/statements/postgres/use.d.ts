import { Query } from "../../../reader/query";
import { ILexer } from "../../interface";
declare class PostgresUse implements ILexer {
    options: string[];
    tokenise(query: Query): Query;
}
export { PostgresUse };
