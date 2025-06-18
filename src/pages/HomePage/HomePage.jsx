import { useDispatch, useSelector } from "react-redux";
import { BudgetCard } from "../../components/BudgetCard/BudgetCard";
import { WithProtectedRoute } from "../../util-components/ProtectedRoute";
import { Card } from "../../components/Card/Card";
import { transactionsSlice } from "../../store/transactionsSlice";

const budget = {
	id: "1",
	maxAmount: 500,
	spent: 250,
	title: "learn react",
	theme: "blue",
};

function HomePage(props) {
	const { isLoading, data: transactions } = useSelector((state) => state.transactions);

	console.log("transactions", transactions);

	const dispatch = useDispatch();

	return (
		<div
			style={{
				display: "flex",
				gap: "24px",
				margin: 10,
			}}
		>
			<div>
				<button
					data-testid="save"
					onClick={() => {
						const transaction = transactions[0];

						dispatch(
							transactionsSlice.actions.setTransaction({ ...transaction, ...{ amount: 70 } })
						);
					}}
				>
					Save
				</button>
			</div>
			<Card className="">
				{isLoading && "loading..."}
				{!isLoading &&
					transactions.map((transaction) => {
						return (
							<div
								data-testid={`transaction-${transaction.id}`}
								key={transaction.id}
								className=""
							>
								{transaction.name} ({transaction.amount})
							</div>
						);
					})}
			</Card>
			<BudgetCard budget={budget}>
				<BudgetCard.Title />
				<BudgetCard.Progress />
				<BudgetCard.Data />
			</BudgetCard>
		</div>
	);
}

const ProtectedHomePage = WithProtectedRoute(HomePage);

export default ProtectedHomePage;
