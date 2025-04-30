import React from "react";
import { UserType } from "../../../../shared/types/types";
import "./login.scss";
import { Form } from "../../../../shared/components/form/Form";



export const Login: React.FC<UserType> = (state): React.JSX.Element => {
	return (
		<>
			<Form formClass="login" Component={null} childrenBtn="log in"/>
			{(state.error.email || state.error.password) && (
				<span className="error">Не правильно введен email или пароль</span>
			)}
		</>
	);
};
