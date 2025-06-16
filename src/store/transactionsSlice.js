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
		toggleIsLoading(state) {
			state.isLoading = !state.isLoading;
		},
	},
});
