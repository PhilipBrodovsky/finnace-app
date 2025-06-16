// STATE MANAGEMENT
let state = {
	transactions: [{ name: "sell ice scream" }], // transactions reducer
	user: null, // reducer user
	isMobile: false, // isMobile reducer
};

let listeners = [];

export function getState() {
	return state;
}

// action types
const LOGIN_ACTION = "login";

// calculate next/new state
function reducer(state, action) {
	const { type, payload } = action;
	let newState = structuredClone(state);

	if (type === LOGIN_ACTION) {
		newState.user = payload;
	} else if (type === "logout") {
		newState.user = null;
	} else if (type === "happy birthday to you") {
		console.log(state, newState);

		newState.user.age = state.user.age + 1;
	}

	return newState;
}

export function dispatch(action) {
	const { type, payload } = action;
	console.log("dispatch:", type, payload);

	state = reducer(state, action);

	// middelware (action,state,newState)

	// call EVERY subscribtions
	listeners.forEach((listener) => {
		listener(state); // call listener
	});
}

export function subscribe(callback) {
	listeners.push(callback);
}

// USAGE

subscribe(logNewState);

// event 2
setTimeout(() => {
	dispatch({ type: "bugggggg", age: -50 });
}, 1000);

// event 1
setTimeout(() => {
	dispatch({
		type: LOGIN_ACTION,
		payload: { id: 1, age: 19, email: "philip@example.com" },
	});
}, 3000);

// event 1
setTimeout(() => {
	dispatch({
		type: "happy birthday to you",
	});
}, 6000);

// event 2
setTimeout(() => {
	dispatch({ type: "logout" });
}, 9000);

document.body.innerHTML = JSON.stringify(state);

// subscribe / addEventListener
function logNewState(state) {
	console.log("logNewState callback", state);
	document.body.innerHTML = JSON.stringify(state);
	// app.render(
	//     	<AuthContextProvider>
	//     		<App />
	//     	</AuthContextProvider>)
}
