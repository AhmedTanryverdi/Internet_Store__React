import { configureStore } from "@reduxjs/toolkit";
import errorFormSlice from "../../entities/model/slices/errorFormSlice";
import userSlice from "../../entities/model/slices/userSlice";

const store = configureStore({
	reducer: {
		errorForm: errorFormSlice,
		user: userSlice,
	},
});

export default store;
