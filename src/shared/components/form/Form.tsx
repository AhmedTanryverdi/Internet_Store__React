import React, { useActionState, useState } from "react";
import { Button } from "../button/Button";
import { TopRow } from "./ui/top-row/TopRow";
import { Input } from "./ui/input/Input";
import { validate } from "./utils/functions";
import {
	IUser,
	RootState,
	useAppDispatch,
	UserType,
} from "../../utils/types/types";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../entities/model/slices/userSlice";
import { useSelector } from "react-redux";
import { InputField } from "../../utils/constants";
import "./styles.scss";

export const Form: React.FC<{
	formClass: string;
	Component: React.FC | null;
	childrenBtn: string;
	url: string;
}> = ({ formClass, Component, childrenBtn, url }): React.JSX.Element => {
	const initialState = useSelector<RootState, IUser>((state) => state.user);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [error, setError] = useState(false);
	const [message, setMessage] = useState<string>("");

	const [state, formAction, isPending] = useActionState(
		async (
			initialState: Partial<UserType>,
			formData: FormData
		): Promise<Partial<UserType>> => {
			const data: UserType = Object.fromEntries(
				formData.entries()
			) as UserType;

			const errorValidate = validate(data);

			if (errorValidate) {
				setError(errorValidate);
				return data;
			}

			try {
				const response = await fetch(`http://localhost:8000/${url}`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data),
				});

				if (!response.ok) {
					setError(true);
					setMessage("Пользователь не найден!");
					return data;
				}
				const result = await response.json();

				dispatch(setUser({ ...result.user }));
				localStorage.setItem("user", JSON.stringify(result));
			} catch (error) {
				setError(true);
				setMessage("Непредвиденная ошибка!");
				return data;
			}

			setError(false);
			setMessage("");

			navigate("/main");
			return initialState;
		},
		initialState.user
	);

	return (
		<div className="access">
			<div className="container">
				<form action={formAction} className={`form ${formClass}`}>
					<TopRow />
					<div className="form__header">
						<div className="form__header-title">
							<h2 className="title">Sign Up for Free</h2>
						</div>
					</div>
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
					{error && <span className="error">{message}</span>}
				</form>
			</div>
		</div>
	);
};
