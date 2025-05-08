import { configureStore } from "@reduxjs/toolkit";
import errorFormSlice from "../../entities/model/slices/errorFormSlice";
import userSlice from "../../entities/model/slices/userSlice";
import filterSlice from "../../entities/model/slices/filterSlice";

const store = configureStore({
	reducer: {
		errorForm: errorFormSlice,
		user: userSlice,
		filter: filterSlice
	},
});

export default store;
