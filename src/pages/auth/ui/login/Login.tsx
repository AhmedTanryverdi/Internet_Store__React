import React from "react";
import { UserType } from "../../../../shared/types/types";
import "./login.scss";

export const Login: React.FC<UserType> = (state): React.JSX.Element => {
	return (
		<>
			<div className="login">
				<input
					type="text"
					defaultValue={state.email}
					className="login__input"
					name="email"
					placeholder="Email address"
					required
				/>
				<input
					type="text"
					defaultValue={state.password}
					className="login__input"
					name="password"
					placeholder="Set A Password"
					required
				/>
			</div>
			{(state.error.email || state.error.password) && (
				<span className="error">Не правильно введен email или пароль</span>
			)}
		</>
	);
};
