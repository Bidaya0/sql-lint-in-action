import { Token } from "../lexer/token";
declare class Line {
    num: number;
    content: string;
    tokens: Token[];
    constructor(content: string, num: number);
}
export { Line };
