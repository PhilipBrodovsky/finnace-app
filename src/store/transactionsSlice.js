import { createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
	name: "transactions",
	initialState: {
		data: [],
		isLoading: false,
	},
	reducers: {
		setData(state, action) {
			state.data = action.payload;
		},

		setTransaction(state, action) {
			let index = state.data.findIndex((t) => t.id === action.payload.id);
			state.data[index] = action.payload;
		},

		toggleIsLoading(state) {
			state.isLoading = !state.isLoading;
		},
	},
	selectors: {
		selectTransactions(state) {
			return state;
		},
	},
});
