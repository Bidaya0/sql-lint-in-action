/**
 * Every 'checker' brings back a result of type CheckerResult.
 */
declare class CheckerResult {
    /**
     * The line number of the content
     */
    line: number;
    /**
     *  The content for the current line
     */
    content: string;
    /**
     *  The additionalInformation for the current line
     */
    additionalInformation: string;
    constructor(line: number, content: string, additionalInformation?: string);
}
export { CheckerResult };
