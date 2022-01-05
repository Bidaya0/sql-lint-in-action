import { Query } from "../../../reader/query";
import { ILexer } from "../../interface";
declare class Select implements ILexer {
    options: string[];
    tokenise(query: Query): Query;
}
export { Select };
