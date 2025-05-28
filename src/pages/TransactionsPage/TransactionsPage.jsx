// https://jsonplaceholder.typicode.com/posts

import { useEffect, useState } from "react";

async function getTransactions() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	return await res.json();
}

function useIsMobile() {}

// let transactions = await getTransactions();

export function TransactionsPage() {
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
			{transactions.map((transaction, indx) => {
				return (
					<div key={indx} className="">
						{transaction.title}
					</div>
				);
			})}
		</div>
	);
}
