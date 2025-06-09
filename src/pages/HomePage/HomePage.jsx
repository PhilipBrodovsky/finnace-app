import { BudgetCard } from "../../components/BudgetCard/BudgetCard";

const budget = {
	id: "1",
	maxAmount: 500,
	spent: 250,
	title: "learn react",
	theme: "blue",
};

export function HomePage() {
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
