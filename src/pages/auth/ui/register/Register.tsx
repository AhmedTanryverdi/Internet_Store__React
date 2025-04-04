import React from "react";
import { Login } from "../login/Login";
import { UserType } from "../../../../shared/types/types";
import "./register.scss";

export const Register: React.FC<UserType> = (state): React.JSX.Element => {

	return (
		<div className="register">
			<div className="register__name">
				<input
					type="text"
					defaultValue={state.firstName}
					className={`register__name-input ${
						state.error.firstName && "error"
					}`}
					name="firstName"
					placeholder="First name"
				/>
				<input
					type="text"
					defaultValue={state.lastName}
					className={`register__name-input ${
						state.error.lastName && "error"
					}`}
					name="lastName"
					placeholder="Last name"
				/>
			</div>
			{(state.error.firstName || state.error.lastName) && (
				<span className="text-error">
					Поле не должно начинаться с цифры и содержать не менее трех
					букв!
				</span>
			)}

			<Login {...state} />
		</div>
	);
};
