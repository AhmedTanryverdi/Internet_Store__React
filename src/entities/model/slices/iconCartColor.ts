import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	color: string;
} = {
	color: "blue",
};
const iconCartColorSlice = createSlice({
	name: "iconCartColorSlice",
	initialState,
	reducers: {
		setColor(state, actions) {
			state.color = actions.payload;
		},
	},
});

export const { setColor } = iconCartColorSlice.actions;

export default iconCartColorSlice.reducer;
