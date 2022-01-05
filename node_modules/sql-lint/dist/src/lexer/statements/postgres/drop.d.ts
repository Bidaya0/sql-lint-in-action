import { Query } from "../../../reader/query";
import { ILexer } from "../../interface";
declare class PostgresDrop implements ILexer {
    options: string[];
    tokenise(query: Query): Query;
}
export { PostgresDrop };
