import {
	validateEmail,
	validateName,
	validatePassword,
} from "../../../utils/functions/functions";

export function validate(data: Object): boolean {
	let error: boolean = false;
	for (const [key, value] of Object.entries(data)) {
		switch (key) {
			case "firstname": {
				error = validateName(value);
				break;
			}
			case "lastname": {
				error = validateName(value);
				break;
			}
			case "email": {
				error = validateEmail(value);
				break;
			}
			case "password": {
				error = validatePassword(value);
				break;
			}
		}
	}
	return error;
}
