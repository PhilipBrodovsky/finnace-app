import { configureStore } from "@reduxjs/toolkit";
import { transactionsSlice } from "./transactionsSlice";
import { budgetsSlice } from "./budgets";

export const store = configureStore({
	reducer: {
		[transactionsSlice.name]: transactionsSlice.reducer,
		[budgetsSlice.name]: budgetsSlice.reducer,
	},
});
