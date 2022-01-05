import { Query } from "../../../reader/query";
import { ILexer } from "../../interface";
declare class Truncate implements ILexer {
    options: string[];
    tokenise(query: Query): Query;
}
export { Truncate };
