export type UserType = {
	firstName?: string;
	lastName?: string;
	email: string;
	password: string;
	error: {
		firstName: boolean;
		lastName: boolean;
		email: boolean;
		password: boolean;
	};
};

export type ProductType = {
	category: string;
	description: string;
	id: number;
	image: string;
	price: number;
	rating: { rate: number; count: number };
	title: string;
};
