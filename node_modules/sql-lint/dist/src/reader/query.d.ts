import { Line } from "./line";
declare class Query {
    lines: Line[];
    category: string;
    getContent(): string;
}
export { Query };
