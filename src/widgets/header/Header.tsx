import React, { useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Exit } from "./ui/exit/Exit";
import { Filter } from "./ui/filter/Filter";
import { RootState, useAppDispatch } from "../../shared/utils/types/types";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../entities/model/slices/userSlice";
import { useSelector } from "react-redux";
import { setColor } from "../../entities/model/slices/cartSlice";
import "./header.scss";

export const Header: React.FC = (): React.JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const iconCartColor = useSelector<RootState, string>(
		(state) => state.cart.iconColor
	);
	useEffect(() => {
		const colorStorage = localStorage.getItem("cartProducts");
		const storageUser = localStorage.getItem("user");

		if (colorStorage) {
			dispatch(setColor("green"));
		}

		if (storageUser !== null) {
			dispatch(setUser(JSON.parse(storageUser)));
		} else {
			navigate("/");
		}
	}, [iconCartColor]);

	return (
		<header className="header">
			<div className="container">
				<div className="content">
					<h1 className="title" onClick={() => navigate("/")}>
						Лучшие товары
					</h1>
					<div className="actions">
						<Filter />
						<IoCartOutline
							color={
								(iconCartColor === "green" && "green") || "blue"
							}
							size={28}
							onClick={() => navigate("/cart")}
						/>
						<Exit />
					</div>
				</div>
			</div>
		</header>
	);
};
