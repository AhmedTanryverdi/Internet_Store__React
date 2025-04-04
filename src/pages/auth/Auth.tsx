import React, { useActionState, useState } from "react";
import { Register } from "./ui/register/Register";
import { Login } from "./ui/login/Login";
import { TopRow } from "./ui/top-row/TopRow";
import { UserType } from "../../shared/types/types";
import { useNavigate } from "react-router-dom";
import "./auth.scss";

type ValidationType = UserType & { fulfilled: boolean; reject: boolean };
const initialState: ValidationType = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	error: {
		firstName: false,
		lastName: false,
		email: false,
		password: false,
	},

	fulfilled: false,
	reject: false,
};

const updateData = (formData: FormData) => {
	const data = {
		firstName: formData.get("firstName") as string,
		lastName: formData.get("lastName") as string,
		email: formData.get("email") as string,
		password: formData.get("password") as string,

		error: {
			firstName: false,
			lastName: false,
			email: false,
			password: false,
		},

		fulfilled: false,
		reject: false,
	};

	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (data.firstName.length < 3 || Number(data.firstName[0])) {
		data.error.firstName = true;
	} else if (data.lastName.length < 3 || Number(data.lastName[0])) {
		data.error.lastName = true;
	} else if (!data.email.match(re)) {
		data.error.email = true;
	} else if (data.password.length < 6) {
		data.error.password = true;
	} else {
		const error = {
			firstName: false,
			lastName: false,
			email: false,
			password: false,
		};

		data.error = error;
	}

	return data;
};

async function vlidationForm(
	previousState: ValidationType,
	formData: FormData
): Promise<ValidationType> {
	const data = updateData(formData);

	if (
		data.error.firstName ||
		data.error.lastName ||
		data.error.email ||
		data.error.password
	) {
		return data;
	}

	const fetchData = {
		firstname: data.firstName,
		lastname: data.lastName,
		email: data.email,
		password: data.password,
	};

	try {
		const response = await fetch("http://localhost:8000/users", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(fetchData),
		});

		if (!response.ok) {
			throw new Error(
				"В данный момент сервер не может обработать ваш запрос! :("
			);
		}
	} catch (error) {
		console.log(error);
		data.reject = true;
		return data;
	}

	previousState.fulfilled = true;
	return previousState;
}

export const Auth: React.FC = (): React.JSX.Element => {
	const [isRegister, setRegister] = useState(true);
	const navigate = useNavigate();
	const [state, formAction, isPending] = useActionState(
		vlidationForm,
		initialState
	);

	if (state.fulfilled) {
		navigate("/main");
	}

	return (
		<div className="auth">
			<div className="container">
				<TopRow isRegister={isRegister} setRegister={setRegister} />
				<form action={formAction} className="form">
					<div className="form__header">
						<div className="form__header-title">
							<h2 className="title">Sign Up for Free</h2>
						</div>
					</div>

					<div className="form__body">
						{(isRegister && <Register {...state} />) || (
							<Login {...state} />
						)}
						<div className="form__submit">
							<button
								type="submit"
								className="form__submit-btn"
								disabled={isPending}
							>
								{(isRegister && <span>get started</span>) || (
									<span>log in</span>
								)}
							</button>
						</div>
					</div>
				</form>
				{state.reject && (
					<span className="errorStatus">
						В данный момент сервер не может обработать ваш запрос!
						{" :("}
					</span>
				)}
			</div>
		</div>
	);
};
