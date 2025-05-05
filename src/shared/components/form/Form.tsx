import React, { useEffect } from "react";
import { Button } from "../button/Button";
import { TopRow } from "./ui/top-row/TopRow";
import { Input } from "./ui/input/Input";
import { RootState, useAppDispatch, UserType } from "../../utils/types/types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { InputField } from "../../utils/constants";
import { useCustomForm } from "./utils/hooks";
import "./styles.scss";
import { Title } from "./ui/title/Title";

export const Form: React.FC<{
	formClass: string;
	Component: React.FC | null;
	childrenBtn: string;
	url: string;
}> = ({ formClass, Component, childrenBtn, url }): React.JSX.Element => {
	const initialState = useSelector<RootState, UserType>(
		(state) => state.user.user
	);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const storageUser = localStorage.getItem("user");

		if (storageUser !== null) {
			navigate("/main");
		}
	}, []);

	const [state, formAction, isPending, status] = useCustomForm(
		initialState,
		url,
		dispatch
	);
	useEffect(() => {
		if (status.ok) {
			navigate("/main");
		}
	}, [status]);

	return (
		<div className="access">
			<div className="container">
				<form action={formAction} className={`form ${formClass}`}>
					<TopRow />
					<Title />
					{Component && <Component />}

					{InputField.map((item, index: number) => {
						const value = state[item.name];
						return (
							<Input
								key={index}
								{...item}
								defaultValue={`${value}`}
							/>
						);
					})}

					<Button children={childrenBtn} isPending={isPending} />
					{status.error && (
						<span className="error">{status.message}</span>
					)}
				</form>
			</div>
		</div>
	);
};
