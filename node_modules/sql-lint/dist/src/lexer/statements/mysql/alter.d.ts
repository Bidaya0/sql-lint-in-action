import { Query } from "../../../reader/query";
import { ILexer } from "../../interface";
declare class Alter implements ILexer {
    options: string[];
    tokenise(query: Query): Query;
}
export { Alter };
