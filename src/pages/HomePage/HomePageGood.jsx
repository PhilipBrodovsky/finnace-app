export function HomePage() {
	return (
		<div
			style={{
				display: "flex",
				gap: "24px",
				margin: 10,
			}}
		>
			<Card>
				<CardDescription>description 1</CardDescription>
				<CardTitle color={"primary"}>cart title</CardTitle>
				<CardButton>click me</CardButton>
			</Card>

			<Card>
				<CardTitle border color={"red"}>
					red title
				</CardTitle>
				<CardDescription color={"primary"}>description 2</CardDescription>
			</Card>

			<Card>
				<CardTitle>card without description</CardTitle>
				<CardButton>dont click me</CardButton>
			</Card>
		</div>
	);
}

function Card({ children }) {
	return (
		<div
			style={{
				height: "300px",
				width: "240px",
				border: "1px solid",
				borderRadius: 8,
				background: "white",
			}}
		>
			{children}
		</div>
	);
}

const descriptionColors = {
	default: "black",
	primary: "green",
};
function CardDescription({ children, color }) {
	const descriptionColor = descriptionColors[color] ?? descriptionColors.default;
	return <h1 style={{ color: descriptionColor }}>{children}</h1>;
}

function CardTitle({ children, color }) {
	const titleColor = titleColors[color] ?? titleColors.default;
	return <h1 style={{ color: titleColor }}>{children}</h1>;
}

function CardButton({ children }) {
	return <button>{children}</button>;
}

const titleColors = {
	default: "black",
	primary: "red",
};

// 1) with title and RED
// 2) description blue or above title
// 3) button
