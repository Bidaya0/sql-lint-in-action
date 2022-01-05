import { Query } from "./query";
/**
 * Grabs the querie(s) from the --file flag
 */
export declare function getQueryFromFile(file: string): Query[];
export declare function putContentIntoLines(contents: string): Query[];
/**
 * Grabs the query from the --query flag
 * Line is always 0 since there are no
 * lines on the terminal.
 */
export declare function getQueryFromLine(query: string): Query[];
