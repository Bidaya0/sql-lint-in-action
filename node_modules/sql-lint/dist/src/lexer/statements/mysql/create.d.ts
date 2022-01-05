import { Query } from "../../../reader/query";
import { ILexer } from "../../interface";
declare class Create implements ILexer {
    options: string[];
    tokenise(query: Query): Query;
}
export { Create };
