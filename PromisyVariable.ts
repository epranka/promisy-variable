import { PromisyObject } from "./PromisyObject";

export class PromisyVariable {
	private promisyObject: PromisyObject<{ value: any }>;

	/**
	 * Creates an instance of PromisyVariable.
	 * @param {*} value Initial value
	 * @memberof PromisyVariable
	 */
	constructor(value: any) {
		this.promisyObject = new PromisyObject({ value: value });
	}

	/**
	 * Returns current variable value
	 *
	 * @returns {*} Current variable value
	 * @memberof PromisyVariable
	 */
	public get() {
		return this.promisyObject.get("value");
	}

	/**
	 * Set variable value
	 *
	 * @param {*} value New variable value
	 * @memberof PromisyVariable
	 */
	public set(value: any) {
		this.promisyObject.set("value", value);
	}

	/**
	 * Wait for the value *expected* within *timeout*
	 *
	 * @param {*} expected Expected value
	 * @param {number} [timeout=0] If timeout reached, but *key* value is not as *expected* promise rejects. Set timeout to 0 (default) for infinite waiting.
	 * @returns {Promise<void>}
	 * @memberof PromisyVariable
	 */
	public async waitFor(expected: any, timeout: number = 0) {
		return this.promisyObject.waitFor("value", expected, timeout);
	}
}

export const PVar = PromisyVariable;
