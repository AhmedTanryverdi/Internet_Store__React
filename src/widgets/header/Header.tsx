import React, { useEffect } from "react";
import { Exit } from "./ui/exit/Exit";
import { Filter } from "./ui/filter/Filter";
import { useSelector } from "react-redux";
import { RootState, UserType } from "../../shared/utils/types/types";
import { useNavigate } from "react-router-dom";
import "./header.scss";

export const Header: React.FC = (): React.JSX.Element => {
	const navigate = useNavigate();
	const user = useSelector<RootState, UserType>((state) => state.user.user);
	useEffect(() => {
		if (!user.email && !user.email) {
			navigate("/");
		}
	}, [user]);
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
