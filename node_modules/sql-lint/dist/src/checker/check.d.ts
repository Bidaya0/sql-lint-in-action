declare abstract class Check {
    prefix: string;
    /**
     * Infers the name of the error message from the child's
     * class name.
     */
    getName(): string;
}
export { Check };
