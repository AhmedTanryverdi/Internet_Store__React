import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	textInput: string;
} = {
	textInput: "",
};
const filterSlice = createSlice({
	name: "filterSlice",
	initialState,
	reducers: {
		setTextInput(state, actions) {
			state.textInput = actions.payload;
		},
	},
});

export const { setTextInput } = filterSlice.actions;

export default filterSlice.reducer;
