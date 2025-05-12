import { configureStore } from "@reduxjs/toolkit";
import errorFormSlice from "../../entities/model/slices/errorFormSlice";
import userSlice from "../../entities/model/slices/userSlice";
import filterSlice from "../../entities/model/slices/filterSlice";
import iconCartColor from "../../entities/model/slices/iconCartColor";
const store = configureStore({
	reducer: {
		errorForm: errorFormSlice,
		user: userSlice,
		filter: filterSlice,
		iconCartColor: iconCartColor,
	},
});

export default store;
