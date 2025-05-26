import { useState } from "react";
import "./SignupForm.css";

// controlled component
export function SignupForm() {
	// WAY 1
	const [form, setForm] = useState({});

	function login(event) {
		event.preventDefault(); // disable submit form

		console.log("login", form);
	}

	function handleChange(event) {
		const { value, name } = event.target;

		setForm({ ...form, [name]: value });
	}

	console.log("form", form);

	return (
		<form onSubmit={login} name="signup" autoComplete={"off"} noValidate className="LoginForm">
			<h1>sign up</h1>
			<input name="email" onChange={handleChange} value={form.email ?? ""} id="x" type="email" />
			<input
				name="password"
				onChange={handleChange}
				value={form.password ?? ""}
				type="password"
				placeholder="password"
			/>
			<button>login</button>
		</form>
	);
}
