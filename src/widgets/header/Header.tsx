import React from "react";
import "./header.scss";

export const Header: React.FC = (): React.JSX.Element => {
	return (
		<header className="header">
			<div className="container">
				<div className="content">
					<h1 className="title">Лучшие товары</h1>
				</div>
			</div>
		</header>
	);
};
