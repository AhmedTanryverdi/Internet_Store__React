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

export async function fetchUser(url: string, data: Object) {
	try {
		const response = await fetch(`http://localhost:8000/${url}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			return { data, status: response.status, ok: false };
		}

		const resultFetchingData = await response.json();
		return { data: resultFetchingData, status: response.status, ok: true };
	} catch (error) {
		return { data, status: 500, ok: false };
	}
}
