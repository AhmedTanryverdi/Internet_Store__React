import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./toprow.scss";

export const TopRow: React.FC<{}> = (): React.JSX.Element => {
	const navigate = useNavigate();
	const location = useLocation();
	const activeButton = location.pathname.includes("/register")
		? "signUp"
		: "signIn";

	return (
		<div className="topRow">
			<div className="topRow__leftBtn">
				<button
					type="button"
					className={`btn ${
						activeButton === "signUp" ? "focus" : ""
					}`}
					onClick={() => navigate("/register")}
				>
					Sign Up
				</button>
			</div>
			<div className="topRow__rightBtn">
				<button
					type="button"
					className={`btn ${
						activeButton === "signIn" ? "focus" : ""
					}`}
					onClick={() => navigate("/")}
				>
					Sign In
				</button>
			</div>
		</div>
	);
};
