export function getSumTransactions(transactions = []) {
	return transactions.reduce((result, transaction) => {
		result += transaction.amount ?? 0;
		return result;
	}, 0);
}
