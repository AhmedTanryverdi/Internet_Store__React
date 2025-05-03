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
	category: string;
	description: string;
	id: number;
	image: string;
	price: number;
	rating: { rate: number; count: number };
	title: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
