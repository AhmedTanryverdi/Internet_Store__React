export const validateEmail = (str: string) => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (!str.match(re)) {
		return true;
	}
	return false;
};

export const validatePassword = (str: string): boolean => {
	
	if (str.length < 6) {
		return true;
	}
	return false;
};

export const validateName = (str: string) => {
	if (str.length < 3) {
		return true;
	}
	return false;
};
