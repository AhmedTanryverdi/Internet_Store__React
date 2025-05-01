import React from "react";
import { Form } from "../../../../shared/components/form/Form";
import "./login.scss";

export const Login: React.FC = (): React.JSX.Element => {
	return (
		<>
			<Form formClass="login" Component={null} childrenBtn="log in" url="login" />
		</>
	);
};
