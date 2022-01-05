import { Query } from "../../../reader/query";
import { ILexer } from "../../interface";
declare class PostgresCreate implements ILexer {
    options: string[];
    tokenise(query: Query): Query;
}
export { PostgresCreate };
