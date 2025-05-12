import { configureStore } from "@reduxjs/toolkit";
import errorFormSlice from "../../entities/model/slices/errorFormSlice";
import userSlice from "../../entities/model/slices/userSlice";
import filterSlice from "../../entities/model/slices/filterSlice";
import cartSlice from "../../entities/model/slices/cartSlice";

const store = configureStore({
	reducer: {
		errorForm: errorFormSlice,
		user: userSlice,
		filter: filterSlice,
		cart: cartSlice,
	},
});

export default store;
