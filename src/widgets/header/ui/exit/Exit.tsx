import React from "react";
import { useAppDispatch } from "../../../../shared/utils/types/types";
import { setUser } from "../../../../entities/model/slices/userSlice";
import "./exit.scss";
import { useNavigate } from "react-router-dom";

export const Exit: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<div className="exit">
			<button
				type="button"
				className="exit__btn"
				onClick={() => {
					localStorage.clear();
					dispatch(
						setUser({
							firstname: "",
							lastname: "",
							email: "",
							password: "",
						})
					);
					navigate("/");
				}}
			>
				Выйти
			</button>
		</div>
	);
};
