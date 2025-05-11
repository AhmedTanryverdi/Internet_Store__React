import React from "react";
import "./styles.scss";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	isPending?: boolean;
	href?: string;
	onClick?: (...args: any)=>void;
};

export const Button: React.FC<ButtonProps> = ({
	children,
	isPending,
	href,
	onClick,
	className,
}): React.JSX.Element => {
	return (
		<button
			type="submit"
			className={className}
			disabled={isPending}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
