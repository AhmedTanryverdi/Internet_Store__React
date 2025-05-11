import React, { useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Exit } from "./ui/exit/Exit";
import { Filter } from "./ui/filter/Filter";
import { useAppDispatch } from "../../shared/utils/types/types";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../entities/model/slices/userSlice";
import "./header.scss";

export const Header: React.FC = (): React.JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const storageUser = localStorage.getItem("user");

		if (storageUser !== null) {
			dispatch(setUser(JSON.parse(storageUser)));
		} else {
			navigate("/");
		}
	}, []);

	return (
		<header className="header">
			<div className="container">
				<div className="content">
					<h1 className="title" onClick={()=>navigate("/")}>Лучшие товары</h1>
					<div className="actions">
						<Filter />
						<IoCartOutline color="blue" size={28}/>
						<Exit />
					</div>
				</div>
			</div>
		</header>
	);
};
