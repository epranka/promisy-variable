export declare class PromisyObject<T extends {
    [key: string]: any;
}> {
    private vars;
    /**
     *Creates an instance of PromisyObject.
     * @param {T} vars Object with initial values
     * @memberof PromisyObject
     */
    constructor(vars: T);
    /**
     * Sets the *value* for *key* in the object
     *
     * @param {keyof T} key Property key
     * @param {*} value Property value
     * @memberof PromisyObject
     */
    set(key: keyof T, value: any): void;
    /**
     * Returns the value associated to the *key*
     *
     * @param {keyof T} key Object property
     * @returns {*} Value of property *key*
     * @memberof PromisyObject
     */
    get(key: keyof T): T[keyof T];
    /**
     * Wait for the value *expected* in property *key* within *timeout*
     *
     * @param {keyof T} key Object property
     * @param {*} expected Expected value
     * @param {number} [timeout=0] If timeout reached, but *key* value is not as *expected* promise rejects. Set timeout to 0 (default) for infinite waiting.
     * @returns {Promise<void>}
     * @memberof PromisyObject
     */
    waitFor(key: keyof T, expected: any, timeout?: number): Promise<unknown>;
}
export declare const PObj: typeof PromisyObject;
