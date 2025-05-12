import { ProductType } from "../types/types";

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

interface localStorageType extends ProductType {
	quentity: number;
}

export const addToCart = (product: ProductType) => {
	const cartProducts: localStorageType[] = JSON.parse(
		localStorage.getItem("cartProducts")!
	);

	if (cartProducts !== null) {
		for (let element of cartProducts) {
			if (element.id === product.id) {
				element.quentity += 1;
				localStorage.setItem(
					"cartProducts",
					JSON.stringify(cartProducts)
				);
				return;
			}
		}

		localStorage.setItem(
			"cartProducts",
			JSON.stringify([...cartProducts, { ...product, quentity: 1 }])
		);
		return;
	}

	localStorage.setItem(
		"cartProducts",
		JSON.stringify([{ ...product, quentity: 1 }])
	);
};
