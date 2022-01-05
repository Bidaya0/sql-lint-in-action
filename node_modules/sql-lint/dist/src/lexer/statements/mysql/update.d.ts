import { Query } from "../../../reader/query";
import { ILexer } from "../../interface";
declare class Update implements ILexer {
    options: string[];
    tokenise(query: Query): Query;
}
export { Update };
