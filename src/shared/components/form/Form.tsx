import React, { useState } from "react";
import { Button } from "../button/Button";
import { TopRow } from "./ui/top-row/TopRow";
import "./styles.scss";

export const Form: React.FC<{
	formClass: string;
	Component: React.FC | null;
	childrenBtn: string;
}> = ({ formClass, Component, childrenBtn }): React.JSX.Element => {
	const [isEmailError, setEmailError] = useState(false);
	const [isPasswordError, setPasswordError] = useState(false);

	const validateEmail = (e: any) => {
		const re =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		if (!e.target.value.match(re)) {
			setEmailError(true);
		} else {
			setEmailError(false);
		}
	};

	const validatePassword = (e: any) => {
		if (e.target.value.length < 6) {
			setPasswordError(true);
		} else {
			setPasswordError(false);
		}
	};

	return (
		<div className="access">
			<div className="container">
				<form className={`form ${formClass}`}>
					<TopRow />
					<div className="form__header">
						<div className="form__header-title">
							<h2 className="title">Sign Up for Free</h2>
						</div>
					</div>
					{Component && <Component />}
					<input
						type="text"
						name="email"
						className="input"
						onBlur={validateEmail}
						placeholder="Email address"
						required
					/>
					{isEmailError && (
						<span className="error">
							Не правильно введен email или пароль
						</span>
					)}
					<input
						type="text"
						name="password"
						className="input"
						onBlur={validatePassword}
						placeholder="Set A Password"
						required
					/>
					{isPasswordError && (
						<span className="error">
							Не правильно введен пароль
						</span>
					)}

					<Button children={childrenBtn} isPending={false} />
				</form>
			</div>
		</div>
	);
};
