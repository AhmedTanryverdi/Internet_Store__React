import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	errorForm: boolean;
} = {
	errorForm: false,
};

const errorFormSlice = createSlice({
	name: "errorFormSlice",
	initialState,
	reducers: {
		setError: (state, actions) => {
			state.errorForm = actions.payload;
		},
	},
});

export const { setError } = errorFormSlice.actions;

export default errorFormSlice.reducer;
