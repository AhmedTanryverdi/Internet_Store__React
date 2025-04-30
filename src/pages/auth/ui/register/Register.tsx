import React, { useState } from "react";
import { Form } from "../../../../shared/components/form/Form";
import "./register.scss";

export const Register: React.FC = (): React.JSX.Element => {
	const [nameError, setNameError] = useState("");

	const validateName = (e: any) => {
		if (e.target.value < 3) {
			setNameError("Поля должны содержать не менее трех символов!");
		} else {
			setNameError("");
		}
	};

	const RegisterFields: React.FC = (): React.JSX.Element => {
		return (
			<div className="register-fields">
				<div className="inputs">
					<input
						type="text"
						name="firstName"
						className="input"
						onBlur={validateName}
						placeholder="First name"
					/>
					<input
						type="text"
						name="lastName"
						className="input"
						onBlur={validateName}
						placeholder="Last name"
					/>
				</div>
				{nameError && <span className="error">{nameError}</span>}
			</div>
		);
	};

	return (
		<div className="register">
			<Form
				formClass=""
				Component={RegisterFields}
				childrenBtn="get started"
			/>
		</div>
	);
};
