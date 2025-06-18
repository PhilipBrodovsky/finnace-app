async function fakeDelay() {
	return new Promise((resolve) => setTimeout(resolve, 1000));
}
const transactions = [
	{
		id: 1,
		date: Date.now(),
		amount: 50,
		name: "salary",
	},
];
export const api = {
	async getTransactions() {
		await fakeDelay();
		return transactions;
	},
};
