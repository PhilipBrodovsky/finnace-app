export function HomePage() {
	return (
		<div
			style={{
				display: "flex",
				gap: "24px",
			}}
		>
			<Card
				title="cart title"
				description={{
					text: "description 1",
					style: {
						color: "blue",
					},
					isAboveTitle: true,
				}}
				button={
					<button id="id" onClick={() => {}}>
						click me
					</button>
				}
			/>

			<Card
				title="red title"
				style={{ color: "green", border: "1px solid" }}
				description={{ text: "description 2" }}
			/>

			<Card button={<button>dont click me</button>} />
		</div>
	);
}

function Card({ title, style, button, description = {} }) {
	return (
		<div
			style={{
				height: "300px",
				width: "240px",
				border: "1px solid",
			}}
		>
			{!!description && description.isAboveTitle && (
				<p style={description.style}>{description.text}</p>
			)}
			<h1 style={style}>{title}</h1>

			{!!description && !description.isAboveTitle && (
				<p style={description.style}>{description.text}</p>
			)}

			{button}
		</div>
	);
}

// 1) with title and RED
// 2) description blue or above title
// 3) button
