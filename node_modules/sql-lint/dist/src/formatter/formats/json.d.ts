import { IFormat } from "../interface";
import { CheckerResult } from "../../checker/checkerResult";
declare class JsonFormat implements IFormat {
    getMessage(prefix: string, result: CheckerResult, verbosity: number): {
        source: string;
        error: string;
        line: number;
        additionalInformation: string;
    };
}
export { JsonFormat };
