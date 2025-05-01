import React from "react";
import { Form } from "../../../../shared/components/form/Form";
import { Input } from "../../../../shared/components/form/ui/input/Input";
import { InputFieldRegister } from "../../../../shared/utils/constants";
import { RootState, UserType } from "../../../../shared/utils/types/types";
import { useSelector } from "react-redux";
import "./register.scss";

export const Register: React.FC = (): React.JSX.Element => {
	const RegisterFields: React.FC = (): React.JSX.Element => {
		const user = useSelector<RootState, Partial<UserType>>(
			(state) => state.user.user
		);
		return (
			<div className="register-fields">
				<div className="inputs">
					{InputFieldRegister.map((item, index: number) => {
						const value = user[item?.name];
						
						return (
							<Input
								key={index}
								{...item}
								defaultValue={`${value}`}
							/>
						);
					})}
				</div>
			</div>
		);
	};

	return (
		<div className="register">
			<Form
				formClass=""
				Component={RegisterFields}
				childrenBtn="get started"
				url="register"
			/>
		</div>
	);
};
