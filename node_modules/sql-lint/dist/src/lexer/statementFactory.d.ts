import { ILexer } from "./interface";
declare class StatementFactory {
    build(statement: string): ILexer;
}
export { StatementFactory };
