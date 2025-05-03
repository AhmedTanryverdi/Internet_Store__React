import React from "react";
import "./exit.scss";

export const Exit: React.FC = (): React.JSX.Element => {
	return (
		<div className="exit">
			<button type="button" className="exit__btn">
				Выйти
			</button>
		</div>
	);
};
