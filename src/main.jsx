// import "./vanila";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { AuthContextProvider } from "./contexts/AuthContext/AuthContext";

const rootEl = document.getElementById("root");
const app = createRoot(rootEl);

// main render
app.render(
	<AuthContextProvider>
		<App />
	</AuthContextProvider>
);
