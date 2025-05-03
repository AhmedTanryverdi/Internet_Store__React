import React from "react";
import "./filter.scss";

export const Filter: React.FC = (): React.JSX.Element => {
	return (
		<div className="filter-container">
			<div className="filter__label">
				<input type="text" id="filter" className="filter"/>
			</div>
		</div>
	);
};
