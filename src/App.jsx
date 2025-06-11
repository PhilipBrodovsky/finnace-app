import { useContext, useEffect, useState } from "react";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { SignupForm } from "./components/SignupForm/SignupForm";
import { TransactionsPage } from "./pages/TransactionsPage/TransactionsPage";

import { Link, Route, useLocation } from "wouter";
import { Card } from "./components/Card/Card";
import { AuthContext } from "./contexts/AuthContext/AuthContext";
import { useIsMobile } from "./hooks/useIsMobile";
import HomePage from "./pages/HomePage/HomePage";

const PAGES = {
	PAGE1: "page1",
	PAGE2: "page2",
	PAGE3: "transactions",
};

export function App() {
	const [page, setPage] = useState(PAGES.PAGE1);

	const { user } = useContext(AuthContext);

	const [_, navigate] = useLocation();

	const isMobile = useIsMobile();

	console.log("App isMobile", isMobile);

	// return <TransactionsPage />;

	// return <SignupForm />;

	// return <LoginForm />;

	return (
		<div className="app">
			{/* <Sidebar page={page} prop="philip" /> */}
			<div className="main">
				<Route path="/">
					<HomePage />
				</Route>

				<Route path="/transactions">
					<Transactions />
				</Route>
				<Route path="/budgets" nest>
					<Page2 />
				</Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/signup">
					<SignupPage />
				</Route>
			</div>
		</div>
	);
}

function LoginPage() {
	const { setUser } = useContext(AuthContext);
	const [_, navigate] = useLocation();

	return (
		<div className="">
			<h1>LOGIN PAGE</h1>
			<button
				onClick={() => {
					setUser({
						id: 1,
						name: "Philip",
					});
					navigate("/");
				}}
			>
				login
			</button>
			<button
				onClick={() => {
					navigate("/signup");
				}}
			>
				create account here
			</button>
		</div>
	);
}
function SignupPage() {
	const { setUser } = useContext(AuthContext);
	const [_, navigate] = useLocation();

	return (
		<div className="">
			<h1>signup PAGE</h1>
			<button
				onClick={() => {
					setUser({
						id: 1,
						name: "Philip",
					});
					navigate("/");
				}}
			>
				signup
			</button>
			<button
				onClick={() => {
					navigate("/login");
				}}
			>
				login
			</button>
		</div>
	);
}

function Header1() {
	return <div className="">title</div>;
}

function Header2(props) {
	return <div className="">{props.title}</div>;
}

function Sidebar() {
	return (
		<div className="sidebar">
			<Link
				// onClick={() => setPage(PAGES.PAGE1)}
				className={(active) => (active ? "active" : "")}
				href="/"
			>
				overview
			</Link>
			<Link
				// onClick={() => setPage(PAGES.PAGE2)}
				className={(active) => (active ? "active" : "")}
				href="/transactions"
			>
				transactions
			</Link>
			<Link
				// onClick={() => setPage(PAGES.PAGE3)}
				className={(active) => (active ? "active" : "")}
				href="/budgets"
			>
				budgets
			</Link>
		</div>
	);
}

function Overview() {
	const context = useContext(AuthContext);
	console.log("overview", context);

	return (
		<h1 className="page">
			{!!context.user && context.user.name}
			<Card>1</Card>
			<Card>2</Card>
			<Card>3</Card>
			<button
				onClick={() => {
					context.setUser(null);
				}}
			>
				logout
			</button>
		</h1>
	);
}
function Page2() {
	return (
		<div className="">
			<h1 className="page">budgets</h1>
			{/* nested route */}
			<Route path={"/nested"}>nested route</Route>
		</div>
	);
}

export function Transactions() {
	let [transactions, setTransactions] = useState([
		{
			id: 1,
			name: "Bravo ze spa",
			amount: 25,
			date: Date.now(),
		},
	]);

	console.log("APP render", transactions);
	return (
		<div className="transactions">
			<div className="">
				<button
					onClick={() => {
						const newTrans = {
							id: Math.random(),
							name: "new transaction",
							date: Date.now(),
						};
						// const newTransactions = [...transactions];
						// newTransactions.push(newTrans);
						setTransactions([...transactions, newTrans]);
					}}
				>
					create transaction
				</button>
			</div>
			<div className="transactions">
				{transactions.map((transaction) => {
					return <TransactionsItem transaction={transaction} />;
				})}
			</div>
		</div>
	);
}

function TransactionsItem({ transaction }) {
	function handleRemove(data) {
		console.log("handleRemove", data);
		// todo something with data
	}
	return (
		<div key={transaction.id} className="transaction">
			<TransactionsTitle handleRemove={handleRemove} transaction={transaction} />
			<div className="value">{transaction.amount}</div>
		</div>
	);
}

function TransactionsTitle({ transaction, handleRemove }) {
	return (
		<h1 className="title">
			{transaction.name}
			<button
				onClick={() => {
					handleRemove({ message: "x button clicked" });
				}}
			>
				X
			</button>
		</h1>
	);
}
