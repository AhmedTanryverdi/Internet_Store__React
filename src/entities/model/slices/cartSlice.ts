import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	iconColor: string;
	totalPrice: number;
} = {
	iconColor: "blue",
	totalPrice: 0,
};
const iconCartColorSlice = createSlice({
	name: "iconCartColorSlice",
	initialState,
	reducers: {
		setColor(state, actions) {
			state.iconColor = actions.payload;
		},
		setTotalPrice(state, actions) {
			state.totalPrice = actions.payload;
		},
	},
});

export const { setColor, setTotalPrice } = iconCartColorSlice.actions;

export default iconCartColorSlice.reducer;
