import React, { ChangeEvent, useState } from "react";
import "./input.scss";

export const Input: React.FC<{
	name: string;
	type: string;
	placeholder: string;
	defaultValue: string;
	validateField: (str: string) => Boolean;
}> = ({ name, type, placeholder, defaultValue, validateField }) => {
	const [error, setError] = useState<Boolean>(false);

	return (
		<label>
			<input
				type={`${type}`}
				name={`${name}`}
				className="input"
				placeholder={`${placeholder}`}
				defaultValue={defaultValue}
				onBlur={(e: ChangeEvent<HTMLInputElement>) =>
					setError(validateField(e.target.value))
				}
			/>
			{error && (
				<span className="error">
					{name === "password"
						? "веддите не менее 6-ти символов"
						: "некоректный email"}
				</span>
			)}
		</label>
	);
};
