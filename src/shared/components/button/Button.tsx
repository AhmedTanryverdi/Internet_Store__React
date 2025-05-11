import React from "react";
import "./styles.scss";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
	href?: string;
	onClick?: (...args: any) => void;
};

export const Button: React.FC<ButtonProps> = ({
	children,
	disabled,
	onClick,
	className,
}): React.JSX.Element => {
	return (
		<button
			type="submit"
			className={className}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
