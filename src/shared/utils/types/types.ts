import { useDispatch } from "react-redux";
import store from "../../../app/store";

export type UserType = {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
};

export type InputType = {
	name: keyof Partial<UserType>;
	type: string;
	placeholder: string;
	validateField: (str: string) => Boolean;
};

export interface IUser {
	user: UserType;
}

export type ProductType = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	thumbnail: string;
	images: string[];
};

export interface localStorageType extends ProductType {
	quentity: number;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
