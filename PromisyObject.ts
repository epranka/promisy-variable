export class PromisyObject<T extends { [key: string]: any }> {
	private vars: T;

	/**
	 *Creates an instance of PromisyObject.
	 * @param {T} vars Object with initial values
	 * @memberof PromisyObject
	 */
	constructor(vars: T) {
		this.vars = vars;
	}

	/**
	 * Sets the *value* for *key* in the object
	 *
	 * @param {keyof T} key Property key
	 * @param {*} value Property value
	 * @memberof PromisyObject
	 */
	public set(key: keyof T, value: any) {
		this.vars[key] = value;
	}

	/**
	 * Returns the value associated to the *key*
	 *
	 * @param {keyof T} key Object property
	 * @returns {*} Value of property *key*
	 * @memberof PromisyObject
	 */
	public get(key: keyof T) {
		return this.vars[key];
	}

	/**
	 * Wait for the value *expected* in property *key* within *timeout*
	 *
	 * @param {keyof T} key Object property
	 * @param {*} expected Expected value
	 * @param {number} [timeout=0] If timeout reached, but *key* value is not as *expected* promise rejects. Set timeout to 0 (default) for infinite waiting.
	 * @returns {Promise<void>}
	 * @memberof PromisyObject
	 */
	public waitFor(key: keyof T, expected: any, timeout: number = 0) {
		let vvar = this.vars[key];
		if (vvar === expected) return Promise.resolve();
		return new Promise((resolve, reject) => {
			if (timeout) {
				timeout = setTimeout(() => {
					Object.defineProperty(this.vars, key, {
						value: vvar,
						writable: true
					});
					reject(
						`[PromisyVariables] waitFor timeout. Expected '${expected}' for '${key}'`
					);
				}, timeout);
			}
			Object.defineProperty(this.vars, key, {
				configurable: true,
				enumerable: true,
				get: () => vvar,
				set: (v: any) => {
					if (expected === v) {
						if (timeout) clearTimeout(timeout);
						Object.defineProperty(this.vars, key, {
							value: v,
							writable: true
						});
						resolve(v);
					} else {
						vvar = v;
					}
				}
			});
		});
	}
}

export const PObj = PromisyObject;
