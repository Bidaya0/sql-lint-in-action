import { IChecker } from "./interface";
declare class CheckFactory {
    build(check: string): IChecker;
}
export { CheckFactory };
