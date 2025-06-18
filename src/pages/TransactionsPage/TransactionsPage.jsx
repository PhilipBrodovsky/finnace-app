// https://jsonplaceholder.typicode.com/posts

import { memo, useEffect, useState } from "react";
import { WithProtectedRoute } from "../../util-components/ProtectedRoute";

async function getTransactions() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	return await res.json();
}

// let transactions = await getTransactions();

const _TransactionsPage = memo(function TransactionsPage() {
	//
	const [transactions, setTransactions] = useState([]);

	// MOUNT - run only after first render
	useEffect(() => {
		console.log("useEffect");

		getTransactions().then(function (data) {
			setTransactions(data);
		});
	}, []);

	console.log("RENDER", transactions);

	return (
		<div className="TransactionsPage">
			<button>save</button>
			{transactions.map((transaction, indx) => {
				return (
					<div key={indx} className="">
						{transaction.title}
					</div>
				);
			})}
			<div></div>
		</div>
	);
});

export const TransactionsPage = WithProtectedRoute(_TransactionsPage);
