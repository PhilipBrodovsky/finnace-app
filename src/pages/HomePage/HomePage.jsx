import { useSelector } from "react-redux";
import { BudgetCard } from "../../components/BudgetCard/BudgetCard";
import { WithProtectedRoute } from "../../util-components/ProtectedRoute";
import { Card } from "../../components/Card/Card";

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

	return (
		<div
			style={{
				display: "flex",
				gap: "24px",
				margin: 10,
			}}
		>
			<Card className="">
				{isLoading && "loading..."}
				{!isLoading &&
					transactions.map((transaction) => {
						return (
							<div key={transaction.id} className="">
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
