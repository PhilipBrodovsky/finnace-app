export function Button({ onClick, children }) {
	return (
		<div data-testid="btn" onClick={onClick} className="">
			{children}
		</div>
	);
}
