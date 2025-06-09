import { createContext } from "react";
import "./BudgetCard.css";
import { useContext } from "react";

const BudgetContext = createContext(null);
const useBudget = () => useContext(BudgetContext);

export function BudgetCard({ children, budget }) {
	return (
		<BudgetContext.Provider value={budget}>
			<div
				style={{
					width: 320,
					minHeight: 300,
					padding: 16,
					boxShadow: "2px 4px 8px gray",
					display: "flex",
					flexDirection: "column",
					gap: 24,
				}}
			>
				{children}
			</div>
		</BudgetContext.Provider>
	);
}

BudgetCard.Title = BudgetTitle;
BudgetCard.Progress = BudgetProgress;
BudgetCard.Data = BudgetData;

function BudgetTitle() {
	const budget = useBudget();

	if (!budget) return null;

	return <div className="BudgetTitle">{budget.title}</div>;
}

function BudgetProgress() {
	const { maxAmount, spent } = useBudget();

	return (
		<div>
			<h6>max amount: {maxAmount}</h6>
			<div
				style={{
					border: "1px solid",
				}}
			>
				<div
					style={{
						background: "red",
						transition: "width 1s",
						width: (spent * 100) / maxAmount + "%",
					}}
				>
					{maxAmount}
				</div>
			</div>
		</div>
	);
}

function BudgetData() {
	const { maxAmount, spent } = useBudget();

	return (
		<div className="BudgetCard">
			<div className="">spent: {spent}</div>
			<div className="">remaining: {maxAmount - spent}</div>
		</div>
	);
}
