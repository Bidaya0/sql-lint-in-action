import { Query } from "../../../reader/query";
import { ILexer } from "../../interface";
declare class PostgresTruncate implements ILexer {
    options: string[];
    tokenise(query: Query): Query;
}
export { PostgresTruncate };
