import React from "react";
import './register.scss';
import { Login } from "../login/Login";

export const Register: React.FC = (): React.JSX.Element => {
	return (
		<div className="register">
			<div className="register__name">
				<input
					type="text"
					className="register__name-input"
					placeholder="First name"
				/>
				<input
					type="text"
					className="register__name-input"
					placeholder="Last name"
				/>
			</div>
            <Login />
		</div>
	);
};
