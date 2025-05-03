import React from "react";
import "./exit.scss";
import { useAppDispatch } from "../../../../shared/utils/types/types";
import { setUser } from "../../../../entities/model/slices/userSlice";

export const Exit: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
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
				}}
			>
				Выйти
			</button>
		</div>
	);
};
