import { Query } from "../../../reader/query";
import { ILexer } from "../../interface";
declare class PostgresSelect implements ILexer {
    options: string[];
    tokenise(query: Query): Query;
}
export { PostgresSelect };
