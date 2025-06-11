import { BudgetCard } from "../../components/BudgetCard/BudgetCard";
import { WithProtectedRoute } from "../../util-components/ProtectedRoute";

const budget = {
	id: "1",
	maxAmount: 500,
	spent: 250,
	title: "learn react",
	theme: "blue",
};

function HomePage(props) {
	console.log("HomePage", props);

	return (
		<div
			style={{
				display: "flex",
				gap: "24px",
				margin: 10,
			}}
		>
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
