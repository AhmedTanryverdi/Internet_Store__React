import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../shared/utils/types/types";

const initialState: IUser = {
	token: "",
	user: {
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	},
};

const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		setUser(state, actions) {
			state.user = actions.payload;
			state.token = actions.payload?.accessToken;
		},
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
