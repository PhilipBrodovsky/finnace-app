import { useRef } from "react";
import "./LoginForm.css";

// uncontrolled component
export function LoginForm() {
	const emailEl = useRef(null);
	const passwordEl = useRef(null);

	console.log("emailEl", emailEl);

	function login(event) {
		event.preventDefault(); // disable submit form

		const email = emailEl.current.value;
		const password = passwordEl.current.value;
		console.log("login", email, password);
	}

	return (
		<form onSubmit={login} noValidate className="LoginForm">
			<input ref={emailEl} type="email" />
			<input ref={passwordEl} type="password" placeholder="password" />
			<button type="submit">login</button>
		</form>
	);
}
