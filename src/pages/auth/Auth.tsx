import React, { useState } from "react";
import "./auth.scss";
import { Register } from "./register/Register";
import { Login } from "./login/Login";

export const Auth: React.FC = (): React.JSX.Element => {
	const [isRegister, setRegister] = useState(true);
	return (
		<div className="auth">
			<div className="container">
				<div className="auth__topRow">
					<div className="auth__topRow-leftBtn">
						<button
							type="button"
							className={`btn ${isRegister && "active"}`}
							onClick={() => setRegister(true)}
						>
							Sign Up
						</button>
					</div>
					<div className="auth__topRow-rightBtn">
						<button
							type="button"
							className={`btn ${!isRegister && "active"}`}
							onClick={() => setRegister(false)}
						>
							Sign In
						</button>
					</div>
				</div>
				<form action="" className="form">
					<div className="form__header">
						<div className="form__header-title">
							<h2 className="title">Sign Up for Free</h2>
						</div>
					</div>

					<div className="form__body">
						{(isRegister && <Register />) || <Login />}
						<div className="form__submit">
							<button type="submit" className="form__submit-btn">
								{(isRegister && <span>get started</span>) || (
									<span>log in</span>
								)}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
