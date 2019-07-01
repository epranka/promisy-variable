import { PromisyObject, PromisyVariable, PObj, PVar } from "../dist";
import { expect, assert } from "chai";

const promisyObject = new PromisyObject({
	foo: "bar"
});

const promisyVariable = new PromisyVariable("bar");

describe("PromisyObject", () => {
	it("short name", () => {
		expect(promisyObject).instanceOf(PObj);
	});

	it("simple get variable", () => {
		const value = promisyObject.get("foo");
		expect(value).equals("bar");
	});

	it("simple set variable", () => {
		promisyObject.set("foo", "zoo");
		const value = promisyObject.get("foo");
		expect(value).equals("zoo");
	});

	it("wait for variable value", function(done) {
		this.slow(15000);
		(async () => {
			await promisyObject.waitFor("foo", "bar");
			done();
		})();
		setTimeout(() => {
			promisyObject.set("foo", "bar");
		}, 1000);
	});

	it("wait for variable with timeout error", function(done) {
		this.slow(15000);
		promisyObject
			.waitFor("foo", "zoo", 500)
			.then(() => {
				done(new Error("Expected to reject"));
			})
			.catch(err => {
				assert.isDefined(err);
				done();
			})
			.catch(done);
	});
});

describe("PromisyVariable", () => {
	it("short name", () => {
		expect(promisyVariable).instanceOf(PVar);
	});

	it("simple get variable value", () => {
		const value = promisyVariable.get();
		expect(value).equals("bar");
	});

	it("simple set variable value", () => {
		promisyVariable.set("zoo");
		const value = promisyVariable.get();
		expect(value).equals("zoo");
	});
	it("wait for variable value", function(done) {
		this.slow(15000);
		(async () => {
			await promisyVariable.waitFor("bar");
			done();
		})();
		setTimeout(() => {
			promisyVariable.set("bar");
		}, 1000);
	});
	it("wait for variable with timeout error", function(done) {
		this.slow(15000);
		promisyVariable
			.waitFor("zoo", 500)
			.then(() => {
				done(new Error("Expected to reject"));
			})
			.catch(err => {
				assert.isDefined(err);
				done();
			})
			.catch(done);
	});
});
