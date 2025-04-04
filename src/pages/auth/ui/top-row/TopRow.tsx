import React from "react";
import "./toprow.scss";

export const TopRow: React.FC<{
	isRegister: boolean;
	setRegister: (isRegister: boolean) => void;
}> = ({ isRegister, setRegister }): React.JSX.Element => {
	return (
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
	);
};
