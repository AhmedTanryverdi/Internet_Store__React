import React from "react";
import "./login.scss";
import { Form } from "../../../../shared/components/form/Form";



export const Login: React.FC = (): React.JSX.Element => {
	return (
		<>
			<Form formClass="login" Component={null} childrenBtn="log in"/>
		</>
	);
};
