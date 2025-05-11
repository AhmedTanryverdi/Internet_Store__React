import React from "react";
import { StarRating } from "./star-rating/StarRating";
import "./descriptionProduct.scss";
import { Button } from "../../../../../shared/components/button/Button";

export const DescriptionProduct: React.FC<{
	title: string;
	price: number;
	description: string;
	rating: number;
}> = ({ title, price, description, rating }): React.JSX.Element => {
	return (
		<div className="description">
			<h2 className="title">{title}</h2>
			<StarRating rating={rating} />
			<p className="price">${price}</p>
			<p className="description">{description}</p>
			<Button children="добавить в корзину" className="addToCard" />
		</div>
	);
};
