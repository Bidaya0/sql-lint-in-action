import { IFormat } from "./interface";
declare class FormatterFactory {
    build(format: string): IFormat;
}
export { FormatterFactory };
