import React from "react";
import "./toprow.scss";
import { useNavigate } from "react-router-dom";

export const TopRow: React.FC<{}> = (): React.JSX.Element => {
	const navigate = useNavigate();
	return (
		<div className="topRow">
			<div className="topRow__leftBtn">
				<button
					type="button"
					className="btn"
					onClick={() => {
						navigate("/register");
					}}
				>
					Sign Up
				</button>
			</div>
			<div className="topRow__rightBtn">
				<button
					type="button"
					className="btn"
					onClick={() => {
						navigate("/");
					}}
				>
					Sign In
				</button>
			</div>
		</div>
	);
};
