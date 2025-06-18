import { expect, test } from "vitest";
import { getSumTransactions } from "./getSumTransactions";

test("transactions default check", () => {
	const data = [{ amount: 10 }, { amount: -5 }];
	const result = getSumTransactions(data);
	expect(result).toBe(5);
});

test("transactions default check 2", () => {
	const data = [{ amount: -10 }, { amount: 5 }];

	const result = getSumTransactions(data);
	expect(result).toBe(-5);
});

test("transactions default check 2", () => {
	const data = [{ amount: -10 }, { amount: 5 }];

	const result = getSumTransactions(data);
	expect(result).toBe(-5);
});

test("transactions with amount undefined", () => {
	const data = [{ amount: undefined }];

	const result = getSumTransactions(data);
	expect(result).toBe(0);
});

test("transactions empty array", () => {
	const data = [];
	const result = getSumTransactions(data);
	expect(result).toBe(0);
});
