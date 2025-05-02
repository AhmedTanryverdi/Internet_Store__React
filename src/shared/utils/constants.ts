import {
	validateEmail,
	validateName,
	validatePassword,
} from "./functions/functions";
import { InputType } from "./types/types";

export const InputField: InputType[] = [
	{
		name: "email",
		type: "email",
		placeholder: "email",
		validateField: validateEmail,
	},
	{
		name: "password",
		type: "password",
		placeholder: "password",
		validateField: validatePassword,
	},
];

export const InputFieldRegister: InputType[] = [
	{
		name: "firstname",
		type: "text",
		placeholder: "firstname",
		validateField: validateName,
	},
	{
		name: "lastname",
		type: "text",
		placeholder: "lastname",
		validateField: validateName,
	},
];
