import { IFormat } from "../interface";
import { CheckerResult } from "../../checker/checkerResult";
declare class SimpleFormat implements IFormat {
    getMessage(prefix: string, result: CheckerResult, verbosity: number): string;
}
export { SimpleFormat };
