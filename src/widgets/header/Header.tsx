import React from "react";
import "./header.scss";
import { Exit } from "./ui/exit/Exit";
import { Filter } from "./ui/filter/Filter";

export const Header: React.FC = (): React.JSX.Element => {
	return (
		<header className="header">
			<div className="container">
				<div className="content">
					<h1 className="title">Лучшие товары</h1>
					<div className="actions">
                        <Filter />
						<Exit />
					</div>
				</div>
			</div>
		</header>
	);
};
