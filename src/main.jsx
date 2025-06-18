// import "./vanila";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { AuthContextProvider } from "./contexts/AuthContext/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

console.log("mode", import.meta.env.MODE);

const rootEl = document.getElementById("root");
const app = createRoot(rootEl);

// main render
app.render(
	<Provider store={store}>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</Provider>
);
