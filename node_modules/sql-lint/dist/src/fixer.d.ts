import { Query } from "./reader/query";
declare class Fixer {
    fix(query: Query): string;
    private fixKeywords;
}
export { Fixer };
