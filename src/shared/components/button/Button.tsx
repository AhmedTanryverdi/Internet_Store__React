import React from "react";
import "./styles.scss";

export const Button: React.FC<{ children: string; isPending: boolean }> = ({
	children,
	isPending,
}): React.JSX.Element => {
	return (
		<button
			type="submit"
			className="button"
			disabled={isPending}
		>
            {children}
        </button>
	);
};
