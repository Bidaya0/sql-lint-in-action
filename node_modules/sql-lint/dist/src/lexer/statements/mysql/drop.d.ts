import { Query } from "../../../reader/query";
import { ILexer } from "../../interface";
declare class Drop implements ILexer {
    options: string[];
    tokenise(query: Query): Query;
}
export { Drop };
