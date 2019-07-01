export declare class PromisyVariable {
    private promisyObject;
    /**
     * Creates an instance of PromisyVariable.
     * @param {*} value Initial value
     * @memberof PromisyVariable
     */
    constructor(value: any);
    /**
     * Returns current variable value
     *
     * @returns {*} Current variable value
     * @memberof PromisyVariable
     */
    get(): any;
    /**
     * Set variable value
     *
     * @param {*} value New variable value
     * @memberof PromisyVariable
     */
    set(value: any): void;
    /**
     * Wait for the value *expected* within *timeout*
     *
     * @param {*} expected Expected value
     * @param {number} [timeout=0] If timeout reached, but *key* value is not as *expected* promise rejects. Set timeout to 0 (default) for infinite waiting.
     * @returns {Promise<void>}
     * @memberof PromisyVariable
     */
    waitFor(expected: any, timeout?: number): Promise<unknown>;
}
export declare const PVar: typeof PromisyVariable;
